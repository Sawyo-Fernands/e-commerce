'use client'

import {MdSearch} from 'react-icons/md'
import styles from './styles.module.scss'

export function Header(){

    return(
        <header className={styles.containerHeader}>
            <nav className={styles.containerNav}>
                <div className={styles.containerLogo}>
                    <img src="capputeeno.svg" alt="" />
                </div>
                <div className={styles.containerFiltro}>
                    <div className={styles.filtro}>
                        <input type="text" placeholder='Procurando por algo específico?' />
                        <MdSearch size={18} />
                    </div>
                    <div className={styles.containerIconeCarrinho}>
                        <img src="shopping-bag.svg" alt="" />
                    </div>
                </div>
            </nav>
        </header>
    )
}