function test(el){
	const hoge = el.getAttribute('src');
	document.getElementById('PhotoSpace').src= hoge;
}

function test2(el){
	const hoge = el.getAttribute('src');
	document.getElementById('PhotoSpace2').src= hoge;
	const nextElementSibling = el.nextElementSibling ;
	const foo = nextElementSibling.getAttribute('src');
	document.getElementById('PhotoSpace3').src= foo;
}
