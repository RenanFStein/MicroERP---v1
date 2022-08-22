<template>
    <div class="mt-2">
        <h1 class="text-center">Vendas</h1>
        <div class="container ">
            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                <input class="form-control w-50 rounded-3" type="text" id="txtBusca" placeholder="Buscar..."/>                
                <button type="submit" class="btn btn-outline-success p-1 mt-2 rounded-5 mb-2 mx-1 px-3" data-bs-toggle="modal"
                            data-bs-target="#novoProduto">
                            <i class="fa-solid fa-circle-plus p-1" />
                            Vendas
                </button>
            </div>
            
            <div class="row mt-1">
                <div class="col-lg-3 col-md-4 col-sm-6 mt-1 " v-for="cadastro in vendas" :key="cadastro.id">
                    <div class="card border-warning  mb-3  shadow">
                        <div class="card-body">
                            <p class="card-text">Venda:{{cadastro.id}}</p>
                            <p class="card-text">Cliente:{{cadastro.nome_cliente.cliente}}</p>
                            <p class="card-text">Produto: {{cadastro.produto.produto}}</p>
                            <p class="card-text">Valor: {{formatPrice(cadastro.valor)}}</p>
                            <p class="card-text">Quantidade: {{Math.abs(cadastro.quantidade)}}</p>
                           
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                                <p class="card-text">Total: {{formatPrice(Math.abs(cadastro.valor * cadastro.quantidade))}}</p>                                            
                                <button type="submit"  
                                        class="btn btn-sm btn-outline-success p-1 rounded-5 " 
                                        data-bs-toggle="modal" 
                                       :data-bs-target="'#editarCompra'+cadastro.id">
                                    <i class="fa-solid fa-pen-to-square p-2"></i>                                                                        
                                </button>
                               
                            </div>
                        </div>
                    </div>
                    <!-- Modal Editar Venda -->
                    <div class="modal fade" :id="'editarCompra'+cadastro.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <form action="#" method="PUT">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Editar Venda</h5>
                                </div>                                
                                <div class="modal-body">
                                    <div class="row mt-2">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">                                             
                                            <select class="form-select"
                                                    v-model="cadastro.nome_cliente.cliente">
                                            <option :value="(cliente.nome_cliente)" 
                                                    :data-idcliente="cliente.id"  
                                                    v-for="cliente in clientes" 
                                                    :key="cliente.id" selected>
                                                  {{cliente.nome_cliente}}
                                            </option>                               
                                            </select>                                         
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-lg-8 col-md-8 col-sm-8 col-7 mt-1">
                                            <select class="form-select" 
                                                    v-model="cadastro.produto.produto">                                                         
                                            <option :value="produto.nomeProduto"  
                                                    v-for="produto in produtos" 
                                                    :data-idproduto="produto.id"
                                                    :key="produto.id" selected>
                                                    {{produto.nomeProduto}}
                                           
                                            </option>
                                                                          
                                            </select> 
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-5 mt-1" >
                                            <input type="number" class="form-control mt-2" placeholder="Valor" min="1" v-model="cadastro.valor">
                                      
                                        </div>
                                        <div class="col-lg-5 col-md-5 col-sm-5 col-5 mt-1">
                                            <input type="number" class="form-control mt-2"  placeholder="Quantidade" min="1" v-model="cadastro.quantidade">
                                        </div>
                                        <div class="col-lg-7 col-md-7 col-sm-7 col-7 mt-1">
                                        <input type="number" class="form-control mt-2" disabled  placeholder="Total" :value="cadastro.valor * cadastro.quantidade">
                                        </div>
                                    </div>                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" 
                                            class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3" 
                                            data-bs-dismiss="modal">
                                            <i class="fa-solid fa-xmark"></i> Fechar</button>
                                    <button type="button" 
                                            @click.prevent="updateVenda(cadastro, $event)" 
                                            class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3" 
                                            data-bs-dismiss="modal">
                                            <i class="fa-solid fa-cloud"></i> Salvar</button>
                                </div>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                    <!-- Fim Modal Editar Venda-->
                </div>                
            </div>         
            </div>
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
                                    <select class="form-select" aria-label="Default select example" v-model="cadastroVendas.cliente">                                                                      
                                    <option  :value="cliente.id" v-for="cliente in clientes" :key="cliente.id" selected>{{cliente.nome_cliente}}                                       
                                    </option>      
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-7 mt-1">
                                    <select class="form-select" aria-label="Default select example" v-model="cadastroVendas.estoque.produto">            
                                    <option :value="produto.id"  v-for="produto in produtos" :key="produto.id" >
                                            {{produto.nomeProduto}}
                                    </option>                                    
                                    </select>                                    
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-5 mt-1">
                                    <input type="number" class="form-control mt-2" placeholder="Valor" min="1" v-model="cadastroVendas.estoque.valor">
                                    
                                </div>
                               
                                <div class="col-lg-5 col-md-5 col-sm-5 col-5 mt-1">
                                    <input type="number" class="form-control mt-2"  placeholder="Quantidade" min="1" v-model="cadastroVendas.estoque.quantidade" >                                
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-7 col-7 mt-1">
                                   <input type="number" class="form-control mt-2" disabled placeholder="Total" :value="(cadastroVendas.estoque.valor * cadastroVendas.estoque.quantidade)">
                                </div>
                            </div>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3" data-bs-dismiss="modal"><i
                                    class="fa-solid fa-xmark"></i> Fechar</button>
                            <button type="submit" @click.prevent="novaVendas()" class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i
                                    class="fa-solid fa-cloud"></i> Salvar</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <!-- Fim Modal Nova Venda-->   
              
        </div>

