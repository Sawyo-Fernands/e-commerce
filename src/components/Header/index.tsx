'use client'

import {MdSearch} from 'react-icons/md'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { ProductCarrinhoContext } from '@/context/useProductsCarrinho';

interface HeaderProps{
    filtroCatalogo?:string;
    setFiltroCatalogo?:(value:string) => void;
}

export function Header({filtroCatalogo,setFiltroCatalogo}:HeaderProps){

    const router = useRouter()
    const { products } = useContext(ProductCarrinhoContext)


    return(
        <header className={styles.containerHeader}>
            <nav className={styles.containerNav}>
                <div className={styles.containerLogo}>
                    <img src="capputeeno.svg" alt="" />
                </div>
                <div className={styles.containerFiltro}>
                    <div className={styles.filtro}>
                        <input type="text" placeholder='Procurando por algo específico?'
                         value={filtroCatalogo}
                         onChange={(e)=>setFiltroCatalogo?.(e.target.value)} />
                        <MdSearch size={18} />
                    </div>
                    <div className={styles.containerIconeCarrinho}>
                        {products.length > 0 && <div className={styles.containerNumberCarrinho}><span>{products.length  ?? '' }</span></div>}
                        <img src="shopping-bag.svg" alt="" onClick={()=>router.push('/Carrinho')} />
                    </div>
                </div>
            </nav>
        </header>
    )
}