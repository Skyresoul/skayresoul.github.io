var li = $('.right img'), x;
(function show(){
    do index = Math.floor(Math.random() * li.length);
    while(x == index);
    li.eq(x).removeClass('animon');
    x = index;
    li.eq(index).addClass('animon');
    setTimeout(show, 4000);
}());

var la = $('.left img'), y;
(function showy(){
    do index = Math.floor(Math.random() * la.length);
    while(y == index);
    la.eq(y).removeClass('animon');
    y = index;
    la.eq(index).addClass('animon');
    setTimeout(showy, 4000);
}());

var lo = $('.top img'), z;
(function showo(){
    do index = Math.floor(Math.random() * lo.length);
    while(z == index);
    lo.eq(z).removeClass('animon');
    z = index;
    lo.eq(index).addClass('animon');
    setTimeout(showo, 4000);
}());

var le = $('.bottom img'), q;
(function showe(){
    do index = Math.floor(Math.random() * le.length);
    while(q == index);
    le.eq(q).removeClass('animon');
    q = index;
    le.eq(index).addClass('animon');
    setTimeout(showe, 4000);
}());
