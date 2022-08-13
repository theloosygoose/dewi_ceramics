export type Product = {
    id:string,
    title: string,
    handle: string,
    price: string,
    imageSrc: string,
    productType?: string
}
export type Products = [Product]

export type TagType = {
    name:string,
    color:string
}
