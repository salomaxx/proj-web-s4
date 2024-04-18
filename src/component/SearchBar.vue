<template>
  <div class="search-bar">
    <input class="search-input" type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Type a name !">
    <button @click="search">Search</button>
    <button @click="clearSearch">Clear</button>
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
      const trimmedQuery = this.searchQuery.trim();
      this.$emit('search', trimmedQuery);
      this.saveSearchKeyword(trimmedQuery);
    },
    clearSearch() {
      this.searchQuery = '';
      this.$emit('search', '');
      this.saveSearchKeyword('');
    },
    saveSearchKeyword(keyword) {
      localStorage.setItem('searchKeyword', keyword);
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

.search-input {
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 8px;
  text-align: left;
}

.search-bar button {
  padding: 8px 16px;
  margin-left: 10px;
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
