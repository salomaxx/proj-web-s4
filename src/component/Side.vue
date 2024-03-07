<template>
    <div class="Side">
        <h2>Click here</h2>
        <br>
        <img src="@/assets/burger.png" alt="burger" class="Burger" width="80%">
        <br>
        <h3>Your burger of the day is : </h3>
        <br>
        <h2>Bob's burger!</h2>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
  .Side {
    position:absolute;
    top: 200px; /* Ajustez ceci selon la hauteur de votre en-tête */
    left: 0;
    width: 18%;
    min-width: 200px;
    height: 500px;
    background-color: #f1ce36;
    padding: 20px;
    margin-bottom: 7%;
    margin-left: 1%;
    border: 3px solid #000000;
    border-radius: 20px;
    box-sizing: border-box;
    text-align: center;
  }

  .Burger{
    display: block;
    margin: 0 auto;
    transform: 0.2s;
  }

  .Burger:hover{
        transform: scale(1.2); 
    }

  h2{
    color: #000000;
    font-family : 'BBPolice' ;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 45px;
    letter-spacing: 3px;
    line-height: 1;
  }

  h3{
    color: #000000;
    font-family : 'BBPolice' ;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 3px;
    line-height: 1;
  }

</style>
  