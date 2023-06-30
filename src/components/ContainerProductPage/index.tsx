"use client";
import { useContext } from "react";
import styles from "./styles.module.scss";
import { useGetProduct } from "@/hooks/useGetProduct";
import { MdArrowCircleLeft } from "react-icons/md";
import Link from "next/link";
import { formatPrice } from "@/utils/formatCurrency";
import { ProductCarrinhoContext } from "@/context/useProductsCarrinho";
import { ToastContainer, toast } from "react-toastify";

export function ContainerProductPage({idProduto}:{idProduto:string}) {
  const { products, setProducts } = useContext(ProductCarrinhoContext)
  const { produto } = useGetProduct(idProduto,'description');
 

  function returnCategory(category:string){
    const categorys : { [key:string] : string} = {
      mugs:'Canecas',
    't-shirts': 'Camisas'
    }
    return categorys[category] ?? null
  }
  function adicionarItemCarrinho(){
    return products.find(element => element.id == produto.id) ?  toast.info("Produto já adicionado ao carrinho!") :  setProducts([...products,produto])
  }
  

  return (
    <>
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      />
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
          <div className={styles.containerInfos}>
            <div className={styles.containerCategory}>
                <span>{returnCategory(produto.category)}</span>
            </div>
            <div className={styles.containerNameProduct}>
              <h1>{produto.name}</h1>
              <div className={styles.containerPriceProduct}>
                <h4>{formatPrice(produto.price_in_cents)}</h4>
              </div>
            </div>
            <div className={styles.containerInfoGeral}>
                <span>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>
            </div>
            <div className={styles.containerDescricao}>
                <h4>Descrição</h4>
                {/* Repetir duas vezes para ter mais texto para preencher o layout */}
                <p>{produto.description}{produto.description}</p>
            </div>
            <div className={styles.containerAddProduct}>
                <button onClick={adicionarItemCarrinho}>  <img src="loja.svg" alt="" style={{color:"white"}} /> Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
   
  );
}
