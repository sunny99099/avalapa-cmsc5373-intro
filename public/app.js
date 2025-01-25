//console.log("Hello from app.js");
//console.log("Hello again from app.js");

const b1 = document.querySelector('button');
b1.onclick = buttonClicked;

function buttonClicked(e){
    console.log("button clicked");

    const rndNum = Math.floor(Math.random() * 10) + 1;
    const squareNum = rndNum * rndNum;
    
    const newRow = document.createElement('tr');
    
    newRow.innerHTML=
    `<td>${rndNum}</td>
    <td>${squareNum}</td>`;

    const tbody = document.querySelector('tbody');
    tbody.appendChild(newRow);
}