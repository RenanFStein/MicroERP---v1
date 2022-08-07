<template>
    <div class="mt-2">
        <h1 class="text-center">Caixa</h1>
        <div class="container ">
             <div class="row mt-1">
                <div class="col-lg-3 col-md-4 col-sm-5 col-12  mt-1 text-center d-flex justify-content-between">
                     <button type="submit" class="btn btn-outline-success rounded-5" data-bs-toggle="modal"
                            data-bs-target="#novoProduto">
                            <i class="fa-solid fa-circle-chevron-up p-1" />
                            Entrada
                    </button>
                                        <button type="submit" class="btn btn-outline-danger  rounded-5" data-bs-toggle="modal"
                                data-bs-target="#novoProduto">
                                <i class="fa-solid fa-circle-chevron-down p-1"/>
                                Saida
                    </button>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-7 col-12 mt-1">
                    <input class="form-control w-100 rounded-3 " type="text" id="txtBusca" placeholder="Buscar..."/>
                </div>
            </div> 
                
        
            <div class="row mt-1">
                <div class="col-lg-3 col-md-4 col-sm-6 mt-1 ">
                    <div class="card border-warning  mb-3  shadow">
                        <div class="card-body ">
                            <p class="card-text">Entrada</p>
                            <p class="card-text">Cliente: Fulano</p>
                            <p class="card-text">CNPJ: 12.123.321/0001-00</p>
                            <p class="card-text">Valor: 120,00</p>
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                                <span class="align-self-center">Saldo Conta: 10,00</span>                                             
                                <button type="submit" class="btn btn-sm btn-outline-success p-1 rounded-5" data-bs-toggle="modal" data-bs-target="#editarProduto">
                                    <i class="fa-solid fa-pen-to-square p-2"></i>                                                                        
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            </div>
            <!-- Modal Novo Produto -->
            <div class="modal fade" id="novoProduto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Entrada de Caixa</h5>
                        </div>
                        <div class="modal-body">
                            <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Cliente">
                            <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="CNPJ">
                            <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Valor">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark rounded-5" data-bs-dismiss="modal"><i
                                    class="fa-solid fa-xmark"></i> Fechar</button>
                            <button type="button" class="btn btn-outline-success rounded-5"><i
                                    class="fa-solid fa-cloud"></i> Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim Modal Novo Produto-->

            <!-- Modal Editar Produto -->
            <div class="modal fade" id="editarProduto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Saída de Caixa</h5>
                        </div>
                        <div class="modal-body">
                              <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Fornecedor">
                            <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="CNPJ">
                            <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Valor">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark rounded-5" data-bs-dismiss="modal"><i
                                    class="fa-solid fa-xmark"></i> Fechar</button>
                            <button type="button" class="btn btn-outline-success rounded-5"><i
                                    class="fa-solid fa-cloud"></i> Salvar</button>
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