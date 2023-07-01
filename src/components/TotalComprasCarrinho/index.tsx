'use client'
import Link from "next/link";
import styles from "./styles.module.scss";
import { ProductCarrinhoContext } from "@/context/useProductsCarrinho";
import { useContext } from "react";
import { formatPrice } from "@/utils/formatCurrency";

export function TotalComprasCarrinho() {

  const { products } = useContext(ProductCarrinhoContext)

  function returnTotalCarrinho(frete?:number){
      const total = products.reduce((acc:number,product:{price_in_cents:number})=>{
          acc += product.price_in_cents

          return acc
      },0)

      return  frete ? formatPrice(total+frete) : formatPrice(total)
  }

  return (
    <div className={styles.containerContent}>
      <div className={styles.containerTitle}>
        <h2>Resumo do pedido</h2>
      </div>
      <div className={styles.containerInfosTotais}>
        <div className={styles.totals}>
          <span>Subtotal de Produtos</span>
          <span>{returnTotalCarrinho()}</span>
        </div>
        <div className={styles.totals}>
          <span>Entrega</span>
          <span>{returnTotalCarrinho(4000)}</span>
        </div>

        <div className={styles.line}></div>
        <div className={styles.totalsSoma}>
          <span>Total</span>
          <span>{products.length > 0 ? returnTotalCarrinho(4000) : 'R$ 0,00'}</span>
        </div>
        <div className={styles.containerButton}>
          <button>Finalizar a compra</button>
        </div>
        <div className={styles.moreInfos}>
          <Link href={"/"} style={{ color: "#41414D" }}>
            <span>Ajuda</span>
          </Link>
          <Link href={"/"} style={{ color: "#41414D" }}>
            <span>Reembolsos</span>
          </Link>
          <Link href={"/"} style={{ color: "#41414D" }}>
            <span>Entrega em fretes</span>
          </Link>
          <Link href={"/"} style={{ color: "#41414D" }}>
            <span>trocas e devoluções</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
