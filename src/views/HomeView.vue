<template>
    <div class="mt-5">
        <h1 class="text-center mt-6">Cadastro Empresa</h1>
      
        <div class="container mt-5">
        <div class="d-flex">
            <div>
                <button type="submit" v-show="editar_empresa"  @click="editarEmpresa" class="btn btn-outline-dark rounded-5 mb-2 mx-1 px-3"><i class="fa-solid fa-pencil" ></i> Editar</button>
            </div>  
            <div>
                <button type="submit" v-show="atualizar_empresa" @click="salvarEmpresa" class="btn btn-outline-success rounded-5 mb-2 mx-1 px-3"><i class="fa-solid fa-cloud"></i> Salvar</button>
            </div> 
        </div>

            <div class="row">  
                   
                <div class="col-lg-8 col-md-8 col-sm-7 mt-1">
                    <input type="text" :disabled="disabled == 0" class="form-control" id="inputEmail4" 
                    placeholder="Empresa" v-model="empresa.nome_empresa">
                  
                </div>
                <div class="col-lg-4 col-md-4 col-sm-5 mt-1">
                
                    <input type="text" :disabled="disabled == 0" class="form-control" id="inputCNPJ" 
                    placeholder="CNPJ" maxlength="18"  v-model="empresa.cnpj_empresa" v-mask="['##.###.###/####-##']">  
                </div>
                        
        
            </div>
            <div class="row mt-2">
                <div class="col-lg-2 col-md-3 col-sm-4 mt-1">
                    <input type="text" :disabled="disabled == 0"  class="form-control" id="inputcep4" 
                    placeholder="CEP" maxlength="9" v-model="empresa.cep_empresa" v-mask="['#####-###']">
                </div>
                <div class="col-lg-8 col-md-6 col-sm-8 mt-1">
                    <input type="text" :disabled="disabled == 0"  class="form-control" id="inputEndereco4" 
                    placeholder="Endereço" v-model="empresa.endereco_empresa">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-3 mt-1">
                    <input type="text" :disabled="disabled == 0"  class="form-control" id="inputNumero4" 
                    placeholder="Numero"  v-model="empresa.numero_endereco_empresa">
                </div>
                <div class="col-lg-12 col-md-12 col-sm-9 mt-1">
                    <input type="text" :disabled="disabled == 0"  class="form-control" id="inputComplemento4" 
                    placeholder="Complemento" v-model="empresa.complemento_empresa">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-lg-2 col-md-3 col-sm-4 mt-1">
                    <input type="text" :disabled="disabled == 0"  class="form-control" id="telefone" 
                    placeholder="(99) 9 9999-9999" maxlength="16"  v-model="empresa.telefone_empresa" v-mask="['(##) # ####-####']">
                </div>
                <div class="col-lg-10 col-md-9 col-sm-8 mt-1">
                    <input type="text" :disabled="disabled == 0" maxlength="14" class="form-control" id="email" 
                    placeholder="dev@dev.com.br" v-model="empresa.email_empresa">
                </div>
        </div>
            <div class="row mt-2">
                <div class="col-lg-10 col-md-10 col-sm-10 col-9 mt-1">
                    <input type="text" :disabled="disabled == 0"  class="form-control" id="inputCidade4" 
                    placeholder="Cidade" v-model="empresa.cidade_empresa">
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-3 mt-1">
                    <input type="text" :disabled="disabled == 0"  class="form-control" id="inputUF4" 
                    placeholder="UF" v-model="empresa.uf_empresa"> 
                </div>     
            </div>             
        </div>  
        {{empresa}}
    </div>

</template>


<script>    
    import {mask} from 'vue-the-mask'
    export default{
    directives: {mask},  
    data(){
        return{
            editar_empresa: true,
            atualizar_empresa: false,
            disabled: 0,
            empresa: {              
                    nome_empresa: "", 
                    cnpj_empresa:'',                                     
                    cep_empresa: "",
                    endereco_empresa: "",
                    numero_endereco_empresa: "",
                    complemento_endereco_empresa: "",
                    telefone_empresa: "",
                    email_empresa: "",
                    cidade_empresa: "",
                    uf_empresa: ""
                    },
            }
    },  
    async created () {
        
            const response = await fetch("https://api-microerp.herokuapp.com/api/Empresa/")
            let req = await response.json()
            this.empresa = req[0]                
           
        },  
                                                                                        
        
    methods:{    
        
        editarEmpresa() {
            this.editar_empresa = !this.editar_empresa
            this.atualizar_empresa = !this.atualizar_empresa
            this.disabled = 1
        },
    
        async salvarEmpresa() {
            this.editar_empresa = !this.editar_empresa
            this.atualizar_empresa = !this.atualizar_empresa
            this.disabled = 0
            console.log('****Antes de tirar a mascara*****')
            console.log(this.empresa.cnpj_empresa)
            console.log(this.empresa.telefone_empresa)
            this.empresa.cnpj_empresa = this.empresa.cnpj_empresa.replace('.','').replace('.','').replace('/','').replace('-','')
            this.empresa.telefone_empresa = this.empresa.telefone_empresa.replace('(','').replace(')','').replace(' ','').replace(' ','').replace('-','')
            this.empresa.cep_empresa = this.empresa.cep_empresa.replace('-','')
            console.log('****Depois de tirar a mascara*****')
            console.log(this.empresa.cnpj_empresa)
            console.log(this.empresa.telefone_empresa)
            const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.empresa)
                };
            const response = await fetch("https://api-microerp.herokuapp.com/api/Empresa/"+this.empresa.id+"/", requestOptions);                    
            const data = await response.json();
            console.log(response)
            console.log(data)
        },
        },
        

    }

</script>

<style scoped>




</style>