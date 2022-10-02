let tableDiv = document.getElementById('tablejs');

function createTable(tableDiv, cols, rows){
    let table = document.createElement('table');
    for(let i=0; i < rows; i++){
        let tr = document.createElement('tr');
        for(let i=0; i < cols; i++){
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableDiv.appendChild(table);
}
createTable(tableDiv, 10, 10);

function tableFill() {
    let fillFrom = 1;  
    let td = document.querySelectorAll('td');
    
    for( let i = 0; i < td.length; i++ ) {
      td[i].textContent = fillFrom++;
      if( fillFrom > 100 ) break;
    }
  }
tableFill();