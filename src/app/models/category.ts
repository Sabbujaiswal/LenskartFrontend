import { Frame } from "./frame";

export interface Category {
    categoryId: number;
    categoryName: string;
    material: string;
    frames: Set<Frame>;

}
