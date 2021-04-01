let search_btn=document.getElementById('searchBtn');
let input=document.getElementById("userInput");
let img1=document.getElementById('first-cat');
let img2=document.getElementById('second-cat');
let img3=document.getElementById('third-cat');
let img4=document.getElementById('forth-cat');
search_btn.addEventListener('click',showImge);

function showImge(e){
    e.preventDefault();
fetch('https://api.thecatapi.com/v1/images/search?limit=4')
.then((response) =>
    {
        return response.json();
    }) 
.then((data)=>{
    console.log('data',data)
    img1.src=data[0].url
    img2.src=data[1].url
    img3.src=data[2].url
    img4.src=data[3].url
   
 })
.catch((error)=>console.log('Error',error))

}