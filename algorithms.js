let oll_algo = [
    // {   'id': 'OLL01',
    //     'pattern': {'top': 'WWWW#WWWW', 'edge': '-#-/###/###/-#-'},
    // },
    {   'id': 'OLL02',
        'pattern': {'top': 'WWWW#WWWW', 'edge': '-##/###/-#-/-##'},
        'algo': [
            `F (R U R' U') F' Fw (R U R' U') Fw'`,
        ]
    },
    // {   'id': 'OLL03',
    //     'pattern': {'top': 'WWWW#W#WW', 'edge': '##-/-#-/##-/-##'},
    // },
    // {   'id': 'OLL04',
    //     'pattern': {'top': 'WWWW#WWW#', 'edge': '-##/##-/-#-/##-'},
    // },
    // {   'id': 'OLL05',
    //     'pattern': {'top': 'WWWW##W##', 'edge': '##-/-##/#--/---'},
    // },
    {   'id': 'OLL06',
        'pattern': {'top': 'W##W##WWW', 'edge': '---/##-/--#/##-'},
        'algo': [
            `Rw U2' R' U' R U' Rw'`,
        ]
    },
    // {   'id': 'OLL07',
    //     'pattern': {'top': 'W#W##W#WW', 'edge': '#--/---/##-/-##'},
    // },
    // {   'id': 'OLL08',
    //     'pattern': {'top': '#WW##WW#W', 'edge': '-##/---/-##/#--'},
    // },
    // {   'id': 'OLL09',
    //     'pattern': {'top': 'W#W##WWW#', 'edge': '--#/#--/-#-/##-'},
    // },
    // {   'id': 'OLL10',
    //     'pattern': {'top': 'WW###WW#W', 'edge': '##-/--#/-#-/--#'},
    // },
    // {   'id': 'OLL11',
    //     'pattern': {'top': 'WWWW####W', 'edge': '##-/-#-/#--/--#'},
    // },
    // {   'id': 'OLL12',
    //     'pattern': {'top': '##WW##WWW', 'edge': '--#/-#-/--#/##-'},
    // },
    // {   'id': 'OLL13',
    //     'pattern': {'top': 'WWW####WW', 'edge': '##-/---/#--/-##'},
    // },
    // {   'id': 'OLL14',
    //     'pattern': {'top': 'WWW###WW#', 'edge': '-##/#--/---/##-'},
    // },
    // {   'id': 'OLL15',
    //     'pattern': {'top': 'WWW###WW#', 'edge': '##-/--#/#--/-#-'},
    // },
    // {   'id': 'OLL16',
    //     'pattern': {'top': 'WWW####WW', 'edge': '-##/#--/--#/-#-'},
    // },
    // {   'id': 'OLL17',
    //     'pattern': {'top': '#WWW#WWW#', 'edge': '-##/-##/-#-/-#-'},
    // },
    // {   'id': 'OLL18',
    //     'pattern': {'top': 'WW#W#WWW#', 'edge': '-#-/###/-#-/-#-'},
    // },
    // {   'id': 'OLL19',
    //     'pattern': {'top': '#W#W#WWWW', 'edge': '-#-/-##/-##/-#-'},
    // },
    {   'id': 'OLL20',
        'pattern': {'top': '#W#W#W#W#', 'edge': '-#-/-#-/-#-/-#-'},
        'algo': [
            `(r U R' U') M2 (U R U' R') U' M'`,
            `(M' U')4 U2 (M' U')4`,
        ]
    },
    {   'id': 'OLL21',
        'pattern': {'top': 'W#W###W#W', 'edge': '#-#/---/---/#-#'},
        'algo': [
            `(R U2 R' U') (R U R' U' R U' R')`,
        ]
    },
    {   'id': 'OLL22',
        'pattern': {'top': 'W#W###W#W', 'edge': '--#/#-#/---/--#'},
        'algo': [
            `R U2' (R2' U') (R2 U') (R2' U2' R)`,
        ]
    },
    {   'id': 'OLL23',
        'pattern': {'top': '######W#W', 'edge': '---/---/---/#-#'},
        'algo': [
            `x' (R U R' U')2 D (U R U' R')2 D' [x]`,
        ]
    },
    {   'id': 'OLL24',
        'pattern': {'top': 'W#####W##', 'edge': '#--/---/---/#--'},
        'algo': [
            `(Rw U R' U') Rw' (F R F')`,
        ]
    },
    {   'id': 'OLL25',
        'pattern': {'top': '##W###W##', 'edge': '--#/--#/---/---'},
        'algo': [
            `Lw' U' L' U R U' L U [x']`,
        ]
    },
    // {   'id': 'OLL26',
    //     'pattern': {'top': 'W#####W#W', 'edge': '---/#--/--#/#--'},
    // },
    // {   'id': 'OLL27',
    //     'pattern': {'top': 'W#W#####W', 'edge': '#--/---/#--/--#'},
    // },
    {   'id': 'OLL28',
        'pattern': {'top': '#####W#W#', 'edge': '---/---/-#-/-#-'},
        'algo': [
            `(Rw U R' U') (Rw' R) (U R U' R')`,
        ]
    },
    // {   'id': 'OLL29',
    //     'pattern': {'top': 'W####WWW#', 'edge': '#--/---/-#-/##-'},
    // },
    // {   'id': 'OLL30',
    //     'pattern': {'top': 'W#W##W#W#', 'edge': '---/#--/##-/-#-'},
    // },
    // {   'id': 'OLL31',
    //     'pattern': {'top': '#WW##W##W', 'edge': '-##/---/-#-/--#'},
    // },
    // {   'id': 'OLL32',
    //     'pattern': {'top': 'WW#W##W##', 'edge': '##-/-#-/---/#--'},
    // },
    {   'id': 'OLL33',
        'pattern': {'top': 'WW####WW#', 'edge': '##-/---/---/##-'},
        'algo': [
            `(R U R' U') (R' F R F')`,
        ]
    },
    // {   'id': 'OLL34',
    //     'pattern': {'top': 'WWW####W#', 'edge': '-#-/#--/#--/-#-'},
    // },
    // {   'id': 'OLL35',
    //     'pattern': {'top': '#WWW##W##', 'edge': '-#-/-#-/#--/#--'},
    // },
    // {   'id': 'OLL36',
    //     'pattern': {'top': '#WW##WW##', 'edge': '-#-/---/##-/#--'},
    // },
    {   'id': 'OLL37',
        'pattern': {'top': '##W##WWW#', 'edge': '---/---/##-/##-'},
        'algo': [
            `F (R U' R' U') (R U R' F')`,
        ]
    },
    // {   'id': 'OLL38',
    //     'pattern': {'top': 'W####W#WW', 'edge': '#--/---/-##/-#-'},
    // },
    // {   'id': 'OLL39',
    //     'pattern': {'top': 'WW#####WW', 'edge': '##-/---/--#/-#-'},
    // },
    // {   'id': 'OLL40',
    //     'pattern': {'top': '#WW###WW#', 'edge': '-##/--#/---/-#-'},
    // },
    // {   'id': 'OLL41',
    //     'pattern': {'top': 'W#W##W#W#', 'edge': '#-#/---/-#-/-#-'},
    // },
    // {   'id': 'OLL42',
    //     'pattern': {'top': '#W###WW#W', 'edge': '-#-/---/-#-/#-#'},
    // },
    // {   'id': 'OLL43',
    //     'pattern': {'top': '#####WWWW', 'edge': '---/---/-#-/###'},
    // },
    // {   'id': 'OLL44',
    //     'pattern': {'top': 'WW#W##W##', 'edge': '-#-/###/---/---'},
    // },
    {   'id': 'OLL45',
        'pattern': {'top': 'WW####WW#', 'edge': '-#-/#-#/---/-#-'},
        'algo': [
            `F R U R' U' F'`,
        ]
    },
    // {   'id': 'OLL46',
    //     'pattern': {'top': '##WW#W##W', 'edge': '---/-#-/###/---'},
    // },
    // {   'id': 'OLL47',
    //     'pattern': {'top': 'W#WW##WWW', 'edge': '#--/-#-/#-#/##-'},
    // },
    {   'id': 'OLL48',
        'pattern': {'top': 'W#W##WWWW', 'edge': '--#/#-#/-#-/-##'},
        'algo': [
            `F (R U R' U')2 F'`,
        ]
    },
    // {   'id': 'OLL49',
    //     'pattern': {'top': 'WWW##WW#W', 'edge': '##-/---/###/#--'},
    // },
    // {   'id': 'OLL50',
    //     'pattern': {'top': 'WWWW##W#W', 'edge': '-##/###/---/--#'},
    // },
    // {   'id': 'OLL51',
    //     'pattern': {'top': 'WWW###WWW', 'edge': '-##/#-#/---/-##'},
    // },
    // {   'id': 'OLL52',
    //     'pattern': {'top': 'W#WW#WW#W', 'edge': '#--/-#-/###/#--'},
    // },
    // {   'id': 'OLL53',
    //     'pattern': {'top': 'WWW##WW#W', 'edge': '###/---/-#-/#-#'},
    // },
    // {   'id': 'OLL54',
    //     'pattern': {'top': 'W#W##WWWW', 'edge': '#-#/---/-#-/###'},
    // },
    // {   'id': 'OLL55',
    //     'pattern': {'top': 'W#WW#WW#W', 'edge': '---/###/###/---'},
    // },
    // {   'id': 'OLL56',
    //     'pattern': {'top': 'WWW###WWW', 'edge': '-#-/#-#/#-#/-#-'},
    // },
    {   'id': 'OLL57',
        'pattern': {'top': '#W#####W#', 'edge': '-#-/---/---/-#-'},
        'algo': [
            `(R U R' U') M' (U R U' Rw') `,
        ]
    },
    {   'id': 'OLL57',
        'pattern': {'top': 'YRYYYYYOY', 'edge': 'RYR/GGG/BBB/OYO'},
        'algo': [
            `(M' U' M' U' M' U2) (M U' M U' M U2)`,
        ]
    },
];


