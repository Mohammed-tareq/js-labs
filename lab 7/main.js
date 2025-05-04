
// (async function returnData() {
//     try{

//      let result = await  fetch("https://jsonplaceholder.typicode.com/users");
//      let dataResponce = await result.json();
//      console.log(dataResponce)

//     }catch{
//  console.error("data not found");


//     }
    
    
// })();

 fetch("https://jsonplaceholder.typicode.com/users")
 .then((data)=>{
    return data.json();
 }).then((jsonDate)=>{
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    thead.innerHTML = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Company</th>
        <th>Address</th>
    </tr>`;
    
    
    thead.style.textAlign = "center";
    tbody.style.textAlign = "center";

    table.style.broder = "1px solid black";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    
    // Cell styling
    const styleCells = (element) => {
        const cells = element.getElementsByTagName('td');
        for (let cell of cells) {
            cell.style.border = "1px solid black";
            cell.style.padding = "3px";
        }
    };
    
    // Header styling
    const styleHeaders = (element) => {
        const headers = element.getElementsByTagName('th');
        for (let header of headers) {
            header.style.border = "1px solid black";
            header.style.padding = "3px";
            header.style.textAlign = "center";
        }
    };
    
    let dataRows = "";
    jsonDate.forEach(user => {
        dataRows += ` <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                <td>the lat: ${user.address.geo.lat}, and the lng : ${user.address.geo.log}  </td>
            </tr>`;

            tbody.innerHTML=dataRows;
            
    });


    styleHeaders(thead);
    styleCells(tbody);


    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);




 })