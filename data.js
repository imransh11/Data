// Your code here.
// window.addEventListener('DOMContentLoaded', (e) => {
//     document.getElementById('add').addEventListener('click', e => {
//         let newItem = document.createElement('li')

//         newItem.setAttribute('data-type', data.type)
//         newItem.dataType = newItem.getAttribute('type')

//         let ul = document.querySelector('#shopping-list')



//         ul.append(newItem)
//     })
// })
// console.log(ul,'ull')

function addItem(e) {
    //prevent default behavior of the form submission
    e.preventDefault();
    const shoppingList = document.getElementById('shopping-List');
    const name = document.getElementById('name')
    const type = document.getElementById('type')

    const li = document.createElement("li")
    li.innerText = name.value;
    li.dataset.type = type.value;
    shoppingList.appendChild(li);
    name.value = "";
    type.value = "dairy";


}

window.addEventListener("DOMContentLoaded", event => {
    document.getElementById("add")
    .addEventListener("click", addItem);
});
