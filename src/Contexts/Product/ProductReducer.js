import {
    GET_PRODUCT_CATEGORIES,
    GET_EDIT_PRODUCT_CATEGORY,
    GET_ONE_PRODUCT_CATEGORY,
    CREATE_PRODUCT_CATEGORIES,
    GET_PRODUCTS,
    PRODUCT_REMOVE,
    PRODUCT_EDITE,
    SET_LOADING_TRUE,
    GET_UPDATE_PRODUCT_CATEGORY,
    DELETE_PRODUCT_CATEGORY
} from '../types'

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCT_CATEGORIES:
            return {...state, productCategories: action.payload}

        case CREATE_PRODUCT_CATEGORIES:
            let newCats = [...state.productCategories, action.payload]
            return {...state, productCategories: newCats}

        case GET_EDIT_PRODUCT_CATEGORY:
            return {...state, singleProductCategory: action.payload};

        case GET_UPDATE_PRODUCT_CATEGORY:
            let selectedCatIndex = state.productCategories.findIndex(cat => cat.id === action.payload.id);
            let newProductCategories = [...state.productCategories];

            newProductCategories[selectedCatIndex] = action.payload;
            return {...state, productCategories: newProductCategories};

        case DELETE_PRODUCT_CATEGORY:
            let id = action.payload.id;
            return {...state, productCategories: state.productCategories.filter(cat => cat.id !== id)};

        default:
            return state;
    }
}