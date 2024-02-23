<template>
    <HeaderVue></HeaderVue>
    <CharacterVue></CharacterVue>
    <GalleryVue></GalleryVue>
    
    <div id="app"></div>

</template>

<script>
import HeaderVue from './component/Header.vue';
import CharacterVue from './component/Character.vue';
import GalleryVue from './component/Gallery.vue';

export default {
  components: {
    HeaderVue,
    CharacterVue,
    GalleryVue
  }
}
</script>

<!-- scoped pour dire que ca s'applique que dans le template de ce fichier -->
<style scoped>
 /* body {
        margin: 0;
    } */    
</style>