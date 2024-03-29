const getCharacterData = async function() {
    try {
        const response = await fetch("https://bobsburgers-api.herokuapp.com/characters/");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
        throw error;
    }
};

const getBurgerOfTheDay = async function() {
    try {
        const response = await fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
        throw error;
    }
};

export { getCharacterData, getBurgerOfTheDay };