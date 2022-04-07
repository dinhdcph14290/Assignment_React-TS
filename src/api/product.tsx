import { ProductType } from "../types/product";
import root from './root';

export const list = () => {
    const url = '/products';
    return root.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return root.delete(url);
}
export const add = (product : ProductType) => {
    const url = `/products`;
    return root.post(url, product)
}
export const update = (product: ProductType) => {
    const url = `/products/${product._id}`;
    return root.put(url, product)
}
export const read = (id: number) => {
    const url = `/products/${id}`;
    return root.get(url)
}