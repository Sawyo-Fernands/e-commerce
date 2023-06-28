import { useState } from "react";
import { useQuery } from "react-query";
import { apiAxios } from "../services/api";

type Produto = {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string,
  category:string,
  sales:number
}


export function useProducts(){

  const [filtro,setFiltro] = useState("padrao")

  function getFiltro(){
      const tipoFiltro : {[key:string] : string} = {
        padrao: `
        query {
          allProducts {
            id
            name
            price_in_cents
            image_url
            category
            sales
          }
        }
      `,
      maiorValor:`
      query {
        allProducts(sortField:"prices_in_cents",sortOrder:"DSC"){
          id
          name
          price_in_cents
          image_url
          category
          sales
        }
      }
    `,
    menorValor:`
    query {
      allProducts(sortField:"prices_in_cents",sortOrder:"ASC"){
        id
        name
        price_in_cents
        image_url
        category
        sales
      }
    }
  `,maisVendidos:`
  query {
    allProducts(sortField:"sales",sortOrder:"DSC"){
      id
      name
      price_in_cents
      image_url
      category
      sales
    }
  }
`
      }

      return tipoFiltro[filtro] ?? null
  }

    function getDataProducts(){
        return apiAxios.get('/', {
            params: {
              query: getFiltro()
            }
          }).then(response => response.data);
    }
    console.log(getFiltro())
    const {isLoading,isError,data,refetch } = useQuery<any>(['listaProdutos',getFiltro()],getDataProducts,{})
    const listaProdutos: Produto[] = data?.data?.allProducts ?? [];
    return { isLoading, isError, listaProdutos, setFiltro }

}