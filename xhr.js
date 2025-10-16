function getImg(){

    let xhr=new XMLHttpRequest();
    console.log(xhr);
    xhr.open("GET","https://dog.ceo/api/breeds/image/random",true)
    xhr.onload=function(){
        if(xhr.status===200){
            let res=JSON.parse(xhr.responseText);
            document.getElementById("box").innerHTML=`<img src="${res.message}">`
        }
        else{
            alert("Not Found")
        }
    };
    xhr.send();
}