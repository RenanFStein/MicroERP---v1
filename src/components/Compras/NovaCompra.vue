<template>       
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
                    v-model="this.$store.state.cadastroCompras.fornecedor"
                  >
                    <option
                      :value="fornecedor.id"
                      v-for="fornecedor in this.$store.state.fornecedores"
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
                    v-model="this.$store.state.cadastroCompras.estoque.produto"
                  >
                    <option
                      :value="produto.id"
                      v-for="produto in this.$store.state.produtos"
                      :key="produto.id"
                    >{{produto.nomeProduto}}</option>
                  </select>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-5 mt-1">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Valor"
                    min="1"                   
                    :value="this.$store.state.cadastroCompras.estoque.valor"
                    @input="event => this.$store.state.cadastroCompras.estoque.valor =  Math.abs(event.target.value)"> 
               
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5 col-5 mt-1">
                  <input
                    type="number"
                    class="form-control mt-2"
                    placeholder="Quantidade"
                    min="1"
                    :value="this.$store.state.cadastroCompras.estoque.quantidade"
                    @input="event => this.$store.state.cadastroCompras.estoque.quantidade = Math.abs(event.target.value)">    
                   
                  
                </div>
                <div class="col-lg-7 col-md-7 col-sm-7 col-7 mt-1">
                  <input
                    type="number"
                    class="form-control mt-2"
                    disabled
                    placeholder="Total"
                    :value="(Math.abs(this.$store.state.cadastroCompras.estoque.valor * this.$store.state.cadastroCompras.estoque.quantidade))"
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
</template>

<script>



export default {   
  
    methods: {
        async novaCompra() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.$store.state.cadastroCompras)
            };
            const response = await fetch("https://api-microerp.herokuapp.com/api/Compras/", requestOptions);
            console.log(response);
            const data = await response.json();
            if (response.status == 201) {             
                const response = await fetch(
                  "https://api-microerp.herokuapp.com/api/Compras/"
                );
                let req = await response.json();   
                this.$store.state.compras = req.sort(function(a, b) {
                  return b.id - a.id;
                }); 
                console.log("Cadastro Correto")
            }
            else {
                console.log("Cadastro Invalido");
            }
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    },
    
}
</script>