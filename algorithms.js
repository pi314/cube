let oll_algo = [
    {   'id': 'OLL02',
        'pattern': {'top': 'WWWW#WWWW', 'edge': '.##/###/.#./.##'},
        'algo': [
            `F (R U R' U') F' Fw (R U R' U') Fw'`,
        ]
    },
    {   'id': 'OLL06',
        'pattern': {'top': 'W##W##WWW', 'edge': '.../##./..#/##.'},
        'algo': [
            `Rw U2' R' U' R U' Rw'`,
        ]
    },
    {   'id': 'OLL20',
        'pattern': {'top': '#W#W#W#W#', 'edge': '.#./.#./.#./.#.'},
        'algo': [
            `(M' U')4 U2 (M' U')4`,
        ]
    },
    {   'id': 'OLL21',
        'pattern': {'top': 'W#W###W#W', 'edge': '#.#/.../.../#.#'},
        'algo': [
            `(R U2 R' U') (R U R' U' R U' R')`,
        ]
    },
    {   'id': 'OLL22',
        'pattern': {'top': 'W#W###W#W', 'edge': '..#/#.#/.../..#'},
        'algo': [
            `R U2' (R2' U') (R2 U') (R2' U2' R)`,
        ]
    },
    {   'id': 'OLL23',
        'pattern': {'top': '######W#W', 'edge': '.../.../.../#.#'},
        'algo': [
            `x' (R U R' U')2 D (U R U' R')2 D' [x]`,
        ]
    },
    {   'id': 'OLL24',
        'pattern': {'top': 'W#####W##', 'edge': '#../.../.../#..'},
        'algo': [
            `(r U R' U') r' (F R F')`,
        ]
    },
    {   'id': 'OLL25',
        'pattern': {'top': '##W###W##', 'edge': '..#/..#/.../...'},
        'algo': [
            `Lw' U' L' U R U' L U [x']`,
        ]
    },
    {   'id': 'OLL28',
        'pattern': {'top': '#####W#W#', 'edge': '.../.../.#./.#.'},
        'algo': [
            `(Rw U R' U') (Rw' R) (U R U' R')`,
        ]
    },
    {   'id': 'OLL37',
        'pattern': {'top': '##W##WWW#', 'edge': '.../.../##./##.'},
        'algo': [
            `F (R U' R' U') R U R' F'`,
        ]
    },
    {   'id': 'OLL48',
        'pattern': {'top': 'W#W##WWWW', 'edge': '..#/#.#/.#./.##'},
        'algo': [
            `F (R U R' U')2 F'`,
        ]
    },
    {   'id': 'OLL57',
        'pattern': {'top': '#W#####W#', 'edge': '.#./.../.../.#.'},
        'algo': [
            `(R U R' U') M' (U R U' Rw') `,
        ]
    },
    {   'id': 'OLL57',
        'pattern': {'top': 'YRYYYYYOY', 'edge': 'RYR/GGG/BBB/OYO'},
        'algo': [
            `(M U' M U' M U2) (M' U' M' U' M' U2)`,
        ]
    },
];


