ptop = [
        (-1.19067117689E-17,-0.537431994052),
        (0.212213764446,-0.4383160162),
        (1.31258271398E-17,-0.330639653666),
        (-0.212213764446,-0.4383160162),
        ]

ptoptop = [
        (-4.94395492722E-17,-0.747570645647),
        (0.195987546512,-0.662774614696),
        (-1.69795801266E-17,-0.571237209618),
        (-0.195987546512,-0.662774614696),
        ]

pfront = [
        (-0.481556632129,0.025787474065),
        (-0.278137113933,0.149578751868),
        (-0.269344422326,0.394659943322),
        (-0.465373106811,0.265801905383),
        ]

pfrontfront = [
        (-0.676874966562,0.165766840531),
        (-0.495887983113,0.284737325085),
        (-0.480891105259,0.507152839553),
        (-0.656043350105,0.384150699181),
        ]

pright = [
        (0.277484981547,0.149131684797),
        (0.480904499743,0.0253404069942),
        (0.464720974424,0.265354838312),
        (0.26869228994,0.394212876251),
        ]

prightright = [
        (0.495373153236,0.284381590748),
        (0.676360136685,0.165411106194),
        (0.655528520228,0.383794964844),
        (0.480376275383,0.506797105216),
        ]


def main():
    center = lambda p: (sum(x[0] for x in p) / 4, sum(x[1] for x in p) / 4)

    ctop = center(ptop)
    ctoptop = center(ptoptop)

    cfront = center(pfront)
    cfrontfront = center(pfrontfront)

    cright = center(pright)
    crightright = center(prightright)

    def mul(c1, c2, l):
        return tuple((c1[i] + (c2[i] - c1[i]) * l) for i in (0, 1))

    tl = 4
    ttop = mul(ctop, ctoptop, tl)
    tfront = mul(cfront, cfrontfront, tl)
    tright = mul(cright, crightright, tl)

    def line(c1, c2, color=None, w=None):
        if color and w:
            return f"<line x1='{c1[0]}' y1='{c1[1]}' x2='{c2[0]}' y2='{c2[1]}' stroke='{color}' stroke-width='{w}'/>"

        return f"<line x1='{c1[0]}' y1='{c1[1]}' x2='{c2[0]}' y2='{c2[1]}' />"

    al = 1/8
    w = 0.08

    print()
    print("<g style='opacity:1; stroke-width:0.05; stroke-linecap:round; stroke-linejoin:round; stroke:red;'>")
    print(line(cright, tright, 'white', w))
    print(line(cright, tright))
    print(line(tright, mul(tright, ttop, al)))
    print(line(tright, mul(tright, tfront, al)))
    print(line((0.9, 0.85), (1.1, 1.1)))
    print(line((0.9, 1.1), (1.1, 0.85)))
    # <line x1="0.9" y1="0.85" x2="1.1" y2="1.1" />
    # <line x1="0.9" y1="1.1" x2="1.1" y2="0.85" />
    print('</g>')

    print()
    print("<g style='opacity:1; stroke-width:0.05; stroke-linecap:round; stroke-linejoin:round; stroke:green;'>")
    print(line(ctop, ttop, 'white', w))
    print(line(ctop, ttop))
    print(line(ttop, mul(ttop, tfront, al)))
    print(line(ttop, mul(ttop, tright, al)))
    print(line((0.25, -1.3358293245685), (0.33, -1.2332910259215)))
    print(line((0.45, -1.3358293245685), (0.25 , -1.0794835779510001)))
    # <line x1='0.25' y1='-1.3358293245685' x2='0.31' y2='-1.2332910259215' />
    # <line x1='0.4' y1='-1.3358293245685' x2='0.25' y2='-1.0794835779510001' />
    print('</g>')

    print()
    print("<g style='opacity:1; stroke-width:0.05; stroke-linecap:round; stroke-linejoin:round; stroke:blue;'>")
    print(line(cfront, tfront, 'white', w))
    print(line(cfront, tfront))
    print(line(tfront, mul(tfront, tright, al)))
    print(line(tfront, mul(tfront, ttop, al)))
    print(line((-1.18888894863975, 0.85), (-0.95, 0.85)))
    print(line((-0.95, 0.85), (-1.18888894863975, 1.1)))
    print(line((-1.18888894863975, 1.1), (-0.95, 1.1)))
    # <line x1='-1.18888894863975' y1='0.85' x2='-0.95' y2='0.85' />
    # <line x1='-0.95' y1='0.85' x2='-1.18888894863975' y2='1.1' />
    # <line x1='-1.18888894863975' y1='1.1' x2='-0.95' y2='1.1' />
    print('</g>')


if __name__ == '__main__':
    main()
