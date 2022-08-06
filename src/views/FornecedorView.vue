<template>
    <div class="mt-2">
        <h1 class="text-center">Fornecedor</h1>
        <div class="container ">
            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                <input class="form-control w-50 rounded-3" type="text" id="txtBusca" placeholder="Buscar..."/>
                
                <button type="submit" class="btn btn-outline-success p-1 mt-2 rounded-5" 
                            data-bs-toggle="modal"
                            data-bs-target="#novoFornecedor">
                            <i class="fa-solid fa-circle-plus p-1" />
                            Fornecedor
                </button>
            </div>
          
            <div class="row mt-1">
                <div class="col-lg-3 col-md-4 col-sm-6 mt-1 ">
                    <div class="card border-warning  mb-3  shadow">
                        <div class="card-body ">
                            <p class="card-text">Empresa: Programador 10000</p>
                            <p class="card-text">CNPJ: 12.321.123/0001-20</p>
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                                <span class="align-self-center">Status: Ativo</span>                                             
                                <button type="submit" class="btn btn-sm btn-outline-success p-1 rounded-5" data-bs-toggle="modal" data-bs-target="#editarFornecedor">
                                    <i class="fa-solid fa-pen-to-square p-2"></i>                                                                        
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            </div>
            <!-- Modal Novo Fornecedor -->
            <div class="modal fade" id="novoFornecedor" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cadastro de Fornecedor</h5>
                        </div>
                        <form>
                          <div class="modal-body ">
                            <input type="text" class="form-control mt-2"  placeholder="Empresa">
                            <input type="text" minlength="14" maxlength="14" class="form-control mt-2"  placeholder="CNPJ">
                            <div class="row mt-2">
                                <div class="col-lg-5 col-md-5 col-sm-5 mt-1">
                                    <input type="text" class="form-control mt-2" id="telefone" placeholder="(99) 9 9999-9999">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-7 mt-1">
                                    <input type="text" class="form-control mt-2" id="email" placeholder="dev@dev.com.br">
                                </div>
                            </div>
                            <input type="text" class="form-control mt-2"  placeholder="Endereço">
                            <div class="row">        
                                <div class="col-lg-4 col-md-4 col-sm-4 col-4 mt-1">
                                    <input type="text" class="form-control mt-2" placeholder="Número">
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-8 mt-1">
                                    <input type="text" class="form-control mt-2" placeholder="CEP" >
                                </div>
                            </div> 
                            <input type="text" class="form-control mt-2"  placeholder="Complemento">
                            <div class="row">        
                                <div class="col-lg-9 col-md-9 col-sm-9 col-9 mt-1">
                                    <input type="text" class="form-control mt-2" placeholder="Cidade">
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-3 mt-1">
                                    <input type="text" minlength="2" maxlength="2" class="form-control mt-2" placeholder="UF" >
                                </div>
                            </div>                         
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark rounded-5" data-bs-dismiss="modal"><i
                                    class="fa-solid fa-xmark"></i> Fechar</button>
                            <button type="submit" class="btn btn-outline-success rounded-5"><i
                                    class="fa-solid fa-cloud"></i> Salvar</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Fim Modal Novo Fornecedor-->

            <!-- Modal Editar Fornecedor -->
            <div class="modal fade" id="editarFornecedor" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Editar Fornecedor</h5>
                        </div>
                        <form>
                        <div class="modal-body ">
                            <input type="text" class="form-control mt-2"  placeholder="Empresa">
                            <input type="text" minlength="14" maxlength="14" class="form-control mt-2"  placeholder="CNPJ">
                            <div class="row mt-2">
                                <div class="col-lg-5 col-md-5 col-sm-5 mt-1">
                                    <input type="text" class="form-control mt-2" id="telefone" placeholder="(99) 9 9999-9999">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-7 mt-1">
                                    <input type="text" class="form-control mt-2" id="email" placeholder="dev@dev.com.br">
                                </div>
                            </div>
                            <input type="text" class="form-control mt-2"  placeholder="Endereço">
                            <div class="row">        
                                <div class="col-lg-4 col-md-4 col-sm-4 col-4 mt-1">
                                    <input type="text" class="form-control mt-2" placeholder="Número">
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-8 mt-1">
                                    <input type="text" class="form-control mt-2" placeholder="CEP" >
                                </div>
                            </div> 
                            <input type="text" class="form-control mt-2"  placeholder="Complemento">
                            <div class="row">        
                                <div class="col-lg-9 col-md-9 col-sm-9 col-9 mt-1">
                                    <input type="text" class="form-control mt-2" placeholder="Cidade">
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-3 mt-1">
                                    <input type="text" minlength="2" maxlength="2" class="form-control mt-2" placeholder="UF" >
                                </div>
                            </div>                         
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark rounded-5" data-bs-dismiss="modal"><i
                                    class="fa-solid fa-xmark"></i> Fechar</button>
                            <button type="submit" class="btn btn-outline-success rounded-5"><i
                                    class="fa-solid fa-cloud"></i> Salvar</button>
                        </div>
                        </form>
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