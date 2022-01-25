import { Shape } from "./shape";
import { Type } from "./type";

export interface Brand {
    brandId: number;
    shape: Shape;
    type: Type;
    brandName: string;
}
