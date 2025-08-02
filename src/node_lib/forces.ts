import { getDistance, Vector2d } from "./vector2d";
import type { Vertex } from "./Vertex";

let coolingRate = 0.05;
let temperature = 4.0;
let cRepulse = 360;
let cSpring = 1;
let idealDistance = 20;

export const getRepulsiveForce = (v1: Vertex, v2: Vertex, forceMultiplier?: number): Vector2d => {
    const forceMagnitude = (forceMultiplier || 1) * cRepulse * temperature / Math.pow(getDistance(v1.pos, v2.pos), 2);
    const forceVector = v1.pos.getUnitVector(v2.pos);
    forceVector.invert();
    forceVector.scale(forceMagnitude);
    return forceVector;
}

export const getAttractiveForce = (v1: Vertex, v2: Vertex, forceMultiplier?: number): Vector2d => {
    const forceMagnitude = (forceMultiplier || 1) * cSpring * temperature * Math.log(getDistance(v1.pos, v2.pos) / idealDistance);
    const forceVector = v1.pos.getUnitVector(v2.pos);
    forceVector.scale(forceMagnitude);
    return forceVector;
}

export const cool = (): void => {
    temperature = Math.max(temperature * (1 - coolingRate), 0.01)
}

export const getTemperature = (): number => {
    return temperature;
}