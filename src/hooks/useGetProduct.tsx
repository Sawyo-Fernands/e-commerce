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

export function useGetProduct(id: string,anotherParams:string) {
  const filtro = {
    sortField: "",
    sortOrder: "",
    filter: `id: "${id}"`,
  };

  const filtroReturn = getFiltro(filtro, anotherParams)
  const { isLoading, isError, data, refetch } = useQuery<any>(
    ["listaProduto", filtroReturn],
    async () => await getDataProducts(filtro,anotherParams),
    {}
  );

  const produto: Produto = data?.data?.data.allProducts[0] ?? [];
  return { isLoading, isError, produto };
}