let pll_algo = [
    {   'id': 'PLL01',
        'name': 'U(b) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRR/GBG/BOB/OGO', 'arrows': [68, 84, 46]},
        'algo': [
            `(R2 U R U) (R' U' R' U') (R' U' R')`,
        ]
    },
    {   'id': 'PLL02',
        'name': 'U(a) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRR/GOG/BGB/OBO', 'arrows': [64, 48, 86]},
        'algo': [
            `F2 U' (L R' F2 L' R) U' F2`,
            `y' R2' U' (F B' R2 F' B) U' R2'`,
        ]
    },
    {   'id': 'PLL03',
        'name': 'A(b) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRO/GGO/GBR/BOB', 'arrows': [37, 79, 93]},
        'algo': [
            `x' (R U' R) D2 (R' U R) D2 R2`,
        ]
    },
    {   'id': 'PLL04',
        'name': 'A(a) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRB/GGB/OBO/ROG', 'arrows': [73, 97, 39]},
        'algo': [
            `x' R2 D2 (R' U' R) D2 (R' U R')`,
        ]
    },
    {   'id': 'PLL05',
        'name': 'Z perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RBR/GOG/BRB/OGO', 'arrows': [126, 148]},
        'algo': [
            `(R' U' R U') (R U R U') (R' U R U) (R2 U' R') U2`,
            `(M2 U') (M2 U') (M' U2) (M2 U2) (M' U2)`,
        ]
    },
    {   'id': 'PLL06',
        'name': 'H perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'ROR/GBG/BGB/ORO', 'arrows': [128, 146]},
        'algo': [
            `M2 U' M2 U2' M2 U' M2`,
        ]
    },
    {   'id': 'PLL07',
        'name': 'E perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'BRG/RGO/RBO/BOG', 'arrows': [113, 179]},
        'algo': [
            // https://www.youtube.com/watch?v=9UzbyvSpQRY
            `(R2 U F') (R' U R U')3 (F U' R2)`,
        ]
    },
    {   'id': 'PLL08',
        'name': 'T perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRB/GBG/OGR/OOB', 'arrows': [146, 139]},
        'algo': [
            `(R U R' U') (R' F) (R2 U' R' U) (R U R') F'`,
        ]
    },
    {   'id': 'PLL09',
        'name': 'V perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'OBR/BGG/BRG/OOR', 'arrows': [119, 126]},
        'algo': [
            // https://www.youtube.com/watch?v=XYzsUPqElTk
            `(R' U R' U') (R D' R' D) R' (U D') (R2 U' R2 D R2)`,
        ]
    },
    {   'id': 'PLL10',
        'name': 'F perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'ROB/GGG/OBR/ORB', 'arrows': [128, 139]},
        'algo': [
            `(R' U' F') (T perm skip final F) U R`,
        ]
    },
    {   'id': 'PLL12',
        'name': 'R perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RGB/GRG/OBR/OOB', 'arrows': [124, 139]},
        'algo': [
            `(R U R' F') (R U2) (R' U2) (R' F R U) (R U2 R' U')`,
        ]
    },
    {   'id': 'PLL13',
        'name': 'J(b) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRB/GGG/OOR/OBB', 'arrows': [139, 168]},
        'algo': [
            `(R U2' R' U' R U2') (L' U R' U' L)`,
            `(R U R' F') (R U R' U') (R' F) (R2 U') R' U'`,
        ]
    },
    {   'id': 'PLL15',
        'name': 'Y perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'OGR/BRG/BBG/OOR', 'arrows': [124, 119]},
        'algo': [
            `(R' U' R U') (J perm) (U R' U R)`,
            `(F R U' R') U' (R U R' F') (R U R' U') (R' F R F')`,
        ]
    },
    {   'name': 'Void parity',
        'pattern': {'top': 'YYYY#YYYY', 'edge': 'RBR/GGG/BRB/OOO', 'arrows': [126]},
        'algo': [
            `(M' U)2 (M' U')2 (M' 2U) (M' U')2`,
        ]
    },
];


