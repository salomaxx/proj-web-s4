<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" @input="handleInput" placeholder="Type a name !">
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>

  .search-bar {
    text-align: right; 
    padding-top: 40px;
    padding-right: 5%;
  }

  .search-bar-container {
    display: inline-block; 
    }
  
  .search-bar input {
    padding: 8px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 8px;
    text-align: left;
  }
  
  .search-bar button {
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    background-color: #709e2b;
    color: #efffd8;
    border-radius: 8px;
    /* cursor: pointer;  ??? */
  }
  
  .search-bar button:hover {
    background-color: #547b19;
  }
  </style>
  <!-- #B6eB68 -->