const appId ="27aed9e2";
 const appKey = "df7b46084487af899eed52752399a088";

 
 export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appId}&app_key=${appKey}`

const response = await fetch(url)

const data = await response.json();

return data[0];
}