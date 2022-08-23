<template>
  <div class="mt-2">
    <h1 class="text-center">Compras</h1>
    <div>
      <!-- Inicio: HeaderCompras -->
      <HeaderCompras />
      <!-- Fim: HeaderCompras -->

      <!-- Inicio: Modal Nova Compra -->
      <NovaCompra/>
      <!-- Fim: Modal Novo Compra-->

      <!-- Inicio: Componente-Modal Editar Compra -->
     <ListarCompras/>     
      <!-- Fim: Componente-Modal Editar Compra -->    
    </div>
  </div>
</template>

<script>

import ListarCompras from "../components/Compras/ListarCompras.vue";
import NovaCompra from "../components/Compras/NovaCompra.vue";
import HeaderCompras from "../components/Compras/HeaderCompras.vue";


export default {
  components: { ListarCompras, NovaCompra, HeaderCompras },
  data() {
    return {
    
    };
  },
  async created() {  
    // Requisição das Compras
    const response = await fetch(
      "https://api-microerp.herokuapp.com/api/Compras/"
    );
    let req = await response.json();
    this.$store.state.compras = req.sort(function(a, b) {
      return b.id - a.id;
    });

    // Requisição dos Fornecedores 
    const fornecedor = await fetch(
      "https://api-microerp.herokuapp.com/api/Fornecedor/"
    );

    // Requisição dos Produtos 
    let reqfornecedor = await fornecedor.json();
    this.$store.state.fornecedores = reqfornecedor;
    const estoque = await fetch(
      "https://api-microerp.herokuapp.com/api/Produtos/"
    );
    let reqestoque = await estoque.json();
    this.$store.state.produtos = reqestoque;
  },

};
</script>

<style scoped>
</style>