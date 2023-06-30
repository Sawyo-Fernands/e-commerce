import { Product } from "../Product";
import styles from "./styles.module.scss";
import { Suspense,useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/ReactContexify.css";
import { useProducts } from "@/hooks/useListProducts";
import Loading from "@/app/loading";

const MENU_ID = "menuContextOrdem";
interface ContainerInputsProps {
  filtroCatalogo: string;
}
type Produto = {
  id: string;
  name: string;
  price_in_cents: number;
  image_url: string;
  category: string;
};
export function Containerproducts({ filtroCatalogo }: ContainerInputsProps) {
  const { listaProdutos, setFiltro,isLoading } = useProducts();
  const [category, setCategory] = useState("");

  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    show({
      event,
      props: {
        key: "value",
      },
    });
  }

  const handleItemClick = ({ id, event, props }: any) => {
    switch (id) {
      case "maior":
        setFiltro({
          filter: "",
          sortField: "prices_in_cents",
          sortOrder: "DSC",
        });
        break;
      case "menor":
        setFiltro({
          filter: "",
          sortField: "prices_in_cents",
          sortOrder: "ASC",
        });
        break;
      case "vendidos":
        setFiltro({
          filter: "",
          sortField: "sales",
          sortOrder: "DSC",
        });
        break;
      case "novidades":
        setFiltro({
          filter: "",
          sortField: "",
          sortOrder: "",
        });
        break;
    }
  };

  const produtosSearch: Produto[] = listaProdutos
    .filter((produto) =>
      filtroCatalogo
        ? produto.name.toLowerCase().includes(filtroCatalogo.toLowerCase())
        : produto
    )
    .reduce((acc: any, element: Produto) => {
      if (!category) {
        acc.push(element);
        return acc;
      }
      if (element.category == category) {
        acc.push(element);
      }
      return acc;
    }, []);

  function returnStyleCategory(activeCategory: string) {
    return category == activeCategory ? styles.activeCategory : styles.category;
  }

  return (
    <main className={styles.containerMain}>
      <section className={styles.containerFilters}>
        <div className={styles.containerCategory}>
          <div
            className={returnStyleCategory("")}
            onClick={() => setCategory("")}
          >
            <span>Todos os Produtos</span>
          </div>
          <div
            className={returnStyleCategory("t-shirts")}
            onClick={() => setCategory("t-shirts")}
          >
            <span>Camisas</span>
          </div>
          <div
            className={returnStyleCategory("mugs")}
            onClick={() => setCategory("mugs")}
          >
            <span>Canecas</span>
          </div>
        </div>
        <div className={styles.containerSelect} onClick={handleContextMenu}>
          <span>Organizar Por</span>
          <MdOutlineKeyboardArrowDown size={18} />
        </div>
        <Menu id={MENU_ID}>
          <Item id="vendidos" onClick={handleItemClick}>
            Mais Vendidos
          </Item>
          <Item id="maior" onClick={handleItemClick}>
            Preço: Maior - menor
          </Item>
          <Item id="menor" onClick={handleItemClick}>
            Preço: Menor - maior
          </Item>
          <Item id="novidades" onClick={handleItemClick}>
            Novidades
          </Item>
        </Menu>
      </section>
      
        <section className={styles.containerProducts}>
          {
            isLoading && <Loading />
          }
          {produtosSearch.map((element) => (
            <Product
              key={element.id}
              imgSrc={element.image_url}
              name={element.name}
              price={element.price_in_cents}
              props={element}
            />
          ))}
        </section>
      
    </main>
  );
}
