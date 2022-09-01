<template>
    <div class="mt-2">
        <h1 class="text-center">Vendas</h1>
        <div class="container ">
            <!-- Header Venda -->
            <HeaderVendas />
            <!-- Fim Header Venda-->
            <!-- Modal Editar Venda -->
            <NovaVenda />
            <!-- Fim Modal Editar Venda-->
            <!-- Modal Nova Venda -->
            <ListarVendas />
            <!-- Fim Modal Nova Venda-->

        </div>
    </div>
</template>


<script>
import HeaderVendas from '../components/Vendas/HeaderVendas.vue';
import NovaVenda from '../components/Vendas/NovaVenda.vue';
import ListarVendas from '../components/Vendas/ListarVendas.vue';
  export default{
    components: { HeaderVendas, NovaVenda, ListarVendas },    
    async created() {
        const response = await fetch("https://api-microerp.herokuapp.com/api/Vendas/");
        let req = await response.json();
        this.$store.state.vendas = req.sort(function (a, b) {
            return b.id - a.id;
        });
        const cliente = await fetch("https://api-microerp.herokuapp.com/api/Clientes/");
        let reqcliente = await cliente.json();
        this.$store.state.clientes = reqcliente;
        const estoque = await fetch("https://api-microerp.herokuapp.com/api/Produtos/");
        let reqestoque = await estoque.json();
        this.$store.state.produtos = reqestoque;
        console.log();
    },
    methods: {
        async updateVenda(cadastro, $event) {
            console.log('Ola')
            console.log($event.target.form[0][$event.target.form[0].options.selectedIndex].__vnode.props["data-idcliente"])
            const atualiza = {
                "cliente": $event.target.form[0][$event.target.form[0].options.selectedIndex].__vnode.props["data-idcliente"],
                "estoque": {
                    "produto": $event.target.form[1][$event.target.form[1].options.selectedIndex].__vnode.props["data-idproduto"],
                    "quantidade": Math.abs(cadastro.quantidade),
                    "valor": cadastro.valor
                }
            };
            console.log(atualiza);
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(atualiza)
            };
            const response = await fetch("https://api-microerp.herokuapp.com/api/Vendas/" + cadastro.id + "/", requestOptions);
            console.log(response);
            const data = await response.json();
            console.log(data);
        },
        
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
    },
  
}
  
</script>

<style scoped>



</style>