<template>
        <select class="selectBox" v-model="selectedOption" @change="selectCards">
            <option value="all">All</option>
            <option value="female">Women</option>
            <option value="male">Men</option>
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
        this.$emit('select', this.selectedOption.toLowerCase()); 
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