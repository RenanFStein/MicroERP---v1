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
                            <p class="card-text" v-else>CNPJ: {{(formatPrice(Math.abs(caixa.venda[1][0].valor * caixa.venda[1][0].quantidade)))}} </p>
                                                      
                        </div>
                        <div class="card-footer bg-transparent border-warning">
                            
                            <div class=" d-flex flex-wrap justify-content-between align-items-center">
                                <p class="card-text" v-if="caixa.status == false">Status: Em aberto <i style="color:red" class="fa-solid fa-triangle-exclamation"></i></p>
                                <p class="card-text" v-else>Status: Pago <i style="color:green" class="fa-solid fa-check"></i></p>                                                                            
         
                               
                            </div>
                        </div>
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
        
        formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }, 
    }                                                                                  
    
     
        
     
        

    }

</script>

<style scoped>



</style>