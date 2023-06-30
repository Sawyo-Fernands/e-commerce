import Link from "next/link";
import styles from "./styles.module.scss";

export function TotalComprasCarrinho() {
  return (
    <div className={styles.containerContent}>
      <div className={styles.containerTitle}>
        <h2>Resumo do pedido</h2>
      </div>
      <div className={styles.containerInfosTotais}>
        <div className={styles.totals}>
          <span>Subtotal de Produtos</span>
          <span>R$ 1.200</span>
        </div>
        <div className={styles.totals}>
          <span>Entrega</span>
          <span>R$ 1.200</span>
        </div>

        <div className={styles.line}></div>
        <div className={styles.totalsSoma}>
          <span>Total</span>
          <span>R$ 1.200</span>
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
