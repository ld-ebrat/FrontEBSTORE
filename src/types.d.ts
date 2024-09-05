export type Props = {
    path:string,
    body?: Record<string,unknown>,
    header?: string
}

export type FetchResponse<T> = Promise<T>

export interface Info {
    urlImg: string
    name: string,
    price: number,
    discount: string,
    discountRate: number
}

export type InfoInput ={
    typeInput: string,
    content: string,
    infoLabel
}