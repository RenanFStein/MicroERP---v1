<template>
    <div class="mt-2">
        <h1 class="text-center">Caixa</h1>
        <div class="container ">
             <div class="row mt-1">
      
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                    <input class="form-control w-100 rounded-3 " type="text" id="txtBusca" placeholder="Buscar..."/>
                </div>
            </div>                
                
            <div class="row mt-1">
                <div class="col-lg-3 col-md-4 col-sm-6 mt-1 " v-for="caixa in movimentacao" :key="caixa.id">
                    
                    <div class="card border-warning  mb-3  shadow">
                        <div class="card-body ">
                            
                            <p class="card-text" v-if="caixa.venda == false" >Cod.:{{caixa.id}} | Entrada </p>
                            <p class="card-text" v-else>Cod.:{{caixa.id}} | Saida </p>
                            
                            <p class="card-text" v-if="caixa.venda == false" >Nome: {{caixa.compra[0][0].nome_fornecedor}}</p>
                            <p class="card-text" v-else>Nome: {{caixa.venda[0][0].nome_cliente}}</p>
                            
                            <p class="card-text" v-if="caixa.venda == false" >Valor: {{formatPrice(caixa.compra[1][0].valor * caixa.compra[1][0].quantidade)}}</p>
                            <p class="card-text" v-else>Valor: {{(formatPrice(Math.abs(caixa.venda[1][0].valor * caixa.venda[1][0].quantidade)))}} </p>
                                                      
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-items-center">
                                <p class="card-text" v-if="caixa.status == false">Status: Em aberto <i style="color:red" class="fa-solid fa-triangle-exclamation"></i></p>
                                <p class="card-text" v-else>Status: Pago <i style="color:green" class="fa-solid fa-check"></i></p>                                                                            
                            <button type="submit" class="btn btn-sm btn-outline-success p-1 rounded-5" data-bs-toggle="modal" :data-bs-target="'#editarCaixa'+caixa.id">
                                <i class="fa-solid fa-pen-to-square p-2"></i>                                                                        
                            </button>  
                    
                            </div>
                        </div>
                        <!-- Modal Editar Fornecedor -->
                    <div class="modal fade" :id="'editarCaixa'+caixa.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Realizar Baixa</h5>
                                </div>
                                <form action="/" method="PUT">
                                <div class="modal-body ">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input"  
                                            type="checkbox" 
                                            id="flexSwitchCheckChecked" 
                                            v-model="caixa.status">
                                    <label class="form-check-label" :value="caixa.status" for="flexSwitchCheckChecked" v-if="caixa.venda == false" >Compra paga com sucesso</label>
                                    <label class="form-check-label" :value="caixa.status" for="flexSwitchCheckChecked" v-else>Venda recebida com sucesso</label>
                                </div>
                                                                                              
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3" data-bs-dismiss="modal"><i
                                            class="fa-solid fa-xmark"></i> Fechar</button>
                                    <button type="submit" @click.prevent="updateConta(caixa)" data-bs-dismiss="modal" class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i
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
          

           
       
        </div>

</template>


<script>
    import {mask} from 'vue-the-mask'
    export default{
    directives: {mask},  
    data(){
        return{
            movimentacao:'',
            }            
            
    },  
    async created () {
        
            const response = await fetch("https://api-microerp.herokuapp.com/api/Caixa/")
            let req = await response.json()
            this.movimentacao = req  
           
        },  
    methods:{
        async updateConta(status) { 
            console.log(status)
            const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(status)
                
                };

            const response = await fetch("https://api-microerp.herokuapp.com/api/Caixa/"+status.id+"/", requestOptions);                    
            const data = await response.json();
            console.log(response)
            console.log(data)
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