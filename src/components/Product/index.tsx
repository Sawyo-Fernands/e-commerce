'use client'

import { formatPrice } from "@/utils/formatCurrency";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "@/context/useProductContext";

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

  const { setProductId } = useContext(ProductContext)

  return (
   <Link href={'/Product'} style={{textDecoration:"none"}}>
    <div className={styles.containerCard} onClick={()=>setProductId(props.id)}>
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
