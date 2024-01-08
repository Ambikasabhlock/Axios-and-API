
let btn= document.querySelector("button");
 btn.addEventListener("click", async ()=>{
    let link= await dogImage();
    console.log(link);
    let img= document.querySelector("#result");
    img.setAttribute("src",link);

});

let url="https://dog.ceo/api/breeds/image/random";

async function dogImage(){
    try{
        let responce = await axios.get(url);
       // console.log(responce.data.message);
        return responce.data.message;
    }
    catch(error){
        console.log(error,"error");
        return "no fact found";
    }
}