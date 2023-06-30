

export function getFiltro(filtro : {sortField:string,sortOrder:string,filter:string},anotherFilter:string){

    const schema = `
    query {
      allProducts(sortField: "${filtro.sortField}", sortOrder: "${filtro.sortOrder}" ${filtro.filter ? `,filter: {${filtro.filter}}`: ''}){
        id
        name
        price_in_cents
        image_url
        category
        ${anotherFilter ? anotherFilter : ''}
      }
    }`

    return schema
}