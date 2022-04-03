import { ProductType } from "../types/product";
import root from './root';

export const list = () => {
    const url = '/products';
    return root.get(url);
}