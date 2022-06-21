<template>
  <span>
    <header>
      <nav-bar logo="Social Isa" url="#" cor="purple accent-2" />
      <!-- a tag está nomeada assim porque Nav começa com N maiúsculo e tem um B maiúsculo em seguida -->
    </header>

    <main>
      <div class="container">
        <div class="row">
          <grid-vue tamanho="4">
            <card-menu-vue>
              <div class="row valign-wrapper">
                <grid-vue tamanho="4">
                  <img
                    src="https://materializecss.com/images/yuna.jpg"
                    alt=""
                    class="circle responsive-img"
                  />
                  <!-- notice the "circle" class -->
                </grid-vue>
                <grid-vue tamanho="8">
                  <span class="black-text">
                    <h5>Isadora</h5>
                    Add the "circle" class to it to make it appear circular.
                  </span>
                </grid-vue>
              </div>
            </card-menu-vue>
            <card-menu-vue>
              <h3>Testando</h3>
            </card-menu-vue>
          </grid-vue>
          <!-- formas de definir o tamanho da grid -->
          <grid-vue tamanho="8">
            <router-view />
          </grid-vue>
        </div>

        <!-- aqui ele chama a div da home -->
      </div>
    </main>

    <footer-vue
      logo="Rodapé Isa"
      url="#"
      cor="purple accent-2"
      descricao="Teste de descricao"
      ano="1999"
    >
      <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
    </footer-vue>
  </span>
</template>

<script>
import NavBar from "@/components/layouts/NavBar";
import FooterVue from "@/components/layouts/FooterVue";
import GridVue from "@/components/layouts/GridVue";
import CardMenuVue from "@/components/layouts/CardMenuVue";


export default {
  name: "App",
  components: {
    NavBar,
    FooterVue,
    GridVue,
    CardMenuVue
  },
};
</script>

<style>
</style>
