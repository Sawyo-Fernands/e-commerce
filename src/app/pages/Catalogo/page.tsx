'use client'

import { Header } from '@/app/components/Header'
import styles from './style.module.scss'
import { Containerproducts } from '@/app/components/ContainerProducts'
import { useState } from 'react'


export function Catalogo(){

    const [filtroCatalogo,setFiltroCatalogo] = useState('')

    return(
        <>
        <Header filtroCatalogo={filtroCatalogo} setFiltroCatalogo={setFiltroCatalogo} />
        <Containerproducts filtroCatalogo={filtroCatalogo} />
        </>
    )
}