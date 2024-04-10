<template>
      <div class="selectBox">
        <select class="selectBox" v-model="selectedOption" @change="selectCards">
            <option value="all">All</option>
            <option value="female">Women</option>
            <option value="male">Men</option>
        </select>
      </div>
</template>

<script>
    export default {
    name: 'SelectBox',
    data() {
      return {
        selectedOption: 'all' // par défaut on affiche tout le monde
      }
    },
    methods: {
      selectCards() {
        this.$emit('select', this.selectedOption.toLowerCase()); 
    }
  }
}
</script>

<style scoped>

.selectBox {
  /* margin-top: 40px; */
  text-align: right; 
  margin-right: 2%;
  padding: 0px 16px ;
  font-size: 16px ;
  height: 40px;
  margin-bottom: 40px;
  margin-top: 10px;
  
}

select{
  border: 1px solid #ccc;
  border-radius: 8px;
  color: gray;
}


</style>