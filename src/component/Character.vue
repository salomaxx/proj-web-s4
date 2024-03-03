<template>
    <div class="character">
        <!-- <img class="picture" src="/Users/salometeyssier/Desktop/web/projet/public/louise.webp"/> -->
        <!-- <h1>LOUISE</h1>
        <h2>occupation</h2> -->

        <img class="picture" :src="character.image"/>
        <h1>{{ character.name }}</h1>
        <h2>{{ character.occupation }}</h2>

    </div>
</template>

<script>
import { getBbData } from '@/services/api/bbAPI.js';
export default {
    name: 'Character',
    data() {
        return {
            character: {}
        };
    },
    async mounted() {
        try {
            const characters = await getBbData();
            this.character = characters[309]; //max 493 
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
        width : 200px;
    }


    h1 {
        font-family : 'BBPolice' ;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 40px;
        letter-spacing: 4px;
        line-height: 1;
    }

    h2 {
        font-size: 20px;
    }

    h3 {
        font-size: 15px;
    }

</style>