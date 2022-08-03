import { createStore } from "vuex";
import cart from "@/store/cart";
import ingredient from "@/store/ingredient";
import product from "@/store/product";
import userChooseProd from "@/store/userChooseProd";

export default createStore({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules: {
        cart,
        ingredient,
        product,
        userChooseProd,
    }
})

