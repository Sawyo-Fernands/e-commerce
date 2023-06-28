"use client";
import { useContext } from "react";
import styles from "./styles.module.scss";
import { ProductContext } from "@/context/useProductContext";
import { useGetProduct } from "@/hooks/useGetProduct";
import { MdArrowCircleLeft } from "react-icons/md";
import Link from "next/link";

export function ContainerProductPage() {
  const { productId } = useContext(ProductContext);
  const { produto } = useGetProduct(productId,'description');

  return (
    <main className={styles.containerMain}>
      <section>
        <div className={styles.containerReturn}>
          <Link href={"/"} style={{textDecoration:"none"}}>
            <div>
              <MdArrowCircleLeft size={18} color="#41414D" />
              <span>Voltar</span>
            </div>
          </Link>
        </div>
        <div className={styles.containerProduc}>
          <div className={styles.containerImage}>
            <img src={produto.image_url} alt={produto.name} />
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
