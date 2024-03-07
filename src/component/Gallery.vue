<template>
    <div class="character-gallery">
        <Character v-for="(character, index) in filteredCharacters" :key="index" :characterData="character"/>
    </div>
</template>

<script>
import Character from './Character.vue';
import { getBbData } from '@/services/api/bbAPI.js';

const MAX_CHARACTERS = 53; //nombre de perso max sur la page

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
    computed: {
        filteredCharacters() {
            const filtered = this.characters.filter(character => character.occupation);//pour enlever persos dont occupation vide
            return filtered.slice(0, MAX_CHARACTERS);
        }
    },
    async mounted() {
        try {
            this.characters = await getBbData();
        } catch (error) {
            console.error('Error fetching characters data:', error);
        }
    }
};
</script>


<style scoped>
.character-gallery {
    margin-left: 20%;
    margin-right: 50px;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap : .2%;
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
