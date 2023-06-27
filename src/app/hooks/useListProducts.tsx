import { useState } from "react";
import { useQuery } from "react-query";
import { apiAxios } from "../services/api";

type Produto = {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string
}


export function useProducts(){

    function getDataProducts(){
        return apiAxios.get('/', {
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
          }).then(response => response.data);
    }

    const {isLoading,isError,data } = useQuery<any>(['listaProdutos',{}],getDataProducts,{})
    const listaProdutos: Produto[] = data?.data?.allProducts ?? [];
    return { isLoading, isError, listaProdutos }

}