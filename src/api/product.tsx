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