'use client'

import { Header } from '@/components/Header'
import styles from './style.module.scss'
import { useState } from 'react'
import { Containerproducts } from '@/components/ContainerProducts'


export function Catalogo(){

    const [filtroCatalogo,setFiltroCatalogo] = useState('')

    return(
        <>
        <Header filtroCatalogo={filtroCatalogo} setFiltroCatalogo={setFiltroCatalogo} />
        <Containerproducts filtroCatalogo={filtroCatalogo} />
        </>
    )
}