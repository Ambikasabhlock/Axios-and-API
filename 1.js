let btn= document.querySelector("button");

btn.addEventListener("click", async()=>{
   let fact= await get2_Facts();
   //console.log(fact);
   let p= document.querySelector("#result");
   p.innerText=fact;



});




let url="https://catfact.ninja/fact";
async function get2_Facts(){
    try{
        let ress= await axios.get(url);
        return(ress.data.fact);
    }    catch (e){
            console.log(e,"error");
            return "no fact found";
        }

    
}


/*let url="https://catfact.ninja/fact";
async function get2_Facts(){
    try{
        let ress= await axios.get(url);
        console.log(ress.data.fact);
    }    catch (e){
            console.log(e,"error");
        }

    
}
get2_Facts()*/