const getBhData = async function() {
    const response = await fetch("https://bojack-horseman-api.onrender.com/")
    if (response.status == 200) {
    return await response.json()
    } else {
    new Error(response.statusText)
    }
    }
    export { getBhData }
    

export default async function getCharacterData() {
    const CharacterUrl = "bojack-horseman-api.onrender.com/api/characters/{1 - 100}";
    
    try {
        const response = await fetch(CharacterUrl);
        const data = await response.json();
        const CharacterData = data.data;
        return CharacterData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}