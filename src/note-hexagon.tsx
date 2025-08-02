import { useMemo } from "react";

const vertexRadius = 6;
const baseNotePointRadius = 3;

const points: { importance: number, pullWeights: [number, number, number, number, number, number], label: string }[] = [
    { importance: 1, pullWeights: [0.5, 0, 0.5, 0, 0, 0], label: "A" },
    // { importance: 1, pullWeights: [0.2, 0.2, 0.2, 0.2, 0, 0.2], label: "B" },
    // { importance: 1, pullWeights: [0.2, 0.2, 0.2, 0, 0.2, 0.2], label: "C" },
    // { importance: 1, pullWeights: [0.2, 0.2, 0, 0.2, 0.2, 0.2], label: "D" },
    // { importance: 1, pullWeights: [0.2, 0, 0.2, 0.2, 0.2, 0.2], label: "E" },
    // { importance: 1, pullWeights: [0, 0.2, 0.2, 0.2, 0.2, 0.2], label: "F" }
]

const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD'
];

export const NoteHexagon: React.FC<{ bboxSideLength: number }> = ({ bboxSideLength }) => {
    const margin = vertexRadius;
    const marginedBboxSideLength = bboxSideLength - 2 * margin;
    const centerDist = marginedBboxSideLength / 2;

    const hexagonVertices: [number, number][] = useMemo(() => {
        const points: [number, number][] = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            points.push([centerDist * (1 + Math.cos(angle)), centerDist * (1 + Math.sin(angle))]);
        };
        return points;
    }, [centerDist]);

    const notePoints = useMemo(() => {
        const locations = points.map((pt): { importance:number, label: string, x: number, y: number} => {
            if (pt.pullWeights.reduce((acc, weight) => acc + weight, 0) !== 1) {
                throw new Error("Point with label " +pt.label + "has pull weights that do not sum to 1:" + pt.pullWeights);
            }
            let finalX: number = centerDist;
            let finalY: number = centerDist;
            pt.pullWeights.forEach((weight, index) => {
                const angle = (Math.PI / 3) * index;
                finalX += Math.cos(angle) * centerDist * weight;
                finalY += Math.sin(angle) * centerDist * weight;
            });
            return { importance: pt.importance, label: pt.label, x: finalX, y: finalY };
        })
        return locations;
    }, [centerDist]);

    return (
        <svg width={bboxSideLength} height={bboxSideLength} viewBox={`0 0 ${bboxSideLength} ${bboxSideLength}`}>
            {/* Hexagon vertices */}
            {hexagonVertices.map(([x, y], i) => (
                <circle key={i} cx={x + margin} cy={y + margin} r={vertexRadius} fill={colors[i]} />
            ))}
        
            {/* Connecting hexagon lines */}
            <polygon
                points={hexagonVertices.map(([x, y]) => `${x + margin},${y + margin}`).join(' ')}
                fill="none"
                stroke="blue"
            />
        
            {/* Points influenced by pull factors */}
            {notePoints.map((pt) => {
                return <circle key={pt.label} cx={pt.x + margin} cy={pt.y + margin} r={baseNotePointRadius * pt.importance} fill="red" />;
            })}
        </svg>
    );
}