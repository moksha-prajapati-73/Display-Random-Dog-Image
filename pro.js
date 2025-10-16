async function getImage() {
    let res=await fetch("https://dog.ceo/api/breeds/image/random");
    let data= await res.json();
    document.getElementById("box").innerHTML=`<img src="${data.message}">`
    console.log(data)

}