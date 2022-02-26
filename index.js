// add
let add = document.querySelector("#add");
let imgListContainer = document.querySelector(".img-list-container");
let imgShowContainer = document.querySelector(".img-show-container");
add.addEventListener("click",function(){
    let imgURL  = prompt("please enter image 😑")  
    if(imgURL == null || imgURL == ""){
        alert("Please enter image 😁");
        return;
    }
    //add image to list & add img to show container
    addImgtoListandShow(imgURL);
})

const  addImgtoListandShow=(imgURL)=>{
    let img = document.createElement("img");
    img.setAttribute("class","img-preview"); //styling added
    img.setAttribute("src","imgUrl"); // src added
    imgListContainer.appendChild(img); // photo will be appended at the last

    //final image
    let innerHtml = `
    <div class="img-show-container">
    <img src="/icons/left.svg" alt="" srcset="">
     <img class="final-image"
        src=${imgURL}
        alt=""> 
        <img src="/icons/right.svg" alt="" srcset="">
    </div>
    `
    imgShowContainer.innerHTML = innerHtml;
}