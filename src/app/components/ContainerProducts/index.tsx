import { useProducts } from "@/app/hooks/useListProducts";
import { Product } from "../Product";
import styles from './styles.module.scss'
import { useState } from "react";
interface ContainerInputsProps{
    filtroCatalogo:string;
}
type Produto = {
    id: string,
    name: string,
    price_in_cents: number,
    image_url: string,
    category:string,
  }
export function Containerproducts({filtroCatalogo}:ContainerInputsProps){

    const {listaProdutos} = useProducts()
    const [category,setCategory] = useState('')

    const produtosSearch : Produto [] = listaProdutos.
    filter((produto) =>  filtroCatalogo ? produto.name.toLowerCase().includes(filtroCatalogo.toLowerCase()) : produto)
    .reduce((acc:any,element:Produto)=>{
        if(!category){
            acc.push(element)
            return acc
        }
        if(element.category == category){
            acc.push(element)
        }
        return acc
    },[])

    function returnStyleCategory(activeCategory:string){
        return category == activeCategory ? styles.activeCategory : styles.category
    }

    return(
       <main className={styles.containerMain}>
       <section className={styles.containerFilters}>
            <div className={styles.containerCategory}>
                <div className={returnStyleCategory('')} onClick={()=>setCategory("")}>
                    <span>Todos os Produtos</span>
                </div>
                <div className={returnStyleCategory('t-shirts')} onClick={()=>setCategory("t-shirts")}>
                <span>Camisas</span>
                </div>
                <div className={returnStyleCategory('mugs')} onClick={()=>setCategory("mugs")}>
                <span>Canecas</span>
                </div>
            </div>
            <div>

            </div>
       </section>
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
       </main>
    )
}