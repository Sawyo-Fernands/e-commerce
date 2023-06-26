import { useProducts } from "@/app/hooks/useListProducts";
import { Product } from "../Product";
import styles from './styles.module.scss'

export function Containerproducts(){

    const {listaProdutos,isLoading,isError} = useProducts()
    return(
        <section className={styles.containerProducts}>
            <Product />
            <Product />
            <Product />
            <Product />
        </section>
    )
}