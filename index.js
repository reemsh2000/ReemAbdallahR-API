let search_btn=document.querySelector(".searchBtn");
let input=document.getElementById("userInput");
let img1=document.getElementById('first-cat');
let img2=document.getElementById('second-cat');
let img3=document.getElementById('third-cat');
let img4=document.getElementById('forth-cat');
search_btn.addEventListener('click',showImge);

function showImge(){
fetch('https://api.thecatapi.com/v1/images/search?limit=4')
.then((response) =>
    {
        return response.json();
    }) 
.then((data)=>{
    console.log('data',data)
   img1.innerHTML=`<img src='${data[0].url}' alt ='cat'>`;
   img2.innerHTML=`<img src='${data[1].url}' alt ='cat'>`;
   img3.innerHTML=`<img src='${data[2].url}' alt ='cat'>`;
   img4.innerHTML=`<img src='${data[3].url}' alt ='cat'>`;
   
 })
.catch((error)=>console.log('Error',error))

}