<template>
    <!-- Modal Nova Venda -->
    <div class="modal fade" id="novoProduto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form method="POST" action="#">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nova Venda</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row mt-2">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                                <select class="form-select" aria-label="Default select example"
                                    v-model="this.$store.state.cadastroVendas.cliente">
                                    <option :value="cliente.id" v-for="cliente in this.$store.state.clientes"
                                        :key="cliente.id" selected>
                                        {{ cliente.nome_cliente }}
                                    </option>
                                </select>

                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg-8 col-md-8 col-sm-8 col-7 mt-1">
                                <select class="form-select" aria-label="Default select example"
                                    v-model="this.$store.state.cadastroVendas.estoque.produto">
                                    <option :value="produto.id" v-for="produto in this.$store.state.produtos"
                                        :key="produto.id">
                                        {{ produto.nomeProduto }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-5 mt-1">
                                <input type="number" class="form-control mt-2" placeholder="Valor" min="1"
                                    v-model="this.$store.state.cadastroVendas.estoque.valor">

                            </div>

                            <div class="col-lg-5 col-md-5 col-sm-5 col-5 mt-1">
                                <input type="number" class="form-control mt-2" placeholder="Quantidade" min="1"
                                    v-model="this.$store.state.cadastroVendas.estoque.quantidade">
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-7 mt-1">
                                <input type="number" class="form-control mt-2" disabled placeholder="Total"
                                    :value="(this.$store.state.cadastroVendas.estoque.valor * this.$store.state.cadastroVendas.estoque.quantidade)">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3"
                            data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i> Fechar</button>
                        <button type="submit" @click.prevent="novaVendas()" data-bs-dismiss="modal"
                            class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i class="fa-solid fa-cloud"></i>
                            Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Fim Modal Nova Venda-->
</template>

<script>
export default {
    methods:{
        async novaVendas() {
            
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.$store.state.cadastroVendas)
            };
            const response = await fetch("https://api-microerp.herokuapp.com/api/Vendas/", requestOptions);
            const data = await response.json();
            console.log(data);
            if (response.status == 201) {
                const response = await fetch("https://api-microerp.herokuapp.com/api/Vendas/");
                let req = await response.json();
                this.$store.state.vendas = req.sort(function (a, b) {
                    return b.id - a.id;
                });
              
                
                console.log("Cadastro CERTO");
            }
            else {
                console.log("Cadastro Invalido");
                console.log(data);
            }
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }
}
</script>