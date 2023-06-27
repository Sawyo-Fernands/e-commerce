import styles from "./styles.module.scss";

interface ProductProps {
  imgSrc: string;
  name: string;
  price: number;
}

export function Product({ imgSrc, name, price }: ProductProps) {

    function formatCurrent(valor:number){
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
    }

  return (
    <div className={styles.containerCard}>
      <img src={imgSrc} alt={name} />
      <div className={styles.containerInfos}>
        <div className={styles.containerText}>
          <span className={styles.name}>{name}</span>
        </div>

        <div className={styles.line}></div>

        <div className={styles.containerText}>
          <span className={styles.price}>{formatCurrent(price)}</span>
        </div>
      </div>
    </div>
  );
}
