'use client'

import { useState } from "react";
import { useQuery } from "react-query";
import { apiAxios } from "../services/api";
import { getFiltro } from "@/utils/setSchemaGraphQl";
import { getDataProducts } from "@/utils/getDataGraphQl";

type Produto = {
  id: string;
  name: string;
  price_in_cents: number;
  image_url: string;
  category: string;
};

export function useProducts() {
  const [filtro, setFiltro] = useState({
    sortField: "",
    sortOrder: "",
    filter: "",
  });

  const { isLoading, isError, data, refetch } = useQuery<any>(
    ["listaProdutos", getFiltro(filtro, "")],
    async () => await getDataProducts(filtro),
    {}
  );

  const listaProdutos: Produto[] = data?.data?.data.allProducts ?? [];
  return { isLoading, isError, listaProdutos, setFiltro };
}
