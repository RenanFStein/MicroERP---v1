import { def } from '@vue/shared'
import { createStore } from 'vuex'

const store =  createStore({
  state: {
    compras: {},
    editarCompras: {
        fornecedor: "",
        estoque: {
          produto: "",
          quantidade: "",
          valor: ""
        }
      },
    cadastroCompras: {
        fornecedor: "",
        estoque: {
          produto: "",
          quantidade: "",
          valor: ""
        }
      },
      fornecedores: {},
      produtos: {},
  
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
})

export default store;