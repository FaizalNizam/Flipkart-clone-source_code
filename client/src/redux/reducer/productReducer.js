import * as actionType from '../constant/productConstant'

//Reducer functioon for all products
export const getProductsReducer=(state={products:[]},action)=>{
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
            
        case actionType.GET_PRODUCTS_FAIL:
            return {products:action.payload}
    
        default:
            return state
    }

}

//Reducer function for selected product
export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return {product:action.payload}

        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return {product:action.payload}
            
        default:
            return state    
    }

}
