
'use client'

import { ReactNode, createContext, useState } from "react";

interface productCarrinhoContextProps{
    products:Produto[],
    setProducts:(value:Produto[]) => void
}

type Produto = {
    id: string;
    name: string;
    price_in_cents: number;
    image_url: string;
    category: string;
    description:string
  };
export const ProductCarrinhoContext = createContext<productCarrinhoContextProps>({
    products:[],
    setProducts:() => {}
}) 

interface ProductProviderProps{
    children:ReactNode
}


export function ProviderProductCarrinho({children}:ProductProviderProps){

    const [products,setProducts] = useState<Produto[]>([])

    return (
        <ProductCarrinhoContext.Provider value={{products ,setProducts}}>
            {children}
        </ProductCarrinhoContext.Provider>
    )
}