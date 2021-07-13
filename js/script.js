$("#ButtonPost").on("click", TodoPost);
$("#ButtonClear").on("click", TodoClear);
$("#ButtonMark").on("click", TodoMark);
$("#ButtonDelete").on("click", TodoDel);

function TodoPost(e) {
    e.preventDefault();

    var todo = $("#textTodo").val();
    var list = $("#TodoList");

    var currentListHTML = list.html();
    list.html(currentListHTML + `<div name ="todo"><input type = "checkbox"  class = "prueba" /> ${todo} <br></div>`);

}

function TodoClear() {
    var todos = $('div[name="todo"]');

    for (var i = 0; i < todos.length; i++) {
        todos[i].firstElementChild.checked = false;
    }
}

function TodoMark() {
    var todos = $('div[name="todo"]');

    for (var i = 0; i < todos.length; i++) {
        todos[i].firstElementChild.checked = true;
    }
}

function TodoDel() {

    var list = $('div[name="todo"]');

    list.html("");
}