import { Brand } from "./brand";
import { Category } from "./category";
import { Lens } from "./lens";
import { Shopby } from "./shopby";

export interface Frame {
    frameId: number;
    name: string;
    frameSize: string;
    color: string;
    shopby: string;
    price: number;
    lens: Lens;
    rating: number;
    brand: Brand;
    frameImg: string;
    categories: Set<Category>;


}
