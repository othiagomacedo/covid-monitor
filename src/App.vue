<template>
  <div>
    <HeadPage></HeadPage>
    <BodyPage></BodyPage>
    <ModelAlerta></ModelAlerta>
    <FooterPage></FooterPage>
  </div>
</template>
  
<script>
import './scss/style-geral.css'
import ModelAlerta from './components/modal/ModalAlerta.vue'
import HeadPage from './components/head/head-page.vue'
import FooterPage from './components/footer/footer-page.vue'
import BodyPage from './components/body/body-page.vue'
export default {
  components: {
    HeadPage,
    BodyPage,
    ModelAlerta,
    FooterPage
  }
};
</script>

<style>
h1 {
  color: var(--color-text-dark);
}

button {
  padding: 8px;
  margin-top: 50px;
}
</style>
