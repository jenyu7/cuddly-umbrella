/*
 * cuddly-umbrella
 * Jen Yu and Jawadul Kadir
 * Softdev pd7
 * K #16: Sequential Progression II: Electric Boogaloo
 * 2017-12-09
 */

var ind = 8;
var nextItem = function(n){
    var el = document.getElementById("frist");
    item = document.createElement("li");
    item.innerHTML="item " + ind;
    el.appendChild(item);
    updateList();
    ind ++;
}

var newE = document.getElementById("newE");
newE.addEventListener('click', nextItem);


//Finds the nth term of the fibonacci sequence
var fibonacci = function(n){
    if(n == 0){return 0;}
    else if (n == 1){return 1;}
    else{
	list = document.getElementsByClassName("fib");
	return parseInt(list[n-2].innerHTML) + parseInt(list[n-1].innerHTML);
    }
};


var num = 0;
//Adds the next fibonacci number to the list when button clicked
var addFib = function(){
    //console.log(fibonacci(num));
    var el = document.getElementById("thelist");
    item = document.createElement("li");
    item.innerHTML=fibonacci(num);
    item.setAttribute("class", "fib");
    el.appendChild(item);
    num += 1;
};

//refers to the button to add new elements to the list
var newFib = document.getElementById("newFib");
newFib.addEventListener('click', addFib);
//console.log(addFib);

var mersenne = function(n){
	return Math.pow(2, n) - 1;
}

var exp = 0;
//Adds the next Mersenne number to the list when button clicked
var addMersenne = function(){
    //console.log(mersenne(num));
    var el = document.getElementById("mersenne");
    item = document.createElement("li");
    item.innerHTML=mersenne(exp);
    item.setAttribute("class", "mersenne");
    el.appendChild(item);
    exp += 1;
};

//refers to the button to add new elements to the list
var newMersenne = document.getElementById("newMersenne");
newMersenne.addEventListener('click', addMersenne);
//console.log(addFib);

//updates the list of items as add is called
var list;
var updateList = function(){
    list = document.getElementsByTagName("li");
    //console.log(list);
    //for each list item, add three event listeners
    for (var i = 0; i < list.length; i++){
	if(list[i].getAttribute("class") != "fib" && list[i].getAttribute("class") != "mersenne"){
	    list[i].addEventListener('mouseover', changeHead);
	    list[i].addEventListener('mouseout', changeBack);
	    list[i].addEventListener('click', remove);
	    //console.log(list[i]);
	}
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
    var list = document.getElementById("frist");
    list.removeChild(this);
}

