<template>
    <div class="container">
        <div class="row mt-2">
        <div class="col-lg-3 col-md-4 col-sm-6 mt-1 "  v-for="cadastro in this.$store.state.compras" :key="cadastro.id">
        <div class="card border-warning  mb-3  shadow" >
            <div class="card-body" >
                <p class="card-text">Compra:{{ cadastro.id }}</p>
                <p class="card-text">Fornecedor:{{ cadastro.nome_fornecedor.fornecedor }}</p>
                <p class="card-text">Produto: {{cadastro.produto.produto }}</p>
                <p class="card-text">Valor: {{ formatPrice(Math.abs(cadastro.valor)) }}</p>
                <p class="card-text">Quantidade: {{ Math.abs(cadastro.quantidade) }}</p>

            </div>
            <div class="card-footer bg-transparent border-warning">

                <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                    <p class="card-text">Total: {{ formatPrice(Math.abs(cadastro.valor * cadastro.quantidade)) }}</p>
                    <button type="submit" class="btn btn-sm btn-outline-success p-1 rounded-5 " data-bs-toggle="modal"
                        :data-bs-target="'#editarCompra' + cadastro.id">
                        <i class="fa-solid fa-pen-to-square p-2"></i>
                    </button>
            
                </div>
            </div>
        </div>
        </div>
        </div>
        <!-- Modal Editar Compra -->        
         <div class="row mt-1" v-for="cadastro in this.$store.state.compras" :key="cadastro.id">
        <div class="col-lg-3 col-md-4 col-sm-6 mt-1" >
        <div class="modal fade" :id="'editarCompra' + cadastro.id" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <form action="#" method="PUT">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Editar Compra</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row mt-2">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                                    <select class="form-select" v-model="cadastro.nome_fornecedor.fornecedor">
                                        <option :value="(fornecedor.nome_fornecedor)" :data-idfornedor="fornecedor.id"
                                            v-for="fornecedor in this.$store.state.fornecedores" :key="fornecedor.id" selected>
                                            {{ fornecedor.nome_fornecedor }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-7 mt-1">
                                    <select class="form-select" v-model="cadastro.produto.produto">
                                        <option :value="produto.nomeProduto" :data-idproduto="produto.id"
                                            v-for="produto in this.$store.state.produtos" :key="produto.id" selected>
                                            {{ produto.nomeProduto }}

                                        </option>

                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-5 mt-1">
                                    <input type="number" class="form-control mt-2" min="1" placeholder="Valor"                                        
                                        :value="cadastro.valor"
                                         @input="event => cadastro.valor = Math.abs(event.target.value)">    
                                </div>
                                <div class="col-lg-5 col-md-5 col-sm-5 col-5 mt-1">
                                    <input type="number" class="form-control mt-2" min="1" placeholder="Quantidade"                                        
                                        :value="cadastro.quantidade"
                                        @input="event => cadastro.quantidade = Math.abs(event.target.value)">    
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-7 col-7 mt-1">
                                    <input type="number" class="form-control mt-2" disabled placeholder="Total"
                                        :value="Math.abs(cadastro.valor * cadastro.quantidade)">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3"
                                data-bs-dismiss="modal">
                                <i class="fa-solid fa-xmark"></i> Fechar</button>
                            <button type="button" @click.prevent="updateCompra(cadastro, $event)"
                                class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3" data-bs-dismiss="modal">
                                <i class="fa-solid fa-cloud"></i> Salvar</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        </div>
         </div>
        <!-- Fim Modal Editar Compra-->
    </div>

</template>

<script>
export default { 
    methods:{     
            async updateCompra(cadastro, $event) {
                const atualiza = {
                    fornecedor:
                    $event.target.form[0][$event.target.form[0].options.selectedIndex]
                        .__vnode.props["data-idfornedor"],
                    estoque: {
                    produto:
                        $event.target.form[1][$event.target.form[1].options.selectedIndex]
                        .__vnode.props["data-idproduto"],
                    quantidade: cadastro.quantidade,
                    valor: cadastro.valor
                    }
                };

                const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(atualiza)
                };

                const response = await fetch(
                    "https://api-microerp.herokuapp.com/api/Compras/" + cadastro.id + "/",
                    requestOptions
                );        
                console.log(response)
                const data = await response.json();
                },
        
            formatPrice(value) {
            let val = (value / 1).toFixed(2).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


    }
    }
}
</script>