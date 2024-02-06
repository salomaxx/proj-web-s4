<template>
    <HeaderVue></HeaderVue>
    <div id="app"></div>

</template>

<script>
import HeaderVue from './component/Header.vue';

export default {
  components: {
    HeaderVue
  }
}
</script>

<!-- scoped pour dire que ca s'applique que dans le template de ce fichier -->
<style scoped>
 /* body {
        margin: 0;
    } */
</style>