const url="https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const confi = {headers:{Accept:"application/json"}};
        let apiheader= await axios.get(url,confi);
        console.log(apiheader.data);
    }
    catch(err){
        console.log(err,"error");
    }
}