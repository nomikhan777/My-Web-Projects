add = document.getElementById("add");
add.addEventListener("click", () => {
    console.log("Updating list...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    // popolate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";

    itemJsonArray.forEach((eLement, index) => {
        str += `
                <tr>
                    <th scope="row">${index}</th>
                    <td>${eLement[0]}</td>
                    <td>${eLement[1]}</td>
                    <td><button  class="btn btn-sm btn-primary">Delete</button></td>
                  </tr> `;

    });
    function deleteItem() {
        onclick = deleteItem;
        setAttribute('id', input.value);
        ItemTitle.add("action");
        className = icon;

    }
    tableBody.innerHTML = str;
});