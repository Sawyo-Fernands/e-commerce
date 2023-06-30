import { formatPrice } from '@/utils/formatCurrency';
import styles from './styles.module.scss'
import {FaTrashAlt} from 'react-icons/fa'
interface ProdutoCarrinhoProps{
    img:string;
    description:string;
    name:string;
    price:number;
}

export function ProdutoCarrinho({img,description,name,price}:ProdutoCarrinhoProps){

    return(
        <div className={styles.containerProduto}>
            <div className={styles.containerImage}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.containerDescriptionProduct}>
                <div style={{width:"95%",margin:"auto"}}>
                <div className={styles.containerHeaderproduct}>
                <h4>{name}</h4>
                <FaTrashAlt size={21} color='#CD1818' />
                </div>
                <div>
                <span className={styles.description}>
                    {description}
                </span>
                </div>
                <div className={styles.containerSelect}>
                <select name="select" className={styles.select}>
                <option value="1">1</option>
                <option value="2" selected>2</option>
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