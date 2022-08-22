<template>
    <div class="mt-2" >
        <h1 class="text-center">Clientes</h1>
        <div class="container">
            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                <input class="form-control w-50 rounded-3" type="text" id="txtBusca" placeholder="Buscar..."/>
                
                <button type="submit" class="btn btn-outline-success mb-2 mx-1 px-2 rounded-5" 
                            data-bs-toggle="modal"
                            data-bs-target="#novoCliente">
                            <i class="fa-solid fa-circle-plus p-1" />
                            Cliente
                </button>
                            <!-- Modal Novo Cliente -->
                <div class="modal fade" id="novoCliente" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Cadastro de Cliente</h5>
                            </div>
                            <form action="" method="POST">
                            <div class="modal-body ">                                   
                                <input type="text" class="form-control mt-2"  placeholder="Empresa" v-model="cadastroCliente.nome_cliente">                                    
                                <input type="text" maxlength="18" class="form-control mt-2"  placeholder="CNPJ" v-model="cadastroCliente.cnpj_cliente" v-mask="['##.###.###/####-##']" >
                                <div class="row mt-2">
                                    <div class="col-lg-5 col-md-5 col-sm-5 mt-1">
                                        <input type="text" maxlength="16" class="form-control mt-2" id="telefone" placeholder="(99) 9 9999-9999" v-model="cadastroCliente.telefone_cliente" v-mask="['(##) # ####-####']" >
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-7 mt-1">
                                        <input type="text" class="form-control mt-2" id="email" placeholder="dev@dev.com.br" v-model="cadastroCliente.email_cliente">
                                    </div>
                                </div>
                                <input type="text" class="form-control mt-2"  placeholder="Endereço" v-model="cadastroCliente.endereco_cliente">
                                <div class="row">        
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 mt-1">
                                        <input type="text" class="form-control mt-2" placeholder="Número" v-model="cadastroCliente.numero_endereco_cliente">
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-sm-8 col-8 mt-1">
                                        <input type="text" class="form-control mt-2" placeholder="CEP" maxlength="9" v-model="cadastroCliente.cep_cliente" v-mask="['#####-###']">
                                    </div>
                                </div> 
                                <input type="text" class="form-control mt-2"  placeholder="Complemento" v-model="cadastroCliente.complemento_endereco_cliente">
                                <div class="row">        
                                    <div class="col-lg-9 col-md-9 col-sm-9 col-9 mt-1">
                                        <input type="text" class="form-control mt-2" placeholder="Cidade" v-model="cadastroCliente.cidade_cliente"> 
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mt-1">
                                        <input type="text" minlength="2" maxlength="2" class="form-control mt-2" placeholder="UF" v-model="cadastroCliente.uf_cliente">
                                    </div>
                                </div>                         
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3" data-bs-dismiss="modal"><i
                                        class="fa-solid fa-xmark"></i> Fechar</button>
                                <button type="submit" @click.prevent="novoCliente" data-bs-dismiss="modal" class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i
                                        class="fa-solid fa-cloud"></i> Salvar</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Fim Modal Novo Cliente-->
            </div>
    
            <div class="row mt-1" >
                <div class="col-lg-3 col-md-4 col-sm-6 mt-1" v-for="cadastro in cliente" :key="cadastro.id">
                           
                    <div class="card border-warning  mb-3  shadow">
                        <div class="card-body">
                            <p class="card-text">Empresa: {{cadastro.nome_cliente}}</p>
                            <p class="card-text" >CNPJ: {{cadastro.cnpj_cliente}}</p>  
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-self-end ">
                                <span class="align-self-center">Status: Ativo</span>                                             
                                <button type="submit" class="btn btn-sm btn-outline-success p-1 rounded-5" data-bs-toggle="modal" :data-bs-target="'#editarCliente'+cadastro.id">
                                    <i class="fa-solid fa-pen-to-square p-2"></i>                                                                        
                                </button>                               
                            </div>
                        </div>
                    </div>
                    <!-- Modal Editar Cliente -->
                    <div class="modal fade" :id="'editarCliente'+cadastro.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Editar Cliente</h5>
                                </div>
                                <form action="/" method="POST">
                                <div class="modal-body ">
                                    <input type="text" class="form-control mt-2"  v-model="cadastro.nome_cliente" placeholder="Empresa">
                                                                                      
                                    <input type="text" minlength="18" maxlength="18" class="form-control mt-2" v-model="cadastro.cnpj_cliente" v-mask="['##.###.###/####-##']"   placeholder="CNPJ">
                                    <div class="row mt-2">
                                        <div class="col-lg-5 col-md-5 col-sm-5 mt-1">
                                            <input type="text" class="form-control mt-2" id="telefone" maxlength="16" v-model="cadastro.telefone_cliente" v-mask="['(##) # ####-####']"  placeholder="(99) 9 9999-9999">
                                        </div>
                                        <div class="col-lg-7 col-md-7 col-sm-7 mt-1">
                                            <input type="text" class="form-control mt-2" id="email" v-model="cadastro.email_cliente" placeholder="dev@dev.com.br">
                                        </div>
                                    </div>
                                    <input type="text" class="form-control mt-2"  v-model="cadastro.endereco_cliente" placeholder="Endereço">
                                    <div class="row">        
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-4 mt-1">
                                            <input type="text" class="form-control mt-2" v-model="cadastro.numero_endereco_cliente" placeholder="Número">
                                        </div>
                                        <div class="col-lg-8 col-md-8 col-sm-8 col-8 mt-1">
                                            <input type="text" class="form-control mt-2" v-model="cadastro.cep_cliente" maxlength="9" v-mask="['#####-###']" placeholder="CEP" >
                                        </div>
                                    </div> 
                                    <input type="text" class="form-control mt-2"  v-model="cadastro.complemento_endereco_cliente" placeholder="Complemento">
                                    <div class="row">        
                                        <div class="col-lg-9 col-md-9 col-sm-9 col-9 mt-1">
                                            <input type="text" class="form-control mt-2" v-model="cadastro.cidade_cliente" placeholder="Cidade">
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-3 mt-1">
                                            <input type="text" minlength="2" maxlength="2" class="form-control mt-2" v-model="cadastro.uf_cliente" placeholder="UF" >
                                        </div>
                                    </div>                         
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3" data-bs-dismiss="modal"><i
                                            class="fa-solid fa-xmark"></i> Fechar</button>
                                    <button type="submit" @click.prevent="updateCliente(cadastro)" data-bs-dismiss="modal" class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i
                                            class="fa-solid fa-cloud"></i> Salvar</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- Fim Modal Editar Produto-->
                </div>                
            </div>    
            </div>
        </div>

