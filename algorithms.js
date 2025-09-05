let oll_algo = [
    {   'id': 'OLL02',
        'pattern': ['WWWW#WWWW', '.##/###/.#./.##'],
        'algo': [
            `F (R U R' U') F' Fw (R U R' U') Fw'`,
        ]
    },
    {   'id': 'OLL06',
        'pattern': ['W##W##WWW', '.../##./..#/##.'],
        'algo': [
            `Rw U2' R' U' R U' Rw'`,
        ]
    },
    {   'id': 'OLL20',
        'pattern': ['#W#W#W#W#', '.#./.#./.#./.#.'],
        'algo': [
            `(M U')4 U2 (M U')4`,
        ]
    },
    {   'id': 'OLL21',
        'pattern': ['W#W###W#W', '#.#/.../.../#.#'],
        'algo': [
            `(R U2 R' U') (R U R' U' R U' R')`,
        ]
    },
    {   'id': 'OLL22',
        'pattern': ['W#W###W#W', '..#/#.#/.../..#'],
        'algo': [
            `R U2' (R2' U') (R2 U') (R2' U2' R)`,
        ]
    },
    {   'id': 'OLL23',
        'pattern': ['######W#W', '.../.../.../#.#'],
        'algo': [
            `x' (R U R' U')2 D (U R U' R')2 D' [x]`,
        ]
    },
    {   'id': 'OLL24',
        'pattern': ['W#####W##', '#../.../.../#..'],
        'algo': [
            `(r U R' U') r' (F R F')`,
        ]
    },
    {   'id': 'OLL25',
        'pattern': ['##W###W##', '..#/..#/.../...'],
        'algo': [
            `Lw' U' L' U R U' L U [x']`,
        ]
    },
    {   'id': 'OLL28',
        'pattern': ['#####W#W#', '.../.../.#./.#.'],
        'algo': [
            `(Rw U R' U') (Rw' R) (U R U' R')`,
        ]
    },
    {   'id': 'OLL37',
        'pattern': ['##W##WWW#', '.../.../##./##.'],
        'algo': [
            `F (R U' R' U') R U R' F'`,
        ]
    },
    {   'id': 'OLL48',
        'pattern': ['W#W##WWWW', '..#/#.#/.#./.##'],
        'algo': [
            `F (R U R' U')2 F'`,
        ]
    },
    {   'id': 'OLL57',
        'pattern': ['#W#####W#', '.#./.../.../.#.'],
        'algo': [
            `(R U R' U') M' (U R U' Rw') `,
        ]
    },
    {   'id': 'OLL57',
        'pattern': ['YRYYYYYOY', 'RYR/GGG/BBB/OYO'],
        'algo': [
            `(M U' M U' M U2) (M' U' M' U' M' U2)`,
        ]
    },
];


