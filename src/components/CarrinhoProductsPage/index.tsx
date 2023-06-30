"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { MdArrowCircleLeft } from "react-icons/md";
import { useContext } from "react";
import { ProductCarrinhoContext } from "@/context/useProductsCarrinho";
import { ProdutoCarrinho } from "../ProdutoCarrinho";

export function CarrinhoComponent() {

    const { products } = useContext(ProductCarrinhoContext)

  return (
    <main className={styles.containerMainCarrinho}>
      <div className={styles.containerListProdutos}>
        <div className={styles.containerReturn}>
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <div>
              <MdArrowCircleLeft size={18} color="#41414D" />
              <span>Voltar</span>
            </div>
          </Link>
        </div>
        <div className={styles.listProdutos}>
            {
                products.map((produto) => (
                    <ProdutoCarrinho 
                    key={produto.id}
                    description={produto.description}
                    img={produto.image_url}
                    name={produto.name}
                    price={produto.price_in_cents}
                    />
                ))
            }
        </div>
      </div>
      <div className={styles.containerInfosPagamento}></div>
    </main>
  );
}
