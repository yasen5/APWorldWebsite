import { getTemperature } from "./forces";
import { Vector2d } from "./vector2d";

export class Vertex {
    public pos: Vector2d;
    public displacement: Vector2d = new Vector2d();

    public constructor(pos: Vector2d | null = null, bboxSideLength: number | null = null) {
        if (pos) {
            this.pos = pos;
        } else if (bboxSideLength) {
            this.pos = new Vector2d();
            this.pos.randomize(bboxSideLength, bboxSideLength);
        } else {
            console.error("Did not provide a position or bounding box side length for Vertex constructor, using (0, 0)");
            this.pos = new Vector2d();
        }
    }

    public setPos(pos: Vector2d): void {
        this.pos = pos;
    }

    public setDisplacement(displacement: Vector2d): void {
        this.displacement = displacement;
    }

    public applyDisp(): void {
        this.displacement.scale(getTemperature());
        this.pos.add(this.displacement);
        this.displacement.reset();
    }
}