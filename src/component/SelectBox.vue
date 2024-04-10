<template>
        <select class="selectBox" v-model="selectedOption" @change="selectCards">
            <option value="all">All</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
        </select>
</template>

<script>
    export default {
    name: 'genderfilter',
    data() {
      return {
        selectedOption: 'all'
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