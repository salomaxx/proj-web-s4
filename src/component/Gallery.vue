<template>
    <div class="character-gallery">
        <Character v-for="character in characters" :key="character.id" :character="character"/>
    </div>
</template>

<script>
import Character from './Character.vue';
import { getBbData } from '@/services/api/bbAPI.js';

const MAX_CHARACTERS = 12;

export default {
    name: 'CharacterGallery',
    components: {
        Character
    },
    data() {
        return {
            characters: []
        };
    },
    async mounted() {
        try {
            const allCharacters = await getBbData();
            this.characters = allCharacters.slice(0, MAX_CHARACTERS); // Sélectionnez seulement les premiers MAX_CHARACTERS personnages
        } catch (error) {
            console.error('Error fetching characters data:', error);
        }
    }
};
</script>

<style scoped>
.character-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
}

@media (max-width: 1300px) {
    .character-gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 1000px) {
    .character-gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {
    .character-gallery {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
