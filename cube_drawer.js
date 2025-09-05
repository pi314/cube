function draw_2d_cube (sticker_colors, edge_sticker_colors, arrows) {
    let img_width = 100;

    let canvas_padding = 1;
    let tile_width = 40;
    let tile_round = 3;
    let tile_border_width = 2;
    let sticker_width = 34;

    let edge_width = 7;
    let edge_round = 1;
    let edge_border_width = 1;
    let tile_edge_gap = 3;

    let arrow_width = 4;
    let arrow_wrap_width = 1.5;
    let arrow_tip_size = 16;
    let arrow_shrink_size = arrow_tip_size / 2;

    let canvas_width = canvas_padding + edge_width + tile_edge_gap + tile_width * 3 + tile_edge_gap + edge_width + canvas_padding;

    let tile_cx0 = canvas_padding + edge_width + tile_edge_gap + (tile_width / 2);
    let tile_cx = [
        tile_cx0,
        tile_cx0 + tile_width,
        tile_cx0 + tile_width * 2,
    ];

    let tile_cy = tile_cx;

    let edge_top_cx = tile_cx;
    let edge_top_cy = canvas_padding + (edge_width / 2);

    let edge_left_cx = edge_top_cy;
    let edge_left_cy = tile_cy;

    let edge_right_cx = tile_cx[2] + (tile_width / 2) + tile_edge_gap + (edge_width / 2);
    let edge_right_cy = tile_cy;

    let edge_bottom_cx = edge_right_cy;
    let edge_bottom_cy = edge_right_cx;

    let palette = {
        'W': '#FFFFFF', // white
        'Y': '#FFED00', // yellow
        'B': '#33AAFF', // blue
        'G': '#00DD00', // green
        'R': '#FF2222', // red
        'O': '#FF8800', // orange
        '#': '#000000', // black
        '.': undefined,
    };

    sticker_colors = sticker_colors.replace(/[^\w#.]/g, '').split('').map((c) => palette[c]);

    edge_sticker_colors = edge_sticker_colors.replace(/[^\w#.]/g, '').split('').map((c) => palette[c]);

    function tile (cx, cy, color) {
        let tx = cx - tile_width / 2;
        let ty = cy - tile_width / 2;
        let sx = cx - sticker_width / 2;
        let sy = cy - sticker_width / 2;

        let fill_color = (color === undefined) ? '#000000' : 'white';

        let frame = `<rect x="${tx}" y="${ty}" width="${tile_width}" height="${tile_width}"
            rx="${tile_round}" ry="${tile_round}" stroke="black" fill="${fill_color}" stroke-width="${tile_border_width}"
            />`;
        let sticker = `<rect x="${sx}" y="${sy}" width="${sticker_width}" height="${sticker_width}"
            rx="${tile_round}" ry="${tile_round}" fill="${color}" />`;

        return frame + sticker;
    }

    function edge_h (cx, cy, color) {
        if (color === undefined) { return '' }

        let x = cx - sticker_width / 2;
        let y = cy - edge_width / 2;
        return `<rect x="${x}" y="${y}" width="${sticker_width}" height="${edge_width}"
            rx="${edge_round}" ry="${edge_round}" stroke="black" fill="${color}" stroke-width="${edge_border_width}" />`;
    }

    function edge_v (cx, cy, color) {
        if (color === undefined) { return '' }

        let x = cx - edge_width / 2;
        let y = cy - sticker_width / 2;
        return `<rect x="${x}" y="${y}" width="${edge_width}" height="${sticker_width}"
            rx="${edge_round}" ry="${edge_round}" stroke="black" fill="${color}" stroke-width="${edge_border_width}" />`;
    }

    function arrow (p) {
        p = p - 11;
        let dbl = Math.floor(p / 100);
        let a = Math.floor(p / 10) % 10;
        let b = p % 10;

        let x1 = tile_cx[a % 3];
        let y1 = tile_cy[Math.floor(a / 3)];

        let x2 = tile_cx[b % 3];
        let y2 = tile_cy[Math.floor(b / 3)];

        let mx = (x1 + x2) / 2;
        let my = (y1 + y2) / 2;
        let len = Math.pow(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2), 0.5);
        let angle = -(Math.atan2(y1 - y2, x2 - x1) * 180) / Math.PI + 90;

        let cx1 = 0;
        let cy1 = -len / 2 + arrow_shrink_size;
        let cx2 = 0;
        let cy2 = len / 2 - arrow_shrink_size;

        function wbody (x1, y1, x2, y2) {
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
            stroke="white" stroke-width="${arrow_width + arrow_wrap_width * 2}" stroke-linecap="round"
            transform="translate(${mx} ${my}) rotate(${angle})"/>`;
        }

        function body (x1, y1, x2, y2) {
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
            stroke="black" stroke-width="${arrow_width}" stroke-linecap="round"
            transform="translate(${mx} ${my}) rotate(${angle})"/>`;
        }

        function tipf (x, y, angle) {
            let ax1 = x;
            let ay1 = y - (arrow_tip_size / 2);
            let ax2 = ax1 - (arrow_tip_size / 2);
            let ay2 = ay1 + arrow_tip_size;
            let ax3 = ax1 + (arrow_tip_size / 2);
            let ay3 = ay1 + arrow_tip_size;

            return `<polygon points="${ax1} ${ay1} ${ax2} ${ay2} ${ax3} ${ay3}" fill="black" stroke="white" stroke-width="${arrow_wrap_width}"
            transform="translate(${mx}, ${my}) rotate(${angle})"/>`;
        }

        function tipr (x, y, angle) {
            let ax1 = x;
            let ay1 = y + (arrow_tip_size / 2);
            let ax2 = ax1 + (arrow_tip_size / 2);
            let ay2 = ay1 - arrow_tip_size;
            let ax3 = ax1 - (arrow_tip_size / 2);
            let ay3 = ay1 - arrow_tip_size;

            return `<polygon points="${ax1} ${ay1} ${ax2} ${ay2} ${ax3} ${ay3}" fill="black" stroke="white" stroke-width="${arrow_wrap_width}"
            transform="translate(${mx}, ${my}) rotate(${angle})"/>`;
        }

        return wbody(cx1, cy1, cx2, cy2) + tipf(cx1, cy1, angle) + (dbl ? tipr(cx2, cy2, angle) : '') + body(cx1, cy1, cx2, cy2);
    }

    return `<svg viewBox="0 0 ${canvas_width} ${canvas_width}" xmlns="http://www.w3.org/2000/svg"
        style="width: ${img_width}px; height: ${img_width}px">

        <rect x="0" y="0" width="${canvas_width}" height="${canvas_width}" fill="white" />

        ${tile(tile_cx[0], tile_cy[0], sticker_colors[0])}
        ${tile(tile_cx[1], tile_cy[0], sticker_colors[1])}
        ${tile(tile_cx[2], tile_cy[0], sticker_colors[2])}

        ${tile(tile_cx[0], tile_cy[1], sticker_colors[3])}
        ${tile(tile_cx[1], tile_cy[1], sticker_colors[4])}
        ${tile(tile_cx[2], tile_cy[1], sticker_colors[5])}

        ${tile(tile_cx[0], tile_cy[2], sticker_colors[6])}
        ${tile(tile_cx[1], tile_cy[2], sticker_colors[7])}
        ${tile(tile_cx[2], tile_cy[2], sticker_colors[8])}

        ${edge_h(edge_top_cx[0], edge_top_cy, edge_sticker_colors[0])}
        ${edge_h(edge_top_cx[1], edge_top_cy, edge_sticker_colors[1])}
        ${edge_h(edge_top_cx[2], edge_top_cy, edge_sticker_colors[2])}

        ${edge_v(edge_left_cx, edge_left_cy[0], edge_sticker_colors[3])}
        ${edge_v(edge_left_cx, edge_left_cy[1], edge_sticker_colors[4])}
        ${edge_v(edge_left_cx, edge_left_cy[2], edge_sticker_colors[5])}

        ${edge_v(edge_right_cx, edge_right_cy[0], edge_sticker_colors[6])}
        ${edge_v(edge_right_cx, edge_right_cy[1], edge_sticker_colors[7])}
        ${edge_v(edge_right_cx, edge_right_cy[2], edge_sticker_colors[8])}

        ${edge_h(edge_bottom_cx[0], edge_bottom_cy, edge_sticker_colors[9])}
        ${edge_h(edge_bottom_cx[1], edge_bottom_cy, edge_sticker_colors[10])}
        ${edge_h(edge_bottom_cx[2], edge_bottom_cy, edge_sticker_colors[11])}

        ` + ((arrows === undefined) ? '' : arrows.map((a) => arrow(a))) + `

        </svg>`;
}


function draw_3d_cube () {
    let img_width = 800;

    let canvas_width = 100;
    let canvas_padding = 1;

    let tile_height = 10;
    // tile_width should be bound to the height
    let tile_width = tile_height * Math.sqrt(3);
    let tile_gap = tile_height / 5;

    return `<svg viewBox="0 0 ${canvas_width} ${canvas_width}" xmlns="http://www.w3.org/2000/svg"
        style="width: ${img_width}px; height: ${img_width}px">
        <rect x="0" y="0" width="${canvas_width}" height="${canvas_width}" fill="white" />
    </svg>`;
}
