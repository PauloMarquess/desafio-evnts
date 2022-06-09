export const getPokemonData = async (url:any) =>{
    try{
        const response= await fetch(url)
        return await response.json()
    }catch(error){
        console.log("error",error)
    }
}