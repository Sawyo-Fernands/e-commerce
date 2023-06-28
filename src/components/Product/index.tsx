import { formatPrice } from "@/utils/formatCurrency";
import styles from "./styles.module.scss";
import Link from "next/link";

interface ProductProps {
  imgSrc: string;
  name: string;
  price: number;
}

export function Product({ imgSrc, name, price }: ProductProps) {

  return (
   <Link href={'/Product'}>
    <div className={styles.containerCard}>
      <img src={imgSrc} alt={name} />
      <div className={styles.containerInfos}>
        <div className={styles.containerText}>
          <span className={styles.name}>{name}</span>
        </div>

        <div className={styles.line}></div>

        <div className={styles.containerText}>
          <span className={styles.price}>{formatPrice(price)}</span>
        </div>
      </div>
    </div>
   </Link>
  );
}
