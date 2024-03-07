<template>
    <div class="Character">
        <img class="picture" :src="characterData.image"/>
        <br>
        <h1>{{ characterData.name }}</h1>
        <h2>{{ characterData.occupation }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Character',
    props: {
        characterData: Object
    }
}
</script>

<style scoped>
    .Character {
        background-color: #ffffffd2;
        width: 200px; 
        /* height: 600px; */
        padding: 20px;
        margin-bottom: 7%;
        margin-left: 5%;
        margin-right: 20%;
        border: 3px solid #000000;
        border-radius: 20px;
        box-sizing: border-box;
        font-size: 15px;
        color: black;
        text-align: center;
        /* transform: transform 1s ease-in; */
    }

    .Character:hover{
        transform: scale(1.02); 
        background-color: #fffffffd;
    }

    .picture{
        display: block; 
        margin: 0 auto;
        border-radius: 20px;
        max-width : 150px;
        height: 150px;

    }

    h1 {
        font-family : 'BBPolice' ;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 30px;
        letter-spacing: 3px;
        line-height: 1;
    }

    h2 {
        font-size: 18px;
    }

    h3 {
        font-size: 15px;
    }

</style>