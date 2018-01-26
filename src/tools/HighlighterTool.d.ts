import { IStrokePart } from "../types";
export declare class HighlighterTool {
    readonly color: string;
    readonly width: number;
    constructor(color?: string, width?: number, opacity?: Number);
    /**
     * Draws a "highlighter stroke" for all line segments
     * @param ctx
     * @param strokePart
     */
    draw(ctx: CanvasRenderingContext2D, strokePart: IStrokePart): void;
}