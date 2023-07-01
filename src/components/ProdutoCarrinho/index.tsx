import { formatPrice } from '@/utils/formatCurrency';
import styles from './styles.module.scss'
import {FaTrashAlt} from 'react-icons/fa'
import { useContext, useState } from 'react';
import { ProductCarrinhoContext } from '@/context/useProductsCarrinho';
interface ProdutoCarrinhoProps{
    img:string;
    description:string;
    name:string;
    price:number;
    id:string;
}

export function ProdutoCarrinho({img,description,name,price,id}:ProdutoCarrinhoProps){

    const { products,setProducts } = useContext(ProductCarrinhoContext)

    const [quantidade,setQuantidade] = useState(1)

    function handleRemoveProduct(){
        setProducts(products.filter((product) => product.id !== id))
    }

    const TextoComLimite = ({ texto, limite }:{texto:string,limite:number}) => {
        const textoTruncado = texto.slice(0, limite) + '...';
      
        return textoTruncado;
    };

    return(
        <div className={styles.containerProduto}>
            <div className={styles.containerImage}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.containerDescriptionProduct}>
                <div style={{width:"95%",margin:"auto"}}>
                <div className={styles.containerHeaderproduct}>
                <h4>{name}</h4>
                <FaTrashAlt size={21} color='#CD1818' onClick={handleRemoveProduct} style={{cursor:'pointer'}} />
                </div>
                <div>
                <span className={styles.description}>
                    {TextoComLimite({texto:description,limite:250})}
                </span>
                </div>
                <div className={styles.containerSelect}>
                <select name="select" onChange={(e)=>setQuantidade(Number(e.target.value))} className={styles.select}>
                <option value="1" selected>1</option>
                <option value="2" >2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
                </select>
                </div>
                <div className={styles.containerPrice}>
                    <span>{formatPrice(price)}</span>
                </div>
                </div>
            </div>
        </div>
    )
}