let pll_algo = [
    {   'id': 'PLL01',
        'name': 'U(b) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRR/GBG/BOB/OGO', 'arrows': ['6->8', '8->4', '4->6']},
        'algo': [
            `(R2 U R U) (R' U' R' U') (R' U' R')`,
        ]
    },
    {   'id': 'PLL02',
        'name': 'U(a) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRR/GOG/BGB/OBO', 'arrows': ['6->4', '4->8', '8->6']},
        'algo': [
            `F2 U' (L R' F2 L' R) U' F2`,
            `y' R2' U' (F B' R2 F' B) U' R2'`,
        ]
    },
    {   'id': 'PLL03',
        'name': 'A(b) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRO/GGO/GBR/BOB', 'arrows': ['3->7', '7->9', '9->3']},
        'algo': [
            `x' (R U' R) D2 (R' U R) D2 R2`,
        ]
    },
    {   'id': 'PLL04',
        'name': 'A(a) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRB/GGB/OBO/ROG', 'arrows': ['7->3', '9->7', '3->9']},
        'algo': [
            `x' R2 D2 (R' U' R) D2 (R' U R')`,
            `U2 (r U r' U') r' F r2 (U' r' U' r U r') F' //wide T-perm`
        ]
    },
    {   'id': 'PLL05',
        'name': 'Z perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RBR/GOG/BRB/OGO', 'arrows': ['2<->6', '4<->8']},
        'algo': [
            `(R' U' R U') (R U R U') (R' U R U) (R2 U' R') U2`,
            `(M2 U') (M2 U') (M' U2) (M2 U2) (M' U2)`,
        ]
    },
    {   'id': 'PLL06',
        'name': 'H perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'ROR/GBG/BGB/ORO', 'arrows': ['2<->8', '4<->6']},
        'algo': [
            `M2 U' M2 U2' M2 U' M2`,
            `(M2 U2 M2) U (M2 U2 M2) U'`
        ]
    },
    {   'id': 'PLL07',
        'name': 'E perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'BRG/RGO/RBO/BOG', 'arrows': ['1<->3', '7<->9']},
        'algo': [
            // https://www.youtube.com/watch?v=9UzbyvSpQRY
            `(R2 U F') (R' U R U')3 (F U' R2)`,
            `x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x`,
        ]
    },
    {   'id': 'PLL08',
        'name': 'T perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRB/GBG/OGR/OOB', 'arrows': ['4<->6', '3<->9']},
        'algo': [
            `(R U R' U') (R' F) (R2 U' R' U) (R U R') F'`,
        ]
    },
    {   'id': 'PLL09',
        'name': 'V perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'OBR/BGG/BRG/OOR', 'arrows': ['1<->9', '2<->6']},
        'algo': [
            // https://www.youtube.com/watch?v=XYzsUPqElTk
            `(R' U R' U') (R D' R' D) R' (U D') (R2 U' R2 D R2)`,
        ]
    },
    {   'id': 'PLL10',
        'name': 'F perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'ROB/GGG/OBR/ORB', 'arrows': ['2<->8', '3<->9']},
        'algo': [
            `(R' U' F') (T-perm skip final F) U R`,
        ]
    },
    {   'id': 'PLL12',
        'name': 'R perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RGB/GRG/OBR/OOB', 'arrows': ['2<->4', '3<->9']},
        'algo': [
            `(R U R' F') (R U2) (R' U2) (R' F R U) (R U2 R' U')`,
        ]
    },
    {   'id': 'PLL13',
        'name': 'J(b) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RRB/GGG/OOR/OBB', 'arrows': ['3<->9', '6<->8']},
        'algo': [
            `(R U2' R' U' R U2') (L' U R' U' L)`,
            `(R U R' F') (R U R' U') (R' F) (R2 U') R' U'`,
        ]
    },
    {   'id': 'PLL14',
        'name': 'J(a) perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'RBB/GGG/ORR/OOB', 'arrows': ['2<->6', '3<->9']},
        'algo': [
            `(x R2) (F R F') (R U2) (r' U r U2) x'`,
        ]
    },
    {   'id': 'PLL15',
        'name': 'Y perm',
        'pattern': {'top': 'YYYYYYYYY', 'edge': 'OGR/BRG/BBG/OOR', 'arrows': ['2<->4', '1<->9']},
        'algo': [
            `(R' U' R U') (J perm) (U R' U R)`,
            `F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')`,
        ]
    },
    {   'name': 'Void parity',
        'pattern': {'top': 'YYYY#YYYY', 'edge': 'RBR/GGG/BRB/OOO', 'arrows': ['2<->6']},
        'algo': [
            `(M' U)2 (M' U')2 (M' 2U) (M' U')2`,
        ]
    },
];