</template>


<script>
  export default{   

    data(){
        return{ 
            vendas: '',
            editarVendas: {  
                    cliente: '',       
                    estoque: {
                        produto: '',
                        quantidade: '',
                        valor: '',                          
                        },
            },
            cadastroVendas: {  
                    cliente: '',       
                    estoque: {
                        produto: '',
                        quantidade: '',
                        valor: '',                          
                        },
            },
            clientes:"",
            produtos:"",
            idcliente:"",
            idproduto:"",
        }
    },
    async created () {        
            const response = await fetch("https://api-microerp.herokuapp.com/api/Vendas/")
            let req = await response.json()        
            this.vendas = req.sort(function(a, b) {                  
                                return b.id - a.id ;
                                }); 

            const cliente = await fetch("https://api-microerp.herokuapp.com/api/Clientes/")
            let reqcliente = await cliente.json()        
            this.clientes = reqcliente 

            const estoque = await fetch("https://api-microerp.herokuapp.com/api/Produtos/")
            let reqestoque = await estoque.json()        
            this.produtos = reqestoque
            console.log()
    },
    methods:{
        async updateVenda(cadastro, $event) { 
        
                const atualiza =  {"cliente": $event.target.form[0][$event.target.form[0].options.selectedIndex].__vnode.props["data-idcliente"],
                                    "estoque": {
                                        "produto": $event.target.form[1][$event.target.form[1].options.selectedIndex].__vnode.props["data-idproduto"],
                                        "quantidade": Math.abs(cadastro.quantidade),
                                        "valor": cadastro.valor}}
        
            console.log(atualiza)
            const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(atualiza)
                
                };
            
            const response = await fetch("https://api-microerp.herokuapp.com/api/Vendas/"+cadastro.id+"/", requestOptions); 
            console.log(response)                   
            const data = await response.json();
            console.log(data)
        },

        async novaVendas() {  
            
            console.log(this.cadastroVendas)
            const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.cadastroVendas)
                };

            const response = await fetch("https://api-microerp.herokuapp.com/api/Vendas/", requestOptions);                    
            const data = await response.json();  
            console.log(data)
            if (response.status == 201){
                window.location.reload(true)
                console.log('Cadastro CERTO')   
                       
            }
            else{
                console.log('Cadastro Invalido')
                console.log(data)
            }
   

        },

        formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
        
    }
     
  }
  
</script>

<style scoped>



</style>