<template>
    <div class="character-gallery">
        <Character/>
    </div>
</template>

<script>
    import Character from './Character.vue'
    import CharacterData from '/Users/salometeyssier/Desktop/web/projet/src/services/api/bhAPI.js'

    export default {
        name: 'CharacterGallery',
        components: {
            Character
        }
    }
</script>

<style>
</style>