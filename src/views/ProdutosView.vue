<template>
    <div class="mt-2">
        <h1 class="text-center">Produtos e Estoque</h1>
        <div class="container " >
            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                <input class="form-control w-50 rounded-3" type="text" id="txtBusca" placeholder="Buscar..."/>
                
                <button type="submit" class="btn btn-outline-success p-1 mt-2 rounded-5 mb-2 mx-1 px-3" data-bs-toggle="modal"
                            data-bs-target="#novoProduto">
                            <i class="fa-solid fa-circle-plus p-1" />
                            Produto
                </button>
            </div>
            <div class="row ">
                <div class="col-lg-3 col-md-4 col-sm-6 mt-2 " v-for="itens in produtos" :key="itens.id">
                            
                    <div class="card border-warning  mb-3 shadow-lg" >
                        <div class="card-header bg-transparent border-warning ">Cod.: {{itens.id}} - {{itens.nomeProduto}}</div>
                        <div class="card-body ">
                            <p class="card-text">Descrição: {{itens.descricao_produto}}</p>   
                            <p class="card-text">Custo Médio: R$ {{formatPrice(itens.custo_medio)  }}</p>  
                            <p class="card-text" id="valor">Valor de Estoque: R$ {{formatPrice(itens.valor_estoque) }}</p>  
                                                    
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                                <span class="align-self-center">Estoque:{{formatPrice(itens.quantidade_estoque)}}</span>                                             
                                <button type="submit" class="btn btn-outline-success p-1 rounded-5" data-bs-toggle="modal" :data-bs-target="'#editarProduto'+itens.id">
                                    <i class="fa-solid fa-pen-to-square p-2"></i>                                                                        
                                </button>
                               
                            </div>
                        </div>
                    </div>
                    <!-- Modal Editar Produto -->
                    <div class="modal fade" :id="'editarProduto'+itens.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cod.: {{itens.id}} - {{itens.nomeProduto}}</h5>
                        </div>
                        <form action="" method="PUT">
                        <div class="modal-body">      
                            <input type="text" class="form-control mt-2" id="inputCidade4" v-model="itens.nomeProduto">      
                            <input type="text" class="form-control mt-2" id="inputCidade4" v-model="itens.descricao_produto">                                                    
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3" data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i> Fechar</button>
                            <button type="submit" @click.prevent="updateProduto(itens)" data-bs-dismiss="modal" class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i class="fa-solid fa-cloud"></i> Salvar</button>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <!-- Fim Modal Editar Produto-->
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
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Nome" v-model="cadastro_produtos.nomeProduto">
           
                <input type="text" class="form-control mt-2" id="inputCidade4" placeholder="Descrição" v-model="cadastro_produtos.descricao_produto">

                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3" data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i> Fechar</button>
                <button type="submit" @click.prevent="novoProduto" data-bs-dismiss="modal" class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i class="fa-solid fa-cloud"></i> Salvar</button>
            </div>
            </div>
        </div>
        </div>
        <!-- Fim Modal Novo Produto-->
    
    </div>

</template>

<script>
    export default{   

    data(){
        return{
    
            produtos: {              
                    nomeProduto: '', 
                    descricao_produto:'',
                    quantidade_estoque:'',
                    custo_medio:'',
                    valor_estoque:'',                                   
                    },
            cadastro_produtos: {              
                    nomeProduto: '', 
                    descricao_produto:'',
                                             
                    },

            }
    },  
    async created () {
        
            const response = await fetch("https://api-microerp.herokuapp.com/api/Produtos/")
            let req = await response.json()
            this.produtos = req 
           
        }, 
    methods:{ 
        async novoProduto() {  

            const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.cadastro_produtos)
                };

            const response = await fetch("https://api-microerp.herokuapp.com/api/Produtos/", requestOptions);                    
            const data = await response.json();  
            if (response.status == 201){
                console.log('Cadastro Correto')  
                console.log(response)
                console.log(data) 
                window.location.reload();         
            }
            else{
                console.log('Cadastro Invalido')
                console.log(response)
                console.log(data)
            }
   

        }, 
        async updateProduto(itens) {           
            const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(itens)
                
                };
            const response = await fetch("https://api-microerp.herokuapp.com/api/Produtos/"+itens.id+"/", requestOptions);                    
            const data = await response.json();
            console.log(response)
            console.log(data)
        }, 
        
        
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
      
    },

    
    }
</script>

<style scoped>



</style>