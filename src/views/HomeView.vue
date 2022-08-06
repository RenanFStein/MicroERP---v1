<template>
    <div class="mt-5">
        <h1 class="text-center mt-6">Cadastro Empresa</h1>

        <div class="container mt-5">
        <div class="d-flex">
            <div>
                <button type="submit" v-show="editar_empresa"  @click="editarEmpresa" class="btn btn-outline-dark rounded-5 mb-2 mx-1"><i class="fa-solid fa-pencil" ></i> Editar</button>
            </div>  
            <div>
                <button type="submit" v-show="atualizar_empresa" @click="salvarEmpresa" class="btn btn-outline-success rounded-5 mb-2 mx-1"><i class="fa-solid fa-cloud"></i> Salvar</button>
            </div> 
        </div>
 
            <div class="row">        
                <div class="col-lg-8 col-md-8 col-sm-7 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputEmail4" placeholder="Empresa" value="Empresa"></div>
                <div class="col-lg-4 col-md-4 col-sm-5 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputCNPJ4" placeholder="CNPJ" value="CNPJ"></div>
            </div>
            <div class="row mt-2">
                <div class="col-lg-2 col-md-3 col-sm-4 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputcep4" placeholder="CEP" value="CEP"></div>
                <div class="col-lg-8 col-md-6 col-sm-8 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputEndereco4" placeholder="Endereço" value="Endereço"></div>
                <div class="col-lg-2 col-md-3 col-sm-3 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputNumero4" placeholder="Numero" value="Numero"></div>
                <div class="col-lg-12 col-md-12 col-sm-9 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputComplemento4" placeholder="Complemento" value="Complemento"></div>
            </div>
            <div class="row mt-2">
                <div class="col-lg-2 col-md-3 col-sm-4 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="telefone" placeholder="(99) 9 9999-9999" value="(99) 9 9999-9999"></div>
                <div class="col-lg-10 col-md-9 col-sm-8 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="email" placeholder="dev@dev.com.br" value="dev@dev.com.br"></div>
        </div>
            <div class="row mt-2">
                <div class="col-lg-10 col-md-10 col-sm-10 col-9 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputCidade4" placeholder="Cidade" value="Cidade"></div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-3 mt-1"><input type="text" :disabled="disabled == 0"  class="form-control" id="inputUF4" placeholder="UF" value="UF"> </div>
     
            </div>             
        </div>

        
    </div>

</template>


<script>    
    export default{
    data(){
        return{
            editar_empresa: true,
            atualizar_empresa: false,
            disabled: 0
        }
    },
    methods:{
        editarEmpresa() {
            console.log("editar")
            this.editar_empresa = !this.editar_empresa
            this.atualizar_empresa = !this.atualizar_empresa
            this.disabled = 1
        },
        salvarEmpresa() {
            console.log("salvar")
            this.editar_empresa = !this.editar_empresa
            this.atualizar_empresa = !this.atualizar_empresa
            this.disabled = 0
        },
        },

    
    
    }

</script>

<style scoped>




</style>