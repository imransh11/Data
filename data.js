// Your code here.
window.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('add').addEventListener('click', e => {
        let newItem = document.createElement('li')

        newItem.setAttribute('data-type', data.type)
        newItem.dataType = newItem.getAttribute('type')

        let ul = document.querySelector('#shopping-list')



        ul.append(newItem)
    })
})
// console.log(ul,'ull')
