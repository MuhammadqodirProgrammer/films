
const cardel = document.querySelector("#card-box");
const selectEl = document.querySelector("#select");
const inputEl =document.querySelector("input")
const formEl =document.querySelector("form")

function domgachiqarator(array, node) {
  let cards = "";
  for (item of array) {
    cards += `  <div class="card col-lg-3 col-md-10 col-sm-10 col-10 mx-sm-auto  hvr-grow mx-3 text-center  shadow-lg p-2  rounded  rounded-4  mt-2 mb-4 " >
     <img src="${item.poster}" class="card-img-top" alt="images">
  <div class="card-body">
  <h4 class="card-title pt-4 film-name">${item.title}</h4>
   <h5 class="card-title overview-text">${item.overview}</h5>
   <h5 class="card-title">${"genres"}:
   ${item.genres}</h5>
 </div>
 </div> `;
  }
  node.innerHTML = cards;
}
domgachiqarator(films, cardel);

let newarr = [];

selectEl.addEventListener("change", () => {
  newarr = [];
  if (selectEl.value != "All") {
    films.forEach((poc) => {
      if (poc.title.includes(selectEl.value)) {
        newarr.push(poc);
      }
    });
    cardel.innerHTML = "";
    domgachiqarator(newarr, cardel);
  } else {
    domgachiqarator(films, cardel);
  }
});
console.log(newarr);
let optionarr =[];
films.forEach((val)=>{
  // console.log(val.title);
  optionarr.push(val.title)
 
})

const filled = new Set(optionarr) 

for(i of filled){
  console.log(i);
  const options =document.createElement("option");
  selectEl.appendChild(options);
  options.textContent = i;
  options.setAttribute("value",i)
}

let newarr2= []

formEl.addEventListener("input", (evt) =>{
  evt.preventDefault()
 cardel.innerHTML =""
  let elinputval =inputEl.value.toLocaleLowerCase();
// console.log(elinputval);
films.forEach((el) => {
  if(el.title.toLocaleLowerCase().includes(elinputval)){
    newarr2.push(el)
  }
});
domgachiqarator(newarr2,cardel)
newarr2 =[]
})
// console.log(newarr2)






