import { useState } from "react";
import { useQuery } from "react-query";
import { apiAxios } from "../services/api";



export function useProducts(){

    function getDataProducts(){
        apiAxios.get('/', {
            params: {
              query: `
                query {
                  allProducts {
                    id
                    name
                    price_in_cents
                    image_url
                  }
                }
              `
            }
          })
    }

    const {isLoading,isError,data :listaProdutos} = useQuery(['listaProdutos',{}],getDataProducts,{})
    
    return { isLoading, isError, listaProdutos }

}