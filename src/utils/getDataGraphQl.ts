import { apiAxios } from "@/services/api";
import { getFiltro } from "./setSchemaGraphQl";
import { QueryFunction, QueryKey } from "react-query";

type elementosFiltro = {
    sortField:string,sortOrder:string,filter:string
}

export  async function getDataProducts(filtro?: elementosFiltro,anotherParams?:string)  : Promise<any>{
    return await apiAxios.get('/', {
        params: {
          query: getFiltro(filtro  as elementosFiltro,anotherParams ?? '')
        }
      })

}