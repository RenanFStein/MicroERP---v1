<template>
    <div class="mt-2">
        <h1 class="text-center">Produtos</h1>
        <div class="container ">
            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                <input class="form-control w-50 rounded-3" type="text" id="txtBusca" placeholder="Buscar..."/>
                
                <button type="submit" class="btn btn-outline-success p-1 mt-2 rounded-5" data-bs-toggle="modal"
                            data-bs-target="#novoProduto">
                            <i class="fa-solid fa-circle-plus p-1" />
                            Produto
                </button>
            </div>
            <div class="row ">
                <div class="col-lg-3 col-md-4 col-sm-6 mt-2 ">
                    <div class="card border-warning  mb-3 shadow-lg ">
                        <div class="card-header bg-transparent border-warning ">Produto 1</div>
                        <div class="card-body ">
                            <span class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</span>
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                                <span class="align-self-center">Estoque: 120</span>                                             
                                <button type="submit" class="btn btn-outline-success p-1 rounded-5" data-bs-toggle="modal" data-bs-target="#editarProduto">
                                    <i class="fa-solid fa-pen-to-square p-2"></i>                                                                        
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </div>                
            </div>


        </div>
        <!-- Modal Novo Produto -->
        <div class="modal fade" id="novoProduto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cadastro de Produto</h5>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Nome">
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Descrição">
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Estoque">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark rounded-5" data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i> Fechar</button>
                <button type="button" class="btn btn-outline-success rounded-5"><i class="fa-solid fa-cloud"></i> Salvar</button>
            </div>
            </div>
        </div>
        </div>
        <!-- Fim Modal Novo Produto-->

        <!-- Modal Editar Produto -->
        <div class="modal fade" id="editarProduto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Produto</h5>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Nome">
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Descrição">
                <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Estoque">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark rounded-5" data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i> Fechar</button>
                <button type="button" class="btn btn-outline-success rounded-5"><i class="fa-solid fa-cloud"></i> Salvar</button>
            </div>
            </div>
        </div>
        </div>
        <!-- Fim Modal Editar Produto-->

    </div>

</template>


<script>

</script>

<style scoped>



</style>