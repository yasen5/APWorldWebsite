export class Vector2d {
    public x: number;
    public y: number;

    public constructor(pos: [number, number] | null = null) {
        if (!pos) {
            this.x = 0;
            this.y = 0;
        }
        else {
            this.x = pos[0];
            this.y = pos[1];
        }
    }

    public add(other: Vector2d): void {
        this.x += other.x;
        this.y += other.y;
    }

    public subtract(other: Vector2d): void {
        this.x -= other.x;
        this.y -= other.y;
    }

    public scale(scalar: number): void {
        this.x *= scalar
        this.y *= scalar;
    }

    public magnitude(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    public normalize(): void {
        const mag = this.magnitude();
        if (mag !== 0) {
            this.scale(1 / mag);
        }
    }

    public randomize(xMax: number, yMax: number): void {
        this.x = Math.random() * xMax
        this.y = Math.random() * yMax;
    }

    public invert(): void {
        this.x *= -1;
        this.y *= -1;
    }

    public getUnitVector(other: Vector2d): Vector2d {
        const uVec = new Vector2d([other.x, other.y]);
        uVec.subtract(this);
        uVec.normalize();
        return uVec;
    }

    public reset(): void {
        this.x = 0;
        this.y = 0;
    }

    public copy(): Vector2d {
        return new Vector2d([this.x, this.y]);
    }

    public static subtract(v1: Vector2d, v2: Vector2d): Vector2d {
        return new Vector2d([v1.x - v2.x, v1.y - v2.y]);
    }

    public getScaled(scalar: number): Vector2d {
        return new Vector2d([this.x * scalar, this.y * scalar]);
    }
}

export const getDistance = (p1: Vector2d, p2: Vector2d): number => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}