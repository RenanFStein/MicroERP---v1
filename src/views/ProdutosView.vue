<template>
    <div class="mt-2">
        <h1 class="text-center">Produtos e Estoque</h1>
        <div class="container " >
            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                <input class="form-control w-50 rounded-3" type="text" id="txtBusca" placeholder="Buscar..."/>
                
                <button type="submit" class="btn btn-outline-success p-1 mt-2 rounded-5" data-bs-toggle="modal"
                            data-bs-target="#novoProduto">
                            <i class="fa-solid fa-circle-plus p-1" />
                            Produto
                </button>
            </div>
            <div class="row ">
                <div class="col-lg-3 col-md-4 col-sm-6 mt-2 " v-for="itens in produtos" :key="itens.id" >
                    <div class="card border-warning  mb-3 shadow-lg ">
                        <div class="card-header bg-transparent border-warning ">Cod.: {{itens.id}} - {{itens.nomeProduto}}</div>
                        <div class="card-body ">
                            <p class="card-text">Descrição: {{itens.descricao_produto}}</p>                          
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
                <h5 class="modal-title" id="exampleModalLabel" >Cadastro de Produto</h5>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Nome">
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Descrição">
                <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Valor">
                <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Quantidade">
                <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Total">
                
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
                <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Valor">
                <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Quantidade">
                <input type="number" class="form-control mt-2" id="inputCidade4" placeholder="Total">
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
 
    export default{
    data(){
        return{
    
            produtos: {              
                    nomeProduto: '', 
                    descricao_produto:'',                                   
                    },
            estoques:{
                    produto: '', 
                    quantidade: '', 
                    valor: '', 
       
            }           
            }
    },  
    async created () {
        
            const response = await fetch("https://api-microerp.herokuapp.com/api/Produtos/")
            let req = await response.json()
            this.produtos = req 

            const response_estoque = await fetch("https://api-microerp.herokuapp.com/api/Estoques/")
            let req_estoque = await response_estoque.json()
            this.estoques = req_estoque 
            

          
        
           
        }, 

             
    }
</script>

<style scoped>



</style>