<template>
    <HeaderVue></HeaderVue>
    <SideVue></SideVue>
    <GalleryVue></GalleryVue>
    <FooterVue></FooterVue>
    <div id="app"></div>

</template>

<script>
import HeaderVue from './component/Header.vue';
import SideVue from './component/Side.vue';
import GalleryVue from './component/Gallery.vue';
import FooterVue from './component/Footer.vue';

export default {
  components: {
    HeaderVue,
    SideVue,
    GalleryVue,
    FooterVue
  }
}
</script>

<!-- scoped pour dire que ca s'applique que dans le template de ce fichier -->
<style scoped>
 /* body {
        margin: 0;
    } */    
</style>