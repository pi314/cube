function draw_cube (pattern) {
    if (pattern?.top && pattern?.edge) {
        return draw_2d_cube(pattern?.top, pattern?.edge, pattern?.arrows);
    }

    if (pattern?.top && pattern?.front && pattern?.right) {
        return draw_3d_cube(pattern);
    }
    return ''
}


const _palette = new Map([
    ['W', '#FFFFFF'], // white
    ['Y', '#FFED00'], // yellow
    ['B', '#33AAFF'], // blue (more close to cyan)
    ['G', '#00DD00'], // green
    ['R', '#FF2222'], // red
    ['O', '#FF8800'], // orange
    ['#', '#16161D'], // eigengrau
    ['.', '#404040'], // gray
    ['_', 'transparent'], // non-exist
    ['-', 'transparent'], // non-exist
]);
function palette (code) {
    return code.replace(/[^\w#._-]/g, '')
        .split('')
        .map((c) => _palette.get(c) ?? '#AF5FFF');
}


function draw_2d_cube (top_stickers, side_stickers, arrows) {
    /*
     *         North
     *        -- -- --
     *      | ## ## ## |
     * West | ## ## ## | East
     *      | ## ## ## |
     *        -- -- --
     *         South
     *
     * -: side
     * #: tile
     * */

    top_stickers = palette(top_stickers);
    side_stickers = palette(side_stickers);

    let img_width = 100;

    let N = Math.sqrt(top_stickers.length);

    let canvas_padding = 1;
    let tile_width = 40;
    let tile_round = 3;
    let tile_border_width = 2;
    let sticker_width = 34;

    let side_width = 7;
    let side_round = 1;
    let side_border_width = 1;
    let tile_side_gap = 3;

    let arrow_width = 4;
    let arrow_wrap_width = 1.5;
    let arrow_tip_size = 16;
    let arrow_shrink_size = arrow_tip_size / 2;

    let canvas_width = canvas_padding + side_width + tile_side_gap + tile_width * N + tile_side_gap + side_width + canvas_padding;

    // Tile center x
    let tile_cx0 = canvas_padding + side_width + tile_side_gap + (tile_width / 2);
    let tile_cx = [];
    for (let i = 0; i < N; i++) {
        tile_cx.push(tile_cx0 + i * tile_width);
    }

    // Tile center y
    let tile_cy = tile_cx;

    // side centers
    let side_north_cx = tile_cx;
    let side_north_cy = canvas_padding + (side_width / 2);

    let side_west_cx = side_north_cy;
    let side_west_cy = tile_cy;

    let side_east_cx = tile_cx[N - 1] + (tile_width / 2) + tile_side_gap + (side_width / 2);
    let side_east_cy = tile_cy;

    let side_south_cx = side_east_cy;
    let side_south_cy = side_east_cx;

    function tile (cx, cy, color) {
        let tx = cx - tile_width / 2;
        let ty = cy - tile_width / 2;
        let sx = cx - sticker_width / 2;
        let sy = cy - sticker_width / 2;

        let frame = `<rect x="${tx}" y="${ty}" width="${tile_width}" height="${tile_width}"
            rx="${tile_round}" ry="${tile_round}" stroke="black" fill="white" stroke-width="${tile_border_width}"
            />`;
        let sticker = `<rect x="${sx}" y="${sy}" width="${sticker_width}" height="${sticker_width}"
            rx="${tile_round}" ry="${tile_round}" fill="${color}" />`;

        return frame + sticker;
    }

    function side_h (cx, cy, color) {
        if (color === 'transparent') { return '' }
        let x = cx - sticker_width / 2;
        let y = cy - side_width / 2;
        return `<rect x="${x}" y="${y}" width="${sticker_width}" height="${side_width}"
            rx="${side_round}" ry="${side_round}" stroke="black" fill="${color}" stroke-width="${side_border_width}" />`;
    }

    function side_v (cx, cy, color) {
        if (color === 'transparent') { return '' }
        let x = cx - side_width / 2;
        let y = cy - sticker_width / 2;
        return `<rect x="${x}" y="${y}" width="${side_width}" height="${sticker_width}"
            rx="${side_round}" ry="${side_round}" stroke="black" fill="${color}" stroke-width="${side_border_width}" />`;
    }

    function arrow (p) {
        let m = p.match(/^(\d+)(->|<->)(\d+)$/);
        if (!m) {
            return;
        }
        let dbl = m[2] == '<->';
        let a = parseInt(m[1]) - 1;
        let b = parseInt(m[3]) - 1;

        let x1 = tile_cx[a % N];
        let y1 = tile_cy[Math.floor(a / N)];

        let x2 = tile_cx[b % N];
        let y2 = tile_cy[Math.floor(b / N)];

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

    let ret = `<svg viewBox="0 0 ${canvas_width} ${canvas_width}" xmlns="http://www.w3.org/2000/svg"
            style="width: ${img_width}px; height: ${img_width}px">`;
    ret += `<rect x="0" y="0" width="${canvas_width}" height="${canvas_width}" fill="white" />`;

    // Tile stickers
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            ret += tile(tile_cx[col], tile_cy[row], top_stickers[row * N + col]);
        }
    }

    // North side stickers
    for (let i = 0; i < N; i++) {
        ret += side_h(side_north_cx[i], side_north_cy, side_stickers[i]);
    }

    // West side stickers
    for (let i = 0; i < N; i++) {
        ret += side_v(side_west_cx, side_west_cy[i], side_stickers[N + i]);
    }

    // East side stickers
    for (let i = 0; i < N; i++) {
        ret += side_v(side_east_cx, side_east_cy[i], side_stickers[N * 2 + i]);
    }

    // North side stickers
    for (let i = 0; i < N; i++) {
        ret += side_h(side_south_cx[i], side_south_cy, side_stickers[N * 3 + i]);
    }

    ret += ((arrows === undefined) ? '' : arrows.map((a) => arrow(a)))
    ret += '</svg>';
    return ret;
}


function draw_3d_cube (pattern) {
    let N = 9;
    let img_width = 100;
    let canvas_padding = 10;
    let tile_width = 40;
    let tile_gap = 6;
    let pov = 0.8;

    let tile_kite_half_height = (tile_width / 2);
    let tile_kite_half_width = tile_kite_half_height * Math.sqrt(3);
    let tile_gap_half_height = (tile_gap / 2);
    let tile_gap_half_width = tile_gap_half_height * Math.sqrt(3);

    let U = palette(pattern?.top);
    let F = palette(pattern?.front);
    let R = palette(pattern?.right);
    // let B = palette(pattern?.back);
    // let L = palette(pattern?.left);
    // let D = palette(pattern?.down);

    function deg_to_rad (deg) {
        return (deg / 360) * Math.PI * 2;
    }

    function rad_to_deg (rad) {
        return (rad / (Math.PI * 2)) * 360;
    }

    let min_x = 0;
    let min_y = 0;
    let max_x = 0;
    let max_y = 0;

    class Point {
        constructor (x, y) {
            this.x = x;
            this.y = y;
            this.r = Math.sqrt(x * x + y * y);
            this.theta = Math.atan2(y, x);
            min_x = Math.min(min_x, x);
            min_y = Math.min(min_y, y);
            max_x = Math.max(max_x, x);
            max_y = Math.max(max_y, y);
        }

        add (p) {
            return new Point(this.x + p.x, this.y + p.y);
        }

        rotate (deg) {
            let theta = this.theta - (deg * (Math.PI * 2) / 360);
            return new Point(this.r * Math.cos(theta), this.r * Math.sin(theta));
        }

        distort () {
            function lerp (a, b, t) {
                if (t == 0) {
                    return a;
                } else if (t == 1) {
                    return b;
                }
                return a + t * (b - a);
            }

            let theta = ((rad_to_deg(this.theta) - 30) + 360) % 360;
            let factor = 1;
            return new Point(this.x * factor, this.y * factor);
        }
    };

    class Sticker {
        constructor (color, points) {
            this.color = color;
            this.points = points;
        }

        render () {
            let points = this.points.map((p) => {
                let dp = p.distort();
                return `${dp.x} ${dp.y}`;
            }).join(' ');
            let color = this.color;
            return `<polygon fill="${color}" points="${points}"/>`;
        }
    }

    class Body {
        constructor (points) {
            this.points = points;
        }

        render () {
            let points = this.points.map((p) => {
                let dp = p.distort();
                return `${dp.x} ${dp.y}`;
            }).join(' ');
            let color = palette('#')[0];
            return `<polygon fill="${color}"
                stroke="${color}" stroke-width="${tile_gap}" stroke-linejoin="round"
                points="${points}"/>`;
        }
    }

    const face_deg_mapping = new Map([
        ['U', 0],
        ['F', 120],
        ['R', 240],
    ]);
    function get_sticker (face, color, offset_x, offset_y) {
        if (!color) {
            return;
        }

        let rotate_deg = face_deg_mapping.get(face);

        let center = new Point(
            offset_x * (tile_kite_half_width + tile_gap_half_width),
            offset_y * (tile_kite_half_height + tile_gap_half_height)
        );
        let p0 = center.add(new Point(0, - tile_kite_half_height)).rotate(rotate_deg);
        let p1 = center.add(new Point(tile_kite_half_width, 0)).rotate(rotate_deg);
        let p2 = center.add(new Point(0, tile_kite_half_height)).rotate(rotate_deg);
        let p3 = center.add(new Point(-tile_kite_half_width, 0)).rotate(rotate_deg);

        return new Sticker(color, [p0, p1, p2, p3]);
    }

    let top_stickers = [
        get_sticker('U', U[0], 0, -5),
        get_sticker('U', U[1], 1, -4),
        get_sticker('U', U[2], 2, -3),
        get_sticker('U', U[3], -1, -4),
        get_sticker('U', U[4], 0, -3),
        get_sticker('U', U[5], 1, -2),
        get_sticker('U', U[6], -2, -3),
        get_sticker('U', U[7], -1, -2),
        get_sticker('U', U[8], 0, -1),
    ];

    let right_stickers = [
        get_sticker('R', R[8], 0, -5),
        get_sticker('R', R[7], 1, -4),
        get_sticker('R', R[6], 2, -3),
        get_sticker('R', R[5], -1, -4),
        get_sticker('R', R[4], 0, -3),
        get_sticker('R', R[3], 1, -2),
        get_sticker('R', R[2], -2, -3),
        get_sticker('R', R[1], -1, -2),
        get_sticker('R', R[0], 0, -1),
    ];

    let front_stickers = [
        get_sticker('F', F[6], 0, -5),
        get_sticker('F', F[3], 1, -4),
        get_sticker('F', F[0], 2, -3),
        get_sticker('F', F[7], -1, -4),
        get_sticker('F', F[4], 0, -3),
        get_sticker('F', F[1], 1, -2),
        get_sticker('F', F[8], -2, -3),
        get_sticker('F', F[5], -1, -2),
        get_sticker('F', F[2], 0, -1),
    ];

    // let down_stickers = [
    //     get_sticker('U', D[0], 0, 2),
    //     get_sticker('U', D[1], 1, 3),
    //     get_sticker('U', D[2], 2, 4),
    //     get_sticker('U', D[3], -1, 3),
    //     get_sticker('U', D[4], 0, 4),
    //     get_sticker('U', D[5], 1, 5),
    //     get_sticker('U', D[6], -2, 4),
    //     get_sticker('U', D[7], -1, 5),
    //     get_sticker('U', D[8], 0, 6),
    // ];

    // let left_stickers = [
    //     get_sticker('R', L[8], 0, 2),
    //     get_sticker('R', L[7], 1, 3),
    //     get_sticker('R', L[6], 2, 4),
    //     get_sticker('R', L[5], -1, 3),
    //     get_sticker('R', L[4], 0, 4),
    //     get_sticker('R', L[3], 1, 5),
    //     get_sticker('R', L[2], -2, 4),
    //     get_sticker('R', L[1], -1, 5),
    //     get_sticker('R', L[0], 0, 6),
    // ];

    // let back_stickers = [
    //     get_sticker('F', B[6], 0, 2),
    //     get_sticker('F', B[3], 1, 3),
    //     get_sticker('F', B[0], 2, 4),
    //     get_sticker('F', B[7], -1, 3),
    //     get_sticker('F', B[4], 0, 4),
    //     get_sticker('F', B[1], 1, 5),
    //     get_sticker('F', B[8], -2, 4),
    //     get_sticker('F', B[5], -1, 5),
    //     get_sticker('F', B[2], 0, 6),
    // ];

    let ret = '';

    // left_stickers.forEach((t) => {
    //     ret += t?.render();
    // });

    // back_stickers.forEach((t) => {
    //     ret += t?.render();
    // });

    // down_stickers.forEach((t) => {
    //     ret += t?.render();
    // });

    let cube_tip = top_stickers[2].points[1].add(new Point(tile_gap_half_width / 2, tile_gap_half_height / 2));
    ret += new Body([
        top_stickers[0].points[0],
        cube_tip,
        top_stickers[0].points[0].rotate(240),
        cube_tip.rotate(240),
        top_stickers[0].points[0].rotate(120),
        cube_tip.rotate(120),
    ]).render();

    top_stickers.forEach((t) => {
        ret += t?.render();
    });

    right_stickers.forEach((t) => {
        ret += t?.render();
    });

    front_stickers.forEach((t) => {
        ret += t?.render();
    });

    let canvas_width = Math.max(Math.max(Math.abs(min_x), max_x) * 2, Math.max(Math.abs(min_y), max_y) * 2) + canvas_padding;

    return `<svg xmlns="http://www.w3.org/2000/svg"
            viewBox="-${canvas_width / 2} -${canvas_width / 2} ${canvas_width} ${canvas_width}"
            style="width: ${img_width}px; height: ${img_width}px"
            >` + ret + '</svg>';
}
