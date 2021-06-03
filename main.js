var menu_list_array = ["Veg Margherita Pizza" , "Double Cheese Margherita" , "Farm House" , "Peppy Paneer" , "Mexican Green Wave"];

function menu_list(){
var htmldata;
//Complete the code
var with_update = [];

for (i = 0; i < menu_list_array.length; i++) {
    display_menu =  "<br>" + "<li>" + menu_list_array[i] + "</li>";
    with_update.push(display_menu);
    console.log(with_update);
    console.log(i);
    console.log(display_menu);
}
with_update.sort();
var space = with_update.join(" ");
console.log(space);
document.getElementById("display_menu").innerHTML = space;

document.getElementById("menu_list").innerHTML = "Refresh Menu";
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code

if (item == "") {
    window.alert("Please enter a value");
} else {
    menu_list_array.push(item);
document.getElementById("add_item").value = "";
}


}

function add_top(){
//Complete the code
}