let f2l_algo = [
    // image source: https://www.gcubing.com/algorithms/3x3/f2l/3x3-f2l.php
    // {   'id': 'F2L01',
    //     'pattern': {'top': '.....B..B', 'front': '..WBB.BB.', 'right': 'RR..RR.RR'},
    // },
    // {   'id': 'F2L02',
    //     'pattern': {'top': '.......RR', 'front': '.BBBB.BB.', 'right': 'W...RR.RR'},
    // },
    // {   'id': 'F2L03',
    //     'pattern': {'top': '.B......R', 'front': '..BBB.BB.', 'right': 'W...RR.RR'},
    // },
    // {   'id': 'F2L04',
    //     'pattern': {'top': '...R....B', 'front': '..WBB.BB.', 'right': 'R...RR.RR'},
    // },
    // {   'id': 'F2L05',
    //     'pattern': {'top': '.....B...', 'front': '...BB.BBW', 'right': '.R..RRBRR'},
    // },
    // {   'id': 'F2L06',
    //     'pattern': {'top': '.......R.', 'front': '.B.BB.BBR', 'right': '....RRWRR'},
    // },
    {   'id': 'F2L07',
        'pattern': {'top': '.....B...', 'front': '...BB.BBB', 'right': '.R..RRRRR'},
        'algo': [
            `U' (R' F R F') (R U R')`,
        ]
    },
    // {   'id': 'F2L08',
    //     'pattern': {'top': '.......R.', 'front': '.B.BB.BBB', 'right': '....RRRRR'},
    // },
    // {   'id': 'F2L09',
    //     'pattern': {'top': '.B......B', 'front': '..WBB.BB.', 'right': 'R...RR.RR'},
    // },
    // {   'id': 'F2L10',
    //     'pattern': {'top': '...R....R', 'front': '..BBB.BB.', 'right': 'W...RR.RR'},
    // },
    // {   'id': 'F2L11',
    //     'pattern': {'top': '...B....B', 'front': '..WBB.BB.', 'right': 'R...RR.RR'},
    // },
    {   'id': 'F2L12',
        'pattern': {'top': '.R......R', 'front': '..BBB.BB.', 'right': 'W...RR.RR'},
        'algo': [
            `(R' F R F') U2 (R U R' U') (F R' F' R)`,
        ]
    },
    {   'id': 'F2L13',
        'pattern': {'top': '.......BB', 'front': '.RWBB.BB.', 'right': 'R...RR.RR'},
        'algo': [
            `(R U R') U2 (R U' R') U (R U' R')`,
        ]
    },
    {   'id': 'F2L14',
        'pattern': {'top': '.....R..R', 'front': '..BBB.BB.', 'right': 'WB..RR.RR'},
        'algo': [
            `U (F (R U R' U') F') (U R U' R')`,
        ]
    },
    // {   'id': 'F2L15',
    //     'pattern': {'top': '.R......B', 'front': '..WBB.BB.', 'right': 'R...RR.RR'},
    // },
    // {   'id': 'F2L16',
    //     'pattern': {'top': '...B....R', 'front': '..BBB.BB.', 'right': 'W...RR.RR'},
    // },
    // {   'id': 'F2L17',
    //     'pattern': {'top': '.....R..B', 'front': '..WBB.BB.', 'right': 'RB..RR.RR'},
    // },
    // {   'id': 'F2L18',
    //     'pattern': {'top': '.......BR', 'front': '.RBBB.BB.', 'right': 'W...RR.RR'},
    // },
    // {   'id': 'F2L19',
    //     'pattern': {'top': '.......RB', 'front': '.BWBB.BB.', 'right': 'R...RR.RR'},
    // },
    // {   'id': 'F2L20',
    //     'pattern': {'top': '.....B..R', 'front': '..BBB.BB.', 'right': 'WR..RR.RR'},
    // },
    // {   'id': 'F2L21',
    //     'pattern': {'top': '.....B..W', 'front': '..RBB.BB.', 'right': 'BR..RR.RR'},
    // },
    {   'id': 'F2L22',
        'pattern': {'top': '.......RW', 'front': '.BRBB.BB.', 'right': 'B...RR.RR'},
        'algo': [
            `(R' F R F') (R U' R' U R U' R')`,
        ]
    },
    // {   'id': 'F2L23',
    //     'pattern': {'top': '.B......W', 'front': '..RBB.BB.', 'right': 'B...RR.RR'},
    // },
    // {   'id': 'F2L24',
    //     'pattern': {'top': '...R....W', 'front': '..RBB.BB.', 'right': 'B...RR.RR'},
    // },
    // {   'id': 'F2L25',
    //     'pattern': {'top': '...B....W', 'front': '..RBB.BB.', 'right': 'B...RR.RR'},
    // },
    // {   'id': 'F2L26',
    //     'pattern': {'top': '.R......W', 'front': '..RBB.BB.', 'right': 'B...RR.RR'},
    // },
    // {   'id': 'F2L27',
    //     'pattern': {'top': '.......BW', 'front': '.RRBB.BB.', 'right': 'B...RR.RR'},
    // },
    // {   'id': 'F2L28',
    //     'pattern': {'top': '.....R..W', 'front': '..RBB.BB.', 'right': 'BB..RR.RR'},
    // },
    {   'id': 'F2L29',
        'pattern': {'top': '.......R.', 'front': '.B.BB.BBW', 'right': '....RRBRR'},
        'algo': [
            `(R' F R F') U (R U' R')`,
        ]
    },
    // {   'id': 'F2L30',
    //     'pattern': {'top': '.....B...', 'front': '...BB.BBR', 'right': '.R..RRWRR'},
    // },
    // {   'id': 'F2L31',
    //     'pattern': {'top': '........B', 'front': '..WBBBBB.', 'right': 'R..RRR.RR'},
    // },
    // {   'id': 'F2L32',
    //     'pattern': {'top': '........R', 'front': '..BBBBBB.', 'right': 'W..RRR.RR'},
    // },
    // {   'id': 'F2L33',
    //     'pattern': {'top': '........B', 'front': '..WBBRBB.', 'right': 'R..BRR.RR'},
    // },
    // {   'id': 'F2L34',
    //     'pattern': {'top': '........R', 'front': '..BBBRBB.', 'right': 'W..BRR.RR'},
    // },
    // {   'id': 'F2L35',
    //     'pattern': {'top': '........W', 'front': '..RBBRBB.', 'right': 'B..BRR.RR'},
    // },
    // {   'id': 'F2L36',
    //     'pattern': {'top': '........W', 'front': '..RBBBBB.', 'right': 'B..RRR.RR'},
    // },
    // {   'id': 'F2L37',
    //     'pattern': {'top': '.........', 'front': '...BBBBBW', 'right': '...RRRBRR'},
    // },
    // {   'id': 'F2L38',
    //     'pattern': {'top': '.........', 'front': '...BBBBBR', 'right': '...RRRWRR'},
    // },
    // {   'id': 'F2L39',
    //     'pattern': {'top': '.........', 'front': '...BBRBBW', 'right': '...BRRBRR'},
    // },
    // {   'id': 'F2L40',
    //     'pattern': {'top': '.........', 'front': '...BBRBBR', 'right': '...BRRWRR'},
    // },
    // {   'id': 'F2L41',
    //     'pattern': {'top': '.........', 'front': '...BBRBBB', 'right': '...BRRRRR'},
    // },
];


let algos = [
    oll_algo,
    pll_algo,
    f2l_algo,
];
