let elList = document.querySelector(".list");
let elBtnMovies = document.querySelector(".btn__movies");

let moviesArray = movies.slice(0, 30);

elList.classList.add("list-unstyled");
elBtnMovies.classList.add("btn-outline-info");


elBtnMovies.addEventListener("click", function() {

   renderMovies(moviesArray);

   console.log(elBtnMovies);

})


function renderMovies(array) {


   elList.innerHTML = null;

   for (const item of array) {
      
      let newLi = document.createElement("li");
      let newImg = document.createElement("img");
      newImg.src =  `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
      newImg.width = "200"

      // let newH3 = document.createElement("h3");
      // newH3.textContent = item.Title

      newLi.appendChild(newImg);
      // newLi.appendChild(newH3);

      elList.appendChild(newLi);

      console.log(item);
      
   }

}