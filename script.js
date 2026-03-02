// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
//    // .then (res => console.log(res))
//    .then(res => res.json())
//    .then(data =>{
//          meals= data.meals})
//    .catch(err => { console.log(err) })
fetch('https://fakestoreapi.com/products').then(res => res.json())//json to array
   .then(data => displayCake(data))//array pass to function
   .catch(err => { console.log(err) })//error handling

function displayCake(cdata) {
   let result = document.getElementById("result")
   let html ="";
   cdata.forEach(item => {
      html += `
      <div class="col mb-4">
      <div class= "card h-100" >
      <div class="card" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" id="cakeName"> ${item.title}  </h5>
                        <div >
                            <a href="#" class="btn btn-primary">Add to Favourite</a>
                        </div>
                        </div>
                        </div>
                        `
   })
   cardrow.innerHTML=html;


}

