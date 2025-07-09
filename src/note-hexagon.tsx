import { useMemo } from "react";

const vertexRadius = 6;
const baseNotePointRadius = 1;

const points: { importance: number, pullWeights: [number, number, number, number, number, number], label: string }[] = []

export const NoteHexagon = (bboxSideLength: number) => {
    const hexagonVertices: [number, number][] = useMemo(() => {
        const points: [number, number][] = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            points.push([bboxSideLength/2 * (1 + Math.cos(angle)), bboxSideLength/2 * (1 + Math.sin(angle))]);
        };
        return points;
    }, [bboxSideLength]);

    const notePoints = useMemo(() => {
        const locations = points.map((pt): { importance:number, label: string, x: number, y: number} => {
            if (pt.pullWeights.reduce((acc, weight) => acc + weight, 0) !== 1) {
                throw new Error("Point with label " +pt.label + "has pull weights that do not sum to 1:" + pt.pullWeights);
            }
            let finalX: number = bboxSideLength / 2;
            let finalY: number = bboxSideLength / 2;
            pt.pullWeights.forEach((weight, index) => {
                const angle = (Math.PI / 3) * index;
                finalX += Math.cos(angle) * weight;
                finalY += Math.sin(angle) * weight;
            });
            return { importance: pt.importance, label: pt.label, x: finalX, y: finalY };
        })
        return locations;
    }, [bboxSideLength]);

    return (
        <svg width={bboxSideLength} height={bboxSideLength} viewBox={`0 0 ${bboxSideLength} ${bboxSideLength}`}>
            {/* Hexagon vertices */}
            {hexagonVertices.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={vertexRadius} fill="blue" />
            ))}
        
            {/* Connecting hexagon lines */}
            <polygon
                points={hexagonVertices.map(([x, y]) => `${x},${y}`).join(' ')}
                fill="none"
                stroke="blue"
            />
        
            {/* Points influenced by pull factors */}
            {notePoints.map((pt) => {
                return <circle key={pt.label} cx={pt.x} cy={pt.y} r={baseNotePointRadius * pt.importance} fill="red" />;
            })}
        </svg>
    );
}