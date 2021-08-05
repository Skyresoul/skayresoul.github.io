var li = $('.anime-footer a'), x;
(function show(){
    do index = Math.floor(Math.random() * li.length);
    while(x == index);
    li.eq(x).removeClass('animon');
    x = index;
    li.eq(index).addClass('animon');
    setTimeout(show, 3000);
}());
