import { Vertex } from "./Vertex";

export class Edge {
    public start: Vertex;
    public end: Vertex;
    public weight: number;

    public constructor(start: Vertex, end: Vertex, weight: number) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }

    public getLength(): number {
        const dx = this.end.pos.x - this.start.pos.x;
        const dy = this.end.pos.y - this.start.pos.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}