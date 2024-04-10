<template>
  <div class="Side">
      <img src="@/assets/burger.png" alt="burger" class="Burger" width="95%" @click="changeRandomBurger">
      <br>
      <h3>Your burger of the day is : </h3>
      <br>
      <h2>{{ randomBurger.name }}</h2>
      <br>
      <h3>For {{ randomBurger.price }} only ! </h3>
  </div>
</template>

<script>
import { getBurgerOfTheDay } from '@/services/api/bbAPI.js';

export default {
  name: 'burgerOfTheDay',
  data() {
      return {
          burgersOfTheDay: [],
          randomBurgerIndex: -1
      };
  },
  computed: {
      randomBurger() {
          if (this.randomBurgerIndex !== -1) {
              return this.burgersOfTheDay[this.randomBurgerIndex];
          }
          return {};
      }
  },
  methods: {
    async changeRandomBurger() {
    try {
        this.randomBurgerIndex = Math.floor(Math.random() * this.burgersOfTheDay.length);
    } catch (error) {
        console.error('Error changing random burger', error);
    }
}
  },
  async mounted() {
      try {
          this.burgersOfTheDay = await getBurgerOfTheDay();
          this.randomBurgerIndex = Math.floor(Math.random() * this.burgersOfTheDay.length);
      } catch (error) {
          console.error('Error fetching burgers of the day', error);
      }
  }
};
</script>

<style scoped>
  .Side {
    position:absolute;
    top: 175px;
    left: 0;
    width: 250px;
    background-color: #ffe7ba; 
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
    font-size: 40px;
    letter-spacing: 3px;
    line-height: 1;
  }

  h3{
    color: #000000;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
  }

</style>
