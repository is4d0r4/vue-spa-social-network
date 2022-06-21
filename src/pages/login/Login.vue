<template>

  <span>
      
      <pub-conteudo-vue>

      </pub-conteudo-vue>
      
        <card-conteudo-vue
        perfil="https://materializecss.com/images/yuna.jpg"
        nome="Isadora Cruz"
        data="Hoje - 15:49"
      >
          <card-detalhe-vue 
            img="https://materializecss.com/images/sample-1.jpg" 
            titulo="Paisagem" 
          txt="I am a very simple card. I am good at 
                containing small bits of information.
                I am convenient because I require little
                markup to use effectively."/>
      </card-conteudo-vue>

  </span>
  
</template>

<script>
import CardConteudoVue from "@/components/social/CardConteudoVue"
import CardDetalheVue from '@/components/social/CardDetalheVue.vue'
import PubConteudoVue from '@/components/social/PubConteudoVue.vue'


export default {
  name: "Home",
  data() {
    return {};
  },

  components: {
    CardConteudoVue,
    CardDetalheVue,
    PubConteudoVue
  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
