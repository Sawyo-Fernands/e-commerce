'use client'

import { formatPrice } from "@/utils/formatCurrency";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from 'next/navigation'

interface ProductProps {
  imgSrc: string;
  name: string;
  price: number;
  props:product
}

type product = {
  id:string,
  name:string,
  price_in_cents:number,
  image_url:string,
  category:string,
}

export function Product({ imgSrc, name, price,props }: ProductProps) {

  const router = useRouter()

  return (
    <div title={`${props.category} - ${name}`} className={styles.containerCard} onClick={()=>{
      router.push("/product?id=" + props.id)
      }}>
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

  );
}
