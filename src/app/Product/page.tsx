'use client'

import { ContainerProductPage } from "@/components/ContainerProductPage"
import { Header } from "@/components/Header"

export default function  ProductPage({ searchParams }: { searchParams: { id: string }}){
    const idProduto = searchParams?.id ?? ''
    return(
        <>
          <Header />
          <ContainerProductPage idProduto={idProduto} />
        </>
    )
}