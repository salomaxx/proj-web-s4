<template>
    <div class="character-gallery">
        <Character/>
    </div>
</template>

<script>
    import CharacterVue from './components/Character.vue'

    export default {
        name: 'CharacterGallery',
        components: {
            Character
        }
    }
</script>

<style>
</style>