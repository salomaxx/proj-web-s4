<template>
    <div class="character-gallery">
        <Character v-for="character in characters" :key="character.id" :character="character"/>
    </div>
</template>

<script>
import Character from './Character.vue';
import { getBbData } from '@/services/api/bbAPI.js';

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
            this.characters = await getBbData();
        } catch (error) {
            console.error('Error fetching characters data:', error);
        }
    }
};
</script>

<style>
</style>
