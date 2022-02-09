import { Brand } from "./brand";
import { Category } from "./category";
import { Lens } from "./lens";

export interface Frame {
    frameId: number;
    name: string;
    frameSize: string;
    color: string;
    gender: string;
    price: number;
    lens: Lens;
    rating: number;
    brand: Brand;
    frameImg: string;
    categories: Set<Category>;
}
