'use client'

import { Header } from '@/app/components/Header'
import styles from './style.module.scss'
import { Containerproducts } from '@/app/components/ContainerProducts'


export function Catalogo(){

    return(
        <>
        <Header />
        <Containerproducts />
        </>
    )
}