let f2l_algo = [
    // Number and category from: https://speedcubedb.com/a/3x3/F2L
    // {   'id': 'F2L01', 'category': 'free pair',
    //     'pattern': {'top': '.....G..G', 'front': '..WGG.GG.', 'right': 'OO..OO.OO'},
    // },
    // {   'id': 'F2L02', 'category': 'free pair',
    //     'pattern': {'top': '.......OO', 'front': '.GGGG.GG.', 'right': 'W...OO.OO'},
    // },
    // {   'id': 'F2L03', 'category': 'free pair',
    //     'pattern': {'top': '...O....G', 'front': '..WGG.GG.', 'right': 'O...OO.OO'},
    // },
    // {   'id': 'F2L04', 'category': 'free pair',
    //     'pattern': {'top': '.G......O', 'front': '..GGG.GG.', 'right': 'W...OO.OO'},
    // },
    // {   'id': 'F2L05', 'category': 'disconnected pair',
    //     'pattern': {'top': '.G......G', 'front': '..WGG.GG.', 'right': 'O...OO.OO'},
    // },
    // {   'id': 'F2L06', 'category': 'disconnected pair',
    //     'pattern': {'top': '...O....O', 'front': '..GGG.GG.', 'right': 'W...OO.OO'},
    // },
    // {   'id': 'F2L07', 'category': 'disconnected pair',
    //     'pattern': {'top': '...G....G', 'front': '..WGG.GG.', 'right': 'O...OO.OO'},
    // },
    {   'id': 'F2L08', 'category': 'disconnected pair',
        'pattern': {'top': '.O......O', 'front': '..GGG.GG.', 'right': 'W...OO.OO'},
        'algo': [
            `(R' F R F') U2 (R U R' U') (F R' F' R)`,
        ]
    },
    // {   'id': 'F2L09', 'category': 'disconnected pair',
    //     'pattern': {'top': '.O......G', 'front': '..WGG.GG.', 'right': 'O...OO.OO'},
    // },
    // {   'id': 'F2L10', 'category': 'disconnected pair',
    //     'pattern': {'top': '...G....O', 'front': '..GGG.GG.', 'right': 'W...OO.OO'},
    // },
    // {   'id': 'F2L11', 'category': 'connected pair',
    //     'pattern': {'top': '.....O..G', 'front': '..WGG.GG.', 'right': 'OG..OO.OO'},
    // },
    // {   'id': 'F2L12', 'category': 'connected pair',
    //     'pattern': {'top': '.......GO', 'front': '.OGGG.GG.', 'right': 'W...OO.OO'},
    // },
    // {   'id': 'F2L13', 'category': 'connected pair',
    //     'pattern': {'top': '.......OG', 'front': '.GWGG.GG.', 'right': 'O...OO.OO'},
    // },
    // {   'id': 'F2L14', 'category': 'connected pair',
    //     'pattern': {'top': '.....G..O', 'front': '..GGG.GG.', 'right': 'WO..OO.OO'},
    // },
    {   'id': 'F2L15', 'category': 'connected pair',
        'pattern': {'top': '.......GG', 'front': '.OWGG.GG.', 'right': 'O...OO.OO'},
        'algo': [
            `(R U R') U2 [R U' R' U R U' R']`,
        ]
    },
    {   'id': 'F2L16', 'category': 'connected pair',
        'pattern': {'top': '.....O..O', 'front': '..GGG.GG.', 'right': 'WG..OO.OO'},
        'algo': [
            `U (F (R U R' U') F') [U R U' R']`,
        ]
    },
    // {   'id': 'F2L17', 'category': 'connected pair',
    //     'pattern': {'top': '.....G..W', 'front': '..OGG.GG.', 'right': 'GO..OO.OO'},
    // },
    {   'id': 'F2L18', 'category': 'connected pair',
        'pattern': {'top': '.......OW', 'front': '.GOGG.GG.', 'right': 'G...OO.OO'},
        'algo': [
            `(R' F R F') [R U' R' U R U' R']`,
        ]
    },
    // {   'id': 'F2L19', 'category': 'disconnected pair',
    //     'pattern': {'top': '.G......W', 'front': '..OGG.GG.', 'right': 'G...OO.OO'},
    // },
    // {   'id': 'F2L20', 'category': 'disconnected pair',
    //     'pattern': {'top': '...O....W', 'front': '..OGG.GG.', 'right': 'G...OO.OO'},
    // },
    // {   'id': 'F2L21', 'category': 'disconnected pair',
    //     'pattern': {'top': '...G....W', 'front': '..OGG.GG.', 'right': 'G...OO.OO'},
    // },
    // {   'id': 'F2L22', 'category': 'disconnected pair',
    //     'pattern': {'top': '.O......W', 'front': '..OGG.GG.', 'right': 'G...OO.OO'},
    // },
    {   'id': 'F2L23', 'category': 'connected pair',
        'pattern': {'top': '.......GW', 'front': '.OOGG.GG.', 'right': 'G...OO.OO'},
        'algo': [
            `U (R U' R') U' [R U' R' U R U' R']`
        ]
    },
    {   'id': 'F2L24', 'category': 'connected pair',
        'pattern': {'top': '.....O..W', 'front': '..OGG.GG.', 'right': 'GG..OO.OO'},
        'algo': [
            `U' (R U R') (R' F R F') [R U' R']`
        ]
    },
    {   'id': 'F2L25', 'category': 'corner in slot',
        'pattern': {'top': '.....G...', 'front': '...GG.GGG', 'right': '.O..OOOOO'},
        'algo': [
            `U' (R' F R F') (R U R')`,
        ]
    },
    {   'id': 'F2L26', 'category': 'corner in slot',
        'pattern': {'top': '.......O.', 'front': '.G.GG.GGG', 'right': '....OOOOO'},
        'algo': [
            `(R' F R F') U' (R U' R' U) [R U R']`,
        ]
    },
    // {   'id': 'F2L27', 'category': 'corner in slot',
    //     'pattern': {'top': '.....G...', 'front': '...GG.GGW', 'right': '.O..OOGOO'},
    // },
    // {   'id': 'F2L28', 'category': 'corner in slot',
    //     'pattern': {'top': '.......O.', 'front': '.G.GG.GGO', 'right': '....OOWOO'},
    // },
    {   'id': 'F2L29', 'category': 'corner in slot',
        'pattern': {'top': '.......O.', 'front': '.G.GG.GGW', 'right': '....OOGOO'},
        'algo': [
            `(R' F R F') [U R U' R']`,
        ]
    },
    // {   'id': 'F2L30', 'category': 'corner in slot',
    //     'pattern': {'top': '.....G...', 'front': '...GG.GGO', 'right': '.O..OOWOO'},
    // },
    {   'id': 'F2L31', 'category': 'edge in slot',
        'pattern': {'top': '........W', 'front': '..OGGOGG.', 'right': 'G..GOO.OO'},
        'algo': [
            `U' (R' F R F') [R U' R']`,
        ]
    },
    // {   'id': 'F2L32', 'category': 'edge in slot',
    //     'pattern': {'top': '........W', 'front': '..OGGGGG.', 'right': 'G..OOO.OO'},
    // },
    // {   'id': 'F2L33', 'category': 'edge in slot',
    //     'pattern': {'top': '........G', 'front': '..WGGGGG.', 'right': 'O..OOO.OO'},
    // },
    // {   'id': 'F2L34', 'category': 'edge in slot',
    //     'pattern': {'top': '........O', 'front': '..GGGGGG.', 'right': 'W..OOO.OO'},
    // },
    // {   'id': 'F2L35', 'category': 'edge in slot',
    //     'pattern': {'top': '........G', 'front': '..WGGOGG.', 'right': 'O..GOO.OO'},
    // },
    // {   'id': 'F2L36', 'category': 'edge in slot',
    //     'pattern': {'top': '........O', 'front': '..GGGOGG.', 'right': 'W..GOO.OO'},
    // },
    // {   'id': 'F2L37', 'category': 'pieces in slot',
    //     'pattern': {'top': '.........', 'front': '...GGOGGG', 'right': '...GOOOOO'},
    // },
    // {   'id': 'F2L38', 'category': 'pieces in slot',
    //     'pattern': {'top': '.........', 'front': '...GGGGGW', 'right': '...OOOGOO'},
    // },
    // {   'id': 'F2L39', 'category': 'pieces in slot',
    //     'pattern': {'top': '.........', 'front': '...GGGGGO', 'right': '...OOOWOO'},
    // },
    // {   'id': 'F2L40', 'category': 'pieces in slot',
    //     'pattern': {'top': '.........', 'front': '...GGOGGW', 'right': '...GOOGOO'},
    // },
    // {   'id': 'F2L41', 'category': 'pieces in slot',
    //     'pattern': {'top': '.........', 'front': '...GGOGGO', 'right': '...GOOWOO'},
    // },
    {   'id': '4x4 OLL parity',
        'pattern': {'top': 'YYYYYYYYYYYYYOOY', 'edge': 'RRRR/GGGG/BBBB/OYYO'},
        'algo': [
            `(r' U2) (l F2 l' F2) r2 (U2 r U2 r' U2) F2 r2 F2`,
        ]
    },
    {   'name': '4x4 PLL parity',
        'pattern': {'top': 'YYYYYYYYYYYYYYYY', 'edge': 'ROOR/GGGG/BBBB/ORRO', 'arrows': ['2<->15', '3<->14']},
        'algo': [
            `r2 U2 r2 Uw2 r2 u2`,
        ]
    },
];


let four_by_four_algo = [
];


let algos = [
    oll_algo,
    pll_algo,
    f2l_algo,
];
