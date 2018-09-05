h1.attr(color, '#5DFFEE');
function changecolor(){
    h1.attr('fill', pickRandom(color));
}
h1.on('click', changecolor);

var str = new String("Demo Text");
         document.write(str.fontcolor( "blue" ));
         alert(str.fontcolor( "blue" ));
