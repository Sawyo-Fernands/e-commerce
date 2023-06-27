import { useProducts } from "@/app/hooks/useListProducts";
import { Product } from "../Product";
import styles from './styles.module.scss'

export function Containerproducts(){

    const {listaProdutos} = useProducts()

    return(
        <section className={styles.containerProducts}>
           {
            listaProdutos.map((element) =>(
                <Product 
                key={element.id} 
                imgSrc={element.image_url} 
                name={element.name}
                 price={element.price_in_cents}
                  />
            ))
           }     
        </section>
    )
}