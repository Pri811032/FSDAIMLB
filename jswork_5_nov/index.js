function fetchData(){
const response= fetch("https://dummyjson.com/recipes");
response.then((data)=>{
   console.log(data);
   data.json().then((res)=>{
    console.log(res.recipes[0]);
    const tableBody = document.querySelector('#jaxt');
    res.recipes[0].forEach(item => {
      const row = document.createElement('tr');
      

      for (let key in item) {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
      }

      tableBody.appendChild(row);
   })
}).catch((error)=>{
   console.log(error)
}).finally(()=>{
    console.log("Executed all responses")
})

}
)
}

