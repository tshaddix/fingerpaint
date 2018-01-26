import { IStrokePart } from "../types";
export interface IHandleOptions {
    hide: boolean;
    strokeWidth: number;
    fillColor: string;
    strokeColor: string;
}
export declare class EraserTool {
    readonly width: number;
    readonly handleOpts: IHandleOptions;
    private lastEndPoint;
    constructor(width?: number, handleOpts?: Partial<IHandleOptions>);
    /**
     * Get the distance between two points
     * @param p1
     * @param p2
     * @returns number
     */
    private getEuclidean(p1, p2);
    /**
     * Draws an "eraser stroke" for all line segments
     * @param ctx
     * @param strokePart
     */
    draw(ctx: CanvasRenderingContext2D, strokePart: IStrokePart): void;
}