</template>


<script>
    import {mask} from 'vue-the-mask'
    export default{
    directives: {mask},  
    
    data(){
        //.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        //.replace('.','').replace('.','').replace('/','').replace('-','')
        //.replace('(','').replace(')','').replace(' ','').replace(' ','').replace('-','')
        return{            
            cliente: {                                
                    nome_cliente: "", 
                    cnpj_cliente:"",                                     
                    cep_cliente: "",
                    endereco_cliente: "",
                    numero_endereco_cliente: "",
                    complemento_endereco_cliente: "",
                    telefone_cliente: "",
                    email_cliente: "",
                    cidade_cliente: "",
                    uf_cliente: ""
                    }, 
            cadastroCliente: {                                
                    nome_cliente: "", 
                    cnpj_cliente:"",                                     
                    cep_cliente: "",
                    endereco_cliente: "",
                    numero_endereco_cliente: "",
                    complemento_endereco_cliente: "",
                    telefone_cliente: "",
                    email_cliente: "",
                    cidade_cliente: "",
                    uf_cliente: ""
                    },  
            listCliente: '',     
            }
    },
    async created () {
        
            const response = await fetch("https://api-microerp.herokuapp.com/api/Clientes/")
            let req = await response.json()
            this.cliente = req.sort(function(a, b) {                  
                                return b.id - a.id ;
                                });
             
           
                
        },  

    methods:{   
       
        async updateCliente(cadastro) { 
            this.listCliente = cadastro
            console.log('****Antes de tirar a mascara*****') 
            cadastro.cep_cliente = cadastro.cep_cliente.replace('-','') 
            cadastro.cnpj_cliente = cadastro.cnpj_cliente.replace('.','').replace('.','').replace('/','').replace('-','')
            cadastro.telefone_cliente = cadastro.telefone_cliente.replace('(','').replace(')','').replace(' ','').replace(' ','').replace('-','')       

            const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(cadastro)
                
                };

            const response = await fetch("https://api-microerp.herokuapp.com/api/Clientes/"+cadastro.id+"/", requestOptions);                    
            const data = await response.json();
            console.log(response)
            console.log(data)
        },

        async novoCliente() {  
            this.cadastroCliente.cep_cliente = this.cadastroCliente.cep_cliente.replace('.','').replace('.','').replace('/','').replace('-','')  
            this.cadastroCliente.cnpj_cliente = this.cadastroCliente.cnpj_cliente.replace('.','').replace('.','').replace('/','').replace('-','')        
            this.cadastroCliente.telefone_cliente = this.cadastroCliente.telefone_cliente.replace('(','').replace(')','').replace(' ','').replace(' ','').replace('-','')           
            const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.cadastroCliente)
                };

            const response = await fetch("https://api-microerp.herokuapp.com/api/Clientes/", requestOptions);                    
            const data = await response.json();  
            if (response.status == 201){
                console.log('Cadastro CERTO')   
                window.location.reload();         
            }
            else{
                console.log('Cadastro Invalido')
            }
   

        },
        },   
   
    }
    

    



</script>

<style scoped>



</style>