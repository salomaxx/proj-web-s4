<template>
    <div class="character">
        <img class="picture" src="/Users/salometeyssier/Desktop/web/projet/public/character-test.webp"/>
        <h1>MR PEANUTBUTTER</h1>
        <h2>dog</h2>
        <h2>labrador retriever</h2>
        <h3>First ep : BoJack Horseman: The BoJack Horseman Story, Chapter One</h3>
    </div>
</template>

<script>
import { getBhData } from '/Users/salometeyssier/Desktop/web/projet/src/services/api/bhAPI.js';
export default {
    name: 'Character',
    data() {
        return {
            character: {}
        };
    },
    async mounted() {
        try {
            const characters = await getBhData();
            // Suppose you want to display the third character from the API response
            // You may need to adapt this based on the actual structure of the data returned by getBhData
            this.character = characters[6]; // 3rd character (index 2)
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    }
}

</script>

<style scoped>
    .character {
        /* display: flex; */
        background-color: #ffffffe2;
        width: 300px; 
        padding: 20px;
        margin: 5% ;
        border: 3px solid #000000;
        border-radius: 20px;
        box-sizing: border-box;
        font-size: 20px;
        color: black;
        text-align: center;
        transform: transform 0.3s;
    }

    .character:hover{
        transform: scale(1.1); 
    }

    .picture{
        display: block; 
        margin: 0 auto;
        border-radius: 20px;
        width : 250px;
    }


    h1 {
        font-family : 'BJPolice' ;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }

    h3 {
        font-size: 15px;
    }

</style>