export type Product = {
    id?:string,
    title?: string,
    handle?: string,
    price?: string,
    imageSrc?: string,
    productType?: string,
    quantity?: number 
}
export type Products = Array<Product> | [];

export type TagType = {
    name:string,
    color:string
}

export type LocalStorage = string | null | undefined;