let pll_algo = [
    {   'id': 'PLL01',
        'name': 'U(b) perm',
        'pattern': ['YYYYYYYYY', 'RRR/GBG/BOB/OGO', [68, 84, 46]],
        'algo': [
            `(R2 U R U) (R' U' R' U') (R' U' R')`,
        ]
    },
    {   'id': 'PLL02',
        'name': 'U(a) perm',
        'pattern': ['YYYYYYYYY', 'RRR/GOG/BGB/OBO', [64, 48, 86]],
        'algo': [
            `F2 U' (L R' F2 L' R) U' F2`,
            `y' R2' U' (F B' R2 F' B) U' R2'`,
        ]
    },
    {   'id': 'PLL03',
        'name': 'A(b) perm',
        'pattern': ['YYYYYYYYY', 'RRO/GGO/GBR/BOB', [37, 79, 93]],
        'algo': [
            `x' (R U' R) D2 (R' U R) D2 R2`,
        ]
    },
    {   'id': 'PLL04',
        'name': 'A(a) perm',
        'pattern': ['YYYYYYYYY', 'RRB/GGB/OBO/ROG', [73, 97, 39]],
        'algo': [
            `x' R2 D2 (R' U' R) D2 (R' U R')`,
        ]
    },
    {   'id': 'PLL05',
        'name': 'Z perm',
        'pattern': ['YYYYYYYYY', 'RBR/GOG/BRB/OGO', [126, 148]],
        'algo': [
            `(R' U' R U') (R U R U') (R' U R U) (R2 U' R') U2`,
            `(M2 U') (M2 U') (M' U2) (M2 U2) (M' U2)`,
        ]
    },
    {   'id': 'PLL06',
        'name': 'H perm',
        'pattern': ['YYYYYYYYY', 'ROR/GBG/BGB/ORO', [128, 146]],
        'algo': [
            `M2 U' M2 U2' M2 U' M2`,
        ]
    },
    {   'id': 'PLL07',
        'name': 'E perm',
        'pattern': ['YYYYYYYYY', 'BRG/RGO/RBO/BOG', [113, 179]],
        'algo': [
            // https://www.youtube.com/watch?v=9UzbyvSpQRY
            `(R2 U F') (R' U R U')3 (F U' R2)`,
        ]
    },
    {   'id': 'PLL08',
        'name': 'T perm',
        'pattern': ['YYYYYYYYY', 'RRB/GBG/OGR/OOB', [146, 139]],
        'algo': [
            `(R U R' U') (R' F) (R2 U' R' U) (R U R') F'`,
        ]
    },
    {   'id': 'PLL09',
        'name': 'V perm',
        'pattern': ['YYYYYYYYY', 'OBR/BGG/BRG/OOR', [119, 126]],
        'algo': [
            // https://www.youtube.com/watch?v=XYzsUPqElTk
            `(R' U R' U') (R D' R' D) R' (U D') (R2 U' R2 D R2)`,
        ]
    },
    {   'id': 'PLL10',
        'name': 'F perm',
        'pattern': ['YYYYYYYYY', 'ORG/BBB/RGO/ROG', [128, 139]],
        'algo': [
            `(R' U' F') (T perm skip final F) U R`,
        ]
    },
    {   'id': 'PLL12',
        'name': 'R perm',
        'pattern': ['YYYYYYYYY', 'OBG/BOB/RBO/RRG', [124, 139]],
        'algo': [
            `(R U R' F') (R U2) (R' U2) (R' F R U) (R U2 R' U')`,
        ]
    },
    {   'id': 'PLL13',
        'name': 'J(b) perm',
        'pattern': ['YYYYYYYYY', 'OOG/BBB/RRO/RGG', [139, 168]],
        'algo': [
            `(R U2' R' U' R U2') (L' U R' U' L)`,
            `(R U R' F') (R U R' U') (R' F) (R2 U') R' U'`,
        ]
    },
    {   'id': 'PLL15',
        'name': 'Y perm',
        'pattern': ['YYYYYYYYY', 'OGR/BRG/BBG/OOR', [124, 119]],
        'algo': [
            `(R' U' R U') (J perm) (U R' U R)`,
            `(F R U' R') U' (R U R' F') (R U R' U') (R' F R F')`,
        ]
    },
    {   'name': 'Void parity',
        'pattern': ['YYYY.YYYY', 'BOB/RRR/OBO/GGG', [126]],
        'algo': [
            `(M' U)2 (M' U')2 (M' 2U) (M' U')2`,
        ]
    },
];


let f2l_algo = [
    // image source: https://www.gcubing.com/algorithms/3x3/f2l/3x3-f2l.php
    {   'img': 'F2L07.svg',
        'algo': [
            `U' (R' F R F') (R U R')`,
        ]
    },
    {   'img': 'F2L12.svg',
        'algo': [
            `(R' F R F') U2 (R U R' U') (F R' F' R)`,
        ]
    },
    {   'img': 'F2L13.svg',
        'algo': [
            `(R U R') U2 (R U' R') U (R U' R')`,
        ]
    },
    {   'img': 'F2L14.svg',
        'algo': [
            `U (F (R U R' U') F') (U R U' R')`,
        ]
    },
    {   'img': 'F2L22.svg',
        'algo': [
            `(R' F R F') (R U' R' U R U' R')`,
        ]
    },
    {   'img': 'F2L29.svg',
        'algo': [
            `(R' F R F') U (R U' R')`,
        ]
    },
];


let algos = [
    oll_algo,
    pll_algo,
    f2l_algo,
];
