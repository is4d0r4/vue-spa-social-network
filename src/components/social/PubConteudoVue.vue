<template>
  <div class="row">
    <grid-vue class="input-field " tamanho="12">
      <textarea v-model="conteudo" class="materialize-textarea "></textarea>
      <label >Conte-nos o que está acontecendo...</label>
    </grid-vue>
    <p>
      <grid-vue v-if="conteudo" class="btn waves-effect waves-light purple accent-2" tamanho="2 offset-s10">Publicar</grid-vue >
    </p>
  </div>
</template>

<script>
import GridVue from "@/components/layouts/GridVue";

export default {
  name: 'PubConteudoVue',
  props: [],
  data() {
    return {
      conteudo:''
    };
  },
  components:{ 
    GridVue
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
