<template>
    <div class="character">
        <img class="picture" :src="characterData.image"/>
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
    .character {
        background-color: #ffffffe2;
        width: 230px; 
        /* height: 600px; */
        padding: 20px;
        margin-bottom: 7%;
        margin-left: 5%;
        margin-right: 20%;
        border: 3px solid #000000;
        border-radius: 20px;
        box-sizing: border-box;
        font-size: 20px;
        color: black;
        text-align: center;
        transform: transform 0.3s;
    }

    .character:hover{
        transform: scale(1.02); 
    }

    .picture{
        display: block; 
        margin: 0 auto;
        border-radius: 20px;
        max-width : 180px;
        height: 250px;

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