<template>
    <div class="mt-2">
        <h1 class="text-center" >Dashboard</h1>
        <div class="container ">
             <div class="row mt-1">
      
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                    <input class="form-control w-100 rounded-3 " type="text" id="txtBusca" placeholder="Buscar..."/>
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
            receber:'',
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