'use client'

import { ReactNode, createContext, useState } from "react";

interface productContextProps{
    productId:string,
    setProductId:(value:string) => void
}

export const ProductContext = createContext<productContextProps>({
    productId:'',
    setProductId:() => {}
}) 

interface ProductProviderProps{
    children:ReactNode
}


export function ProviderProduct({children}:ProductProviderProps){

    const [productId,setProductId] = useState('')

    return (
        <ProductContext.Provider value={{productId ,setProductId}}>
            {children}
        </ProductContext.Provider>
    )
}