<template>
  <div class="search-bar">
    <input class="search-bar" type="text" v-model="searchQuery" @input="handleInput" placeholder="Type a name !">
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      // Émettre un événement avec la requête de recherche pour que le composant parent puisse réagir
      this.$emit('search', this.searchQuery.trim());
    }
  }
};
</script>

<style scoped>
.search-bar {
  text-align: right; 
  padding-top: 40px;
  padding-right: 5%;
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
}

.search-bar button:hover {
  background-color: #547b19;
}
</style>
