<template>
        <select class="selectBox" v-model="selectedOption" @change="selectCards">
            <option value="All">All</option>
            <option value="Female">Women</option>
            <option value="Male">Men</option>
        </select>
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
        this.$emit('select', this.selectedOption); 
    }
  }
}
</script>

<style scoped>

    .selectBox {
        display: flex;
        justify-content: center;
        padding-left: 500px;
        height: 40px;
    }
</style>