import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import axios from "axios";
import {ProductReducer} from "./ProductReducer";
import {
    CREATE_PRODUCT_CATEGORIES,
    GET_EDIT_PRODUCT_CATEGORY,
    GET_UPDATE_PRODUCT_CATEGORY,
    GET_ONE_PRODUCT_CATEGORY,
    GET_PRODUCT_CATEGORIES,
    DELETE_PRODUCT_CATEGORY
} from "../types";
import {json, useNavigate} from "react-router-dom";

const ProductState = createContext();

const initialState = {
    products: [],
    productCategories: [],
    singleProductCategory: {},
    loading: false
}

export const ProductContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const navigate = useNavigate();

    const getProductCategories = async () => {
        const {data} = await axios.get(`http://localhost:3001/productCategories`)

        dispatch({type: GET_PRODUCT_CATEGORIES, payload: data});
    }


    const handleCreateCategory = async (catData) => {

        const res = await axios.post('http://localhost:3001/productCategories', catData)
            .then(function (response) {
                // console.log(response);
                return response
            }).catch(function (error) {
                console.log(error);
            });

        if (res.status >= 200 || res.status < 300) {
            const {data} = res

            dispatch({type: CREATE_PRODUCT_CATEGORIES, payload: data});
            navigate('/market/category')
        }

    }

    // const getOneProductCategory = async (catId) => {
    //     const {data} = await axios.get(`http://localhost:3001/productCategories/1`)
    //
    //     dispatch({type: GET_ONE_PRODUCT_CATEGORY, payload: data});
    // }

    const handleEditProductCategory = (cat) => {
        dispatch({type: GET_EDIT_PRODUCT_CATEGORY, payload: cat});
    }

    const handleUpdateProductCategory = async (catData) => {
      //  console.log(catData)
        const res = await axios.put(`http://localhost:3001/productCategories/${catData.id}`, catData)
            .then((response) => {
                // console.log(response);
                return response
            }).catch(function (error) {
                console.log(error);
            });

        if (res.status >= 200 || res.status < 300) {
            const {data} = res
            dispatch({type: GET_UPDATE_PRODUCT_CATEGORY, payload: data});
            navigate('/market/category')
        }
    }

    const productCategoryRemove = async cat => {
        const res = await axios.delete(`http://localhost:3001/productCategories/${cat.id}`)
        if (res.status === 200) {
            dispatch({ type: DELETE_PRODUCT_CATEGORY, payload: cat })
        }
    }


    useEffect(() => {
        getProductCategories();
    }, []);

    return (
        <ProductState.Provider
            value={{
                ...state,
                handleCreateCategory,
                handleEditProductCategory,
                handleUpdateProductCategory,
                productCategoryRemove
            }}
        >
            {children}
        </ProductState.Provider>
    )
}

export const useProductStateContext = () => useContext(ProductState);