/*
 * 
 */

var fibonacci = function(n){
    if(n == 0){return 0;}
    else if (n == 1){return 1;}
    else{return fibonacci(n-1) + fibonacci(n-2);}
};

var num = 1;

var fibButton = function(){
    console.log(fibonacci(num));
    var el = document.getElementById("thelist");
    item = document.createElement("li");
    item.innerHTML=fibonacci(num);
    el.appendChild(item);
    num += 1;
    updateList();
};

var newEl = document.getElementById("newEl");
newEl.addEventListener('click', fibButton);

var list;
var updateList = function(){
    list = document.getElementsByTagName("li");
    console.log(list);
    for (var i = 0; i < list.length; i++){
	list[i].addEventListener('mouseover', changeHead);
	console.log(list[i]);
    }
}

var changeHead = function(n){
    //console.log(n);
    var head = document.getElementById("h");
    head.innerHTML = this.innerHTML;
};
/*
Write a JavaScript file that will do the following:
Upon button push, add an element to the list.
When the mouse goes over an item in the list, change the heading at the top to contain the text of the item.
When the mouse is no longer over an item in the list, change the heading back to "Hello World!".
When an item on the list is clicked, remove it from the DOM.
*/
