
var ball = document.getElementById('ball');
var container = document.getElementById('container');
var target = document.getElementById('target');
var m = new Draggable(ball, {
	limit:container,
	onDrag: function(element,x, y) {
		//console.log(this,x, y)
		
	},
	onDragEnd:function(element,x,y){
		//console.log(element,x,y,this)
		var x0 = target.offsetLeft,
			y0 = target.offsetTop;
		if(Math.abs(x-x0)<20&&Math.abs(y-y0)<20){
			element.style.top=y0+'px';
			element.style.left = x0+'px';
		}
	}
});

var position = getStyle(container);
var width = parseInt(position.width)-50;
var height = parseInt(position.height)-50;

TweenLite.to(ball, 2, {left:width*Math.random(),top:height*Math.random()});


function getStyle (element) {
	return 'currentStyle' in element ? element.currentStyle : getComputedStyle(element);
}
