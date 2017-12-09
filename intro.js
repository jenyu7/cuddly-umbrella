/*
 * cuddly-umbrella
 * Jen Yu and Jawadul Kadir
 * Softdev pd7
 * K #16: Sequential Progression II: Electric Boogaloo
 * 2017-12-09 
 */

//Finds the nth term of the fibonacci sequence
var fibonacci = function(n){
    if(n == 0){return 0;}
    else if (n == 1){return 1;}
    else{return fibonacci(n-1) + fibonacci(n-2);}
};

//refers to the button to add new elements to the list
var newEl = document.getElementById("newEl");
newEl.addEventListener('click', add);

var num = 1;
//Adds the next fibonacci number to the list when button clicked
var add = function(){
    //console.log(fibonacci(num));
    var el = document.getElementById("thelist");
    item = document.createElement("li");
    item.innerHTML=fibonacci(num);
    el.appendChild(item);
    num += 1;
    updateList();
};

//updates the list of items as add is called
var list;
var updateList = function(){
    list = document.getElementsByTagName("li");
    //console.log(list);
    //for each list item, add three event listeners
    for (var i = 0; i < list.length; i++){
	list[i].addEventListener('mouseover', changeHead);
	list[i].addEventListener('mouseout', changeBack);
	list[i].addEventListener('click', remove);
	//console.log(list[i]);
    }
}

//change the heading at top to the item moused over
var changeHead = function(n){
    //console.log(n);
    var head = document.getElementById("h");
    head.innerHTML = this.innerHTML;
};

//when mouse is off list items, change back to Hello World!
var changeBack = function(){
    var head = document.getElementById("h");
    head.innerHTML = "Hello World!";
}

//remove the list item when clicked
var remove = function(){
    var list = document.getElementById("thelist");
    list.removeChild(this);
}

