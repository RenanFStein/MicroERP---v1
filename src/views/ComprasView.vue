<template>
  <div class="mt-2">
    <h1 class="text-center">Compras</h1>
    <div class="container">
      <div class="d-flex flex-wrap justify-content-between align-self-end">
        <input
          class="form-control w-50 rounded-3"
          type="text"
          id="txtBusca"
          placeholder="Buscar..."
        />
        <button
          type="submit"
          class="btn btn-outline-success p-1 mt-2 rounded-5 mb-2 mx-1 px-3"
          data-bs-toggle="modal"
          data-bs-target="#novoProduto"
        >
          <i class="fa-solid fa-circle-plus p-1" />
          Compras
        </button>
      </div>
      <!-- Inicio: Componente-Modal Editar Compra -->
      <div class="row mt-1">
        <div class="col-lg-3 col-md-4 col-sm-6 mt-1" v-for="cadastro in compras" :key="cadastro.id">
          <ListarCompras :cadastro="cadastro" :fornecedores="fornecedores" :produtos="produtos" />
        </div>
      </div>
    </div>
    <!-- Fim: Componente-Modal Editar Compra -->


    <!-- Modal Nova Compra -->
    <div
      class="modal fade"
      id="novoProduto"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <form method="POST" action="#">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Realizar Compra</h5>
            </div>
            <div class="modal-body">
              <div class="row mt-2">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="cadastroCompras.fornecedor"
                  >
                    <option
                      :value="fornecedor.id"
                      v-for="fornecedor in fornecedores"
                      :key="fornecedor.id"
                      selected
                    >{{fornecedor.nome_fornecedor}}</option>
                  </select>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-lg-8 col-md-8 col-sm-8 col-7 mt-1">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="cadastroCompras.estoque.produto"
                  >
                    <option
                      :value="produto.id"
                      v-for="produto in produtos"
                      :key="produto.id"
                    >{{produto.nomeProduto}}</option>
                  </select>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-5 mt-1">
                  <input
                    type="number"
                    class="form-control mt-2"
                    placeholder="Valor"
                    v-model="cadastroCompras.estoque.valor"
                  />
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5 col-5 mt-1">
                  <input
                    type="number"
                    class="form-control mt-2"
                    placeholder="Quantidade"
                    v-model="cadastroCompras.estoque.quantidade"
                  />
                </div>
                <div class="col-lg-7 col-md-7 col-sm-7 col-7 mt-1">
                  <input
                    type="number"
                    class="form-control mt-2"
                    disabled
                    placeholder="Total"
                    :value="(cadastroCompras.estoque.valor * cadastroCompras.estoque.quantidade)"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3"
                data-bs-dismiss="modal"
              >
                <i class="fa-solid fa-xmark"></i> Fechar
              </button>
              <button
                type="submit"
                @click.prevent="novaCompra()"
                data-bs-dismiss="modal"
                class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"
              >
                <i class="fa-solid fa-cloud"></i> Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Fim Modal Novo Compra-->
  </div>
</template>


<script>

import ListarCompras from "../components/Compras/ListarCompras.vue";

export default {
  components: { ListarCompras },
  data() {
    return {
      compras: "",
      editarCompras: {
        fornecedor: "",
        estoque: {
          produto: "",
          quantidade: "",
          valor: ""
        }
      },
      cadastroCompras: {
        fornecedor: "",
        estoque: {
          produto: "",
          quantidade: "",
          valor: ""
        }
      },
      fornecedores: {},
      produtos: {},
    };
  },
  async created() {
    const response = await fetch(
      "https://api-microerp.herokuapp.com/api/Compras/"
    );
    let req = await response.json();
    this.compras = req.sort(function(a, b) {
      return b.id - a.id;
    });
    const fornecedor = await fetch(
      "https://api-microerp.herokuapp.com/api/Fornecedor/"
    );
    let reqfornecedor = await fornecedor.json();
    this.fornecedores = reqfornecedor;
    const estoque = await fetch(
      "https://api-microerp.herokuapp.com/api/Produtos/"
    );
    let reqestoque = await estoque.json();
    this.produtos = reqestoque;
  },
  methods: {

    async novaCompra() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.cadastroCompras)
      };
      const response = await fetch(
        "https://api-microerp.herokuapp.com/api/Compras/",
        requestOptions
      );
      console.log(response)
      const data = await response.json();
      if (response.status == 201) {
            const response = await fetch(
              "https://api-microerp.herokuapp.com/api/Compras/"
            );
            let req = await response.json();
            this.compras = req.sort(function(a, b) {
              return b.id - a.id;
            
            })
           
           
      } else {
        console.log("Cadastro Invalido");
        console.log(data);
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

<style scoped>
</style>