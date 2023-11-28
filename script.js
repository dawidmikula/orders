let counter = 1;

function addItem() {
  const input = document.getElementById('productName');
  const itemName = input.value.trim();

  if (itemName !== '') {
    const itemList = document.querySelector('#itemList tbody');
    
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = counter++;

    const td2 = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', function() {
      tr.classList.toggle('checked');
    });
    td2.appendChild(checkbox);

    const td3 = document.createElement('td');
    td3.textContent = itemName;

    const td4 = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Usuń';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
      itemList.removeChild(tr);
    });
    td4.appendChild(deleteButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    itemList.appendChild(tr);

    input.value = '';
  }
}
