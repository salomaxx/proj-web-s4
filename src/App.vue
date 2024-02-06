<template>
    <HeaderVue></HeaderVue>
    <div id="app"></div>

    <body>
    </body>

</template>

<script>
import HeaderVue from './component/Header.vue';

export default {
    components: {
        HeaderVue
    }
}
</script>

<!--scoped pour dire que ca s'applique que dans le template de ce fichier -->
<style scoped>

 body {
        margin: 0;
        font-family: 'Atkinson Hyperlegible', sans-serif;
    }

header {
        text-align: center;
        padding: 0;
        margin: 0;
        font-size: clamp(1rem, 2vw, 2.5rem);
        font-weight: 500;
        color: #0c0c0c;
    }

h1 {
        text-align: center;
        padding: 0;
        margin: 0;
        font-size: clamp(1rem, 2vw, 2.5rem);
        font-weight: 500;
        color: #0c0c0c;
    }
</style>