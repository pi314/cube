function tag (tag_name) {
    return (...content) => content ? `<${tag_name}>${content.join('')}</${tag_name}>` : '';
}

function main () {
    let html = ''

    let div = tag('div');
    let table = tag('table');
    let tr = tag('tr');
    let td = tag('td');
    let p = tag('p');
    let span = tag('span');
    let hr = '<hr>';

    algos.forEach((deck) => {
        html += div(
            table(
                tr(
                    td('Name'),
                    td('Pattern'),
                    td('Algorithm'),
                ),
                ...deck.map((card) => {
                    if ('img' in card) {
                        let card_id = card.img.match(/^(\w+\d+).*\.(png|svg|gif)$/)?.[1];

                        return tr(
                            td(
                                p(card_id),
                                ((card.name) ? p(card.name) : '')
                            ),
                            td(`<img width="100" height="100" src="${card.img}">`),
                            td(...card.algo.map((e) => p(e)))
                        );
                    } else {
                        let card_id = card?.id;

                        return tr(
                            td(
                                p(card_id),
                                ((card.name) ? p(card.name) : '')
                            ),
                            td(draw_2d_cube(...card.pattern)),
                            td(...card.algo.map((e) => p(e)).join(hr))
                        );
                    }
                })
            )
        );
    });

    decks.innerHTML = html;
}
