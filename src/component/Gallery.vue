<template>
    <div class="character-gallery">
        <Character v-for="(character, index) in characters" :key="index" :characterData="character"/>
    </div>
</template>

<script>
import Character from './Character.vue';
import { getBbData } from '@/services/api/bbAPI.js';

const MAX_CHARACTERS = 47;

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
    margin-left: 5%;
    margin-right: 10%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5%;
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
