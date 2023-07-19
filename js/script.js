function toDoItemElement(text1,text2) {
    return  `<tr>
        <td class="delete"><li>&#128465</li></td>
        <td class="text"><li>${text1}</li></td>
        <td class="text2"><li>${text2}</li></td>
        </tr>`
    // <tr>
    // <td><li>merch</li></td>
    // <td><li>1000</li></td>
// </tr>
}

function addToDoItem() {
    const todoList = $(".todoList");
    const input_name = $("#input_name");
    const input_expense = $("#input_expense");

    if (input_name.val().trim() === "" || input_expense.val().trim() === "") {
        return;
    }
    const items = $(toDoItemElement(input_name.val(),input_expense.val()));

    todoList.append(items);

    input_name.val("");
    input_expense.val("");
     let total_sum = 0;
  $(".todoList .text2 li").each(function () {
    total_sum += parseInt($(this).text());
  });
    items.find(".delete").click(function() {
        let deletedExpense = parseInt(items.find(".text2 li").text());
        total_sum -= deletedExpense;
        items.remove();
    })   
    console.log(total_sum); 
}

$(document).ready(function() {
    const addBtn = $("#add_btn");
    addBtn.click(addToDoItem);
})