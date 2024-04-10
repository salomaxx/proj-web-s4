<template>
  <div>
    <GalleryHeader @search="handleSearch" @select="handleSelect" />
    <div class="character-gallery">
      <Character v-for="(character, index) in filteredCharacters" :key="index" :characterData="character"/>
    </div>
  </div>
</template>

<script>
import Character from './Character.vue';
import GalleryHeader from './GalleryHeader.vue';
import { getCharacterData } from '@/services/api/bbAPI.js';

const MAX_CHARACTERS = 53; // nombre de personnages max sur la page

export default {
  name: 'CharacterGallery',
  components: {
    Character,
    GalleryHeader
  },
  data() {
    return {
      characters: [],
      searchQuery: '',
      selectedGender: 'all'
    };
  },
  computed: {
    filteredCharacters() {
      let filtered = this.characters.filter(character => character.occupation); // pour enlever les personnages dont l'occupation est vide

      if (this.searchQuery){
        filtered = filtered.filter(character => character.name.toLowerCase().includes(this.searchQuery));
      }

      if (this.selectedGender !== 'all') {
        filtered = filtered.filter(character => character.gender.toLowerCase() === this.selectedGender.toLowerCase());}

      return filtered.slice(0, MAX_CHARACTERS);
    }
  },
  
  methods: {
  async fetchCharacters() {
    try {
      this.characters = await getCharacterData();
    } catch (error) {
      console.error('Error fetching characters data:', error);
    }
  },
  handleSearch(query) {
    this.searchQuery = query;
    console.log("test");
  },
  handleSelect(selection) {
    this.selectedGender = selection;
  },
},
  mounted() {
    this.fetchCharacters();
  }
};
</script>

<style scoped>
.character-gallery {
  margin-left: 20%;
  margin-right: 50px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: .2%;
}

@media (max-width: 1420px) {
  .character-gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1150px) {
  .character-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 870px) {
  .character-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .character-gallery {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
