import { useProducts } from "@/app/hooks/useListProducts";
import { Product } from "../Product";
import styles from './styles.module.scss'
interface ContainerInputsProps{
    filtroCatalogo:string;
}

export function Containerproducts({filtroCatalogo}:ContainerInputsProps){

    const {listaProdutos} = useProducts()

    const produtosSearch = listaProdutos.filter((produto) =>  filtroCatalogo ? produto.name.toLowerCase().includes(filtroCatalogo.toLowerCase()) : produto)

    return(
        <section className={styles.containerProducts}>
           {
            produtosSearch.map((element) =>(
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