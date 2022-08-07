
<template>
  <div>
    <div class="grid">
      <div class="one menu">
        <nav class="wrap">
          <div>
            <RouterLink  to="/" title="Home">
              <i class="fa-solid fa-house-user icons" />              
            </RouterLink>
            <RouterLink to="/dashboard">
              <i class="fa-solid fa-chart-pie icons" />     
            </RouterLink>
            <RouterLink to="/fornecedor">
              <i class="fa-solid fa-people-carry-box icons"/>         
            </RouterLink>
            <RouterLink to="/clientes">
              <i class="fa-solid fa-users icons"/>          
            </RouterLink>           
            <RouterLink to="/produtos">
              <i class="fa-solid fa-box-open icons"/>    
            </RouterLink>
            <RouterLink to="/compras">
              <i class="fa-solid fa-basket-shopping icons" />      
            </RouterLink>
            <RouterLink to="/vendas">
              <i class="fa-solid fa-cart-arrow-down icons"/>    
            </RouterLink>
            <RouterLink to="/contas">
              <i class="fa-solid fa-money-bill-transfer icons"/>         
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/about">
              <i class="fa-solid fa-arrow-right-from-bracket icons"/>
            </RouterLink>
          </div>
        </nav>
      </div>
      <div class="two">
        <RouterView />
      </div>
    </div>
  </div>

</template>

 <script>

export default{
  data(){
    return{

    }
  },
  methods:{


    }, 
 
  }

</script>


<style scoped>

*, *::before, *::after {
  box-sizing:content-box
}

.router-link-active > i{
  padding: 10px ;
  margin: 0px;

  color: #F09D05;
  background-color: #e3e4e9;
  border-radius: 10px 0px 0px 10px;
        
}

.menu{
  padding-top: 10px;
}
.linha-menu{
  margin: 5px;
  width: 25px;
  border-bottom:2px solid #e3e4e9  ;


}
.icons{
  
  padding: 7px ;
  margin: 3px;
  color: #e3e4e9;
  height: 20px;
  width: 20px;
  justify-content:center;
  align-items:center;
  font-size: 16px;
  
}
@media (min-width: 768px){
.icons:hover{
  padding: 10px ;
  margin: 0px;
  color: #203764;
  background-color: #e3e4e9;
  border-radius: 10px 0px 0px 10px;      
}
}

.wrap{
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  

}
.grid{
  display: grid;
  height: 100vh;
  grid-template-columns: 0.25fr 9.75fr;
  grid-template-areas:
		"one two"
		;
}
.one{
 background-color: #203764;
 grid-area: one ;
  
}
.two{

  background-color: #e3e4e9;
  grid-area: two;

}

</style>