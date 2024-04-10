<template>
    <div>
      <SearchBar @search="handleSearch" />
      <SelectBox @select="handleSelect" />
    </div>
  </template>
  
  <script>
  import SelectBox from './SelectBox.vue';
  import SearchBar from './SearchBar.vue';
  
  export default {
    name: 'GalleryHeader',
    components: {
      SelectBox,
      SearchBar
    },
    methods: {
      handleSearch(query) {
        this.$emit('search', query);
      },
      handleSelect(selection) {
        this.$emit('select', selection);
      }
    }
  };
  </script>
  