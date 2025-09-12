function draw_cube (pattern) {
    if (pattern?.top && pattern?.edge) {
        return draw_2d_cube(pattern?.top, pattern?.edge, pattern?.arrows);
    }

    if (pattern?.top && pattern?.front && pattern?.right) {
        return draw_3d_cube(pattern?.top, pattern?.front, pattern?.right);
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
        let m = p.match(/^(\d)(>|<>)(\d+)$/);
        if (!m) {
            return;
        }
        let dbl = m[2] == '<>';
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

    ret = `<svg viewBox="0 0 ${canvas_width} ${canvas_width}" xmlns="http://www.w3.org/2000/svg"
            style="width: ${img_width}px; height: ${img_width}px">`
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


function draw_3d_cube (U_stickers, F_stickers, R_stickers) {
    let img_width = 100;

    U = palette(U_stickers);
    F = palette(F_stickers);
    R = palette(R_stickers);

    return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg'
        style="width: ${img_width}px; height: ${img_width}px"
        viewBox='-0.9 -0.9 1.8 1.8'>
        <g style='stroke-width:0.1;stroke-linejoin:round;opacity:1'>
            <polygon fill='#000000' stroke='#000000' points='-4.9165444345E-17,-0.717341709543 0.704050371456,-0.412727063605 6.3108540578E-17,-0.0217250905725 -0.704050371456,-0.412727063605'/>
            <polygon fill='#000000' stroke='#000000' points='6.3108540578E-17,-0.0217250905725 0.704050371456,-0.412727063605 0.629480283571,0.369012729157 5.55894689594E-17,0.811070564442'/>
            <polygon fill='#000000' stroke='#000000' points='-0.704050371456,-0.412727063605 6.3108540578E-17,-0.0217250905725 5.55894689594E-17,0.811070564442 -0.629480283571,0.369012729157'/>
        </g>
        <g style='opacity:1;stroke-opacity:0.5;stroke-width:0;stroke-linejoin:round'>
            <polygon fill='${U[0]}' stroke='#000000'  points='-4.94395492722E-17,-0.747570645647 0.195987546512,-0.662774614696 -1.69795801266E-17,-0.571237209618 -0.195987546512,-0.662774614696'/>
            <polygon fill='${U[1]}' stroke='#000000'  points='0.232005309244,-0.646547084507 0.443574072948,-0.555009679429 0.248231527177,-0.455893701578 0.0360177627316,-0.555009679429'/>
            <polygon fill='${U[2]}' stroke='#000000'  points='0.482583855536,-0.537431994052 0.711668838657,-0.4383160162 0.517783415392,-0.330639653666 0.287241309765,-0.4383160162'/>
            <polygon fill='${U[3]}' stroke='#000000'  points='-0.232005309244,-0.646547084507 -0.0360177627316,-0.555009679429 -0.248231527177,-0.455893701578 -0.443574072948,-0.555009679429'/>
            <polygon fill='${U[4]}' stroke='#000000'  points='-1.19067117689E-17,-0.537431994052 0.212213764446,-0.4383160162 1.31258271398E-17,-0.330639653666 -0.212213764446,-0.4383160162'/>
            <polygon fill='${U[5]}' stroke='#000000'  points='0.251353447717,-0.419212035245 0.481895553344,-0.311535672712 0.270508995897,-0.19413986641 0.039139683271,-0.311535672712'/>
            <polygon fill='${U[6]}' stroke='#000000'  points='-0.482583855536,-0.537431994052 -0.287241309765,-0.4383160162 -0.517783415392,-0.330639653666 -0.711668838657,-0.4383160162'/>
            <polygon fill='${U[7]}' stroke='#000000'  points='-0.251353447717,-0.419212035245 -0.039139683271,-0.311535672712 -0.270508995897,-0.19413986641 -0.481895553344,-0.311535672712'/>
            <polygon fill='${U[8]}' stroke='#000000'  points='1.92197429271E-17,-0.290697160276 0.231369312626,-0.173301353974 6.32515829415E-17,-0.0448079088972 -0.231369312626,-0.173301353974'/>
            <polygon fill='${R[0]}' stroke='#000000'  points='0.0195723118985,-0.0109626610455 0.250941624524,-0.139456106122 0.241391846748,0.126727563228 0.0195723118985,0.261716201016'/>
            <polygon fill='${R[1]}' stroke='#000000'  points='0.289305344891,-0.161716522847 0.500691902338,-0.279112329149 0.48317508531,-0.0193241313 0.279755567114,0.104467146503'/>
            <polygon fill='${R[2]}' stroke='#000000'  points='0.535862871621,-0.299523577255 0.729748294886,-0.407199939789 0.705563815696,-0.153667051647 0.518346054594,-0.0397353794067'/>
            <polygon fill='${R[3]}' stroke='#000000'  points='0.0187964861684,0.30740091162 0.240616021018,0.172412273832 0.23182332941,0.417493465286 0.0187964861684,0.557525119942'/>
            <polygon fill='${R[4]}' stroke='#000000'  points='0.277484981547,0.149131684797 0.480904499743,0.0253404069942 0.464720974424,0.265354838312 0.26869228994,0.394212876251'/>
            <polygon fill='${R[5]}' stroke='#000000'  points='0.514822720476,0.00392025149203 0.702040481578,-0.110011420748 0.679626178607,0.124964198255 0.498639195158,0.24393468281'/>
            <polygon fill='${R[6]}' stroke='#000000'  points='0.0180798211904,0.599570709585 0.231106664432,0.459539054929 0.222984461349,0.685931529237 0.0180798211904,0.829827540014'/>
            <polygon fill='${R[7]}' stroke='#000000'  points='0.266593210281,0.435462585597 0.462621894766,0.306604547658 0.447625016912,0.529020062126 0.258471007198,0.661855059905'/>
            <polygon fill='${R[8]}' stroke='#000000'  points='0.495373153236,0.284381590748 0.676360136685,0.165411106194 0.655528520228,0.383794964844 0.480376275383,0.506797105216'/>
            <polygon fill='${F[0]}' stroke='#000000'  points='-0.730336618018,-0.406648000697 -0.536451194753,-0.298971638163 -0.518934377726,-0.0391834403149 -0.706152138828,-0.153115112555'/>
            <polygon fill='${F[1]}' stroke='#000000'  points='-0.501394876389,-0.27854802284 -0.290008318942,-0.161152216538 -0.280458541166,0.105031452812 -0.483878059362,-0.0187598249911'/>
            <polygon fill='${F[2]}' stroke='#000000'  points='-0.251784251975,-0.138883000883 -0.0204149393493,-0.0103895558063 -0.0204149393493,0.262289306255 -0.242234474199,0.127300668467'/>
            <polygon fill='${F[3]}' stroke='#000000'  points='-0.702590256077,-0.109566819661 -0.515372494975,0.0043648525786 -0.499188969657,0.244379283896 -0.680175953105,0.125408799342'/>
            <polygon fill='${F[4]}' stroke='#000000'  points='-0.481556632129,0.025787474065 -0.278137113933,0.149578751868 -0.269344422326,0.394659943322 -0.465373106811,0.265801905383'/>
            <polygon fill='${F[5]}' stroke='#000000'  points='-0.241391846748,0.172857245909 -0.0195723118985,0.307845883697 -0.0195723118985,0.557970092018 -0.23259915514,0.417938437362'/>
            <polygon fill='${F[6]}' stroke='#000000'  points='-0.676874966562,0.165766840531 -0.495887983113,0.284737325085 -0.480891105259,0.507152839553 -0.656043350105,0.384150699181'/>
            <polygon fill='${F[7]}' stroke='#000000'  points='-0.463228483716,0.306955455879 -0.267199799232,0.435813493818 -0.259077596148,0.662205968126 -0.448231605863,0.529370970347'/>
            <polygon fill='${F[8]}' stroke='#000000'  points='-0.23182332941,0.459880027528 -0.0187964861684,0.599911682184 -0.0187964861684,0.830168512613 -0.223701126327,0.686272501836'/>
        </g>
    </svg>`;
}
