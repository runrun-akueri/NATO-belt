function test(el){
	const hoge = el.getAttribute('src');
	document.getElementById('PhotoSpace').src= hoge;
	const targetElements = document.getElementsByClassName('watch-opacity');
	[].forEach.call(targetElements, function(elem) {
	    elem.classList.remove('watch-opacity');
	})
	el.classList.add('watch-opacity');
	
}

function test2(el){
	const hoge = el.getAttribute('src');
	document.getElementById('PhotoSpace2').src= hoge;
	const nextElementSibling = el.nextElementSibling ;
	const foo = nextElementSibling.getAttribute('src');
	document.getElementById('PhotoSpace3').src= foo;
	const targetElements = document.getElementsByClassName('belt-opacity');
	[].forEach.call(targetElements, function(elem) {
	    elem.classList.remove('belt-opacity');
	})
	el.classList.add('belt-opacity');
}
