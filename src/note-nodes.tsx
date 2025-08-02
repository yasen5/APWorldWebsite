import { useEffect, useMemo, useRef, useState } from "react";
import { Edge } from "./node_lib/edge";
import { cool, getAttractiveForce, getRepulsiveForce } from "./node_lib/forces";
import { getDistance, Vector2d } from "./node_lib/vector2d";
import { Vertex } from "./node_lib/Vertex";

const vertexRadius = 6;
const baseNotePointRadius = 3;

const points: { importance: number, pullWeights: [number, number, number, number, number, number], label: string }[] = [
    { importance: 1, pullWeights: [0.5, 0, 0.5, 0, 0, 0], label: "A" },
    { importance: 1, pullWeights: [0.5, 0.0, 0.0, 0.0, 0.5, 0.0], label: "B" },
    { importance: 1, pullWeights: [0.0, 0.5, 0.5, 0, 0.0, 0.0], label: "C" },
    { importance: 1, pullWeights: [0.0, 0.0, 0, 0.5, 0.0, 0.5], label: "D" },
    { importance: 1, pullWeights: [0.5, 0.5, 0.0, 0.0, 0.0, 0.0], label: "E" },
    { importance: 1, pullWeights: [0.5, 0.0, 0.0, 0.0, 0.5, 0.0], label: "F" }
]

const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD'
];

const minimumForce = 0.1;

export const NoteNodes: React.FC<{ bboxSideLength: number }> = ({ bboxSideLength }) => {
    const margin = vertexRadius;
    const marginedBboxSideLength = bboxSideLength - 2 * margin;
    const centerDist = marginedBboxSideLength / 2;

    const [updateCounter, setUpdateCounter] = useState(0);

    const { centralNode, topicNodes, noteNodes, edges, totalNodes } = useMemo(() => {
        const centralNode = new Vertex(new Vector2d([centerDist, centerDist]));

        const topicNodes: Vertex[] = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            topicNodes.push(new Vertex(new Vector2d([centerDist * (1 + Math.cos(angle)), centerDist * (1 + Math.sin(angle))])))
        };

        const noteNodes = points.map(() => { return new Vertex(null, marginedBboxSideLength) })

        const edges: Edge[] = [];

        for (let i = 0; i < points.length; i++) {
            points[i].pullWeights.forEach((weight, index) => {
                if (weight > 0) {
                    edges.push(new Edge(noteNodes[i], topicNodes[index], weight));
                }
            });
        }

        const totalNodes = [...topicNodes, ...noteNodes];

        return { centralNode, topicNodes, noteNodes, edges, totalNodes };
    }, [marginedBboxSideLength]);

    const intervalIdRef = useRef<number>(null);

    useEffect(() => {
        let tickCount = 0;
        intervalIdRef.current = window.setInterval(() => {
            tickCount++;
            totalNodes.forEach((pt) => {
                pt.setDisplacement(new Vector2d())
                totalNodes.forEach((other) => {
                    if (pt !== other && !edges.some(edge => (edge.start === pt && edge.end === other) || (edge.start === other && edge.end === pt))) {
                        pt.displacement.add(getRepulsiveForce(pt, other));
                    }
                })
                if (pt !== centralNode) {
                    pt.displacement.add(getAttractiveForce(pt, centralNode, 0.5));
                    pt.displacement.add(getRepulsiveForce(pt, centralNode))
                }
            });
    
            edges.forEach((edge) => {
                const forceVector = getAttractiveForce(edge.start, edge.end);
                edge.start.displacement.add(forceVector);
                edge.end.displacement.subtract(forceVector);
            });
    
            let simDone: boolean = true;
    
            totalNodes.forEach((node) => {
                if (node.displacement.magnitude() > minimumForce) {
                    simDone = false;
                }
            });
    
            if (simDone) {
                console.log("Sim done")
                clearInterval(intervalIdRef!.current!);
            }
    
            totalNodes.forEach((node) => { 
                node.applyDisp();
            });

            setUpdateCounter(prev => prev + 1);

            cool();
        }, 100);

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, []);

    return (
        <svg width={bboxSideLength} height={bboxSideLength} viewBox={`0 0 ${bboxSideLength} ${bboxSideLength}`}>
            {/* Hexagon vertices */}
            {topicNodes.map((vertex, i) => (
                <circle key={i} cx={vertex.pos.x + margin} cy={vertex.pos.y + margin} r={vertexRadius} fill={colors[i]} />
            ))}
        
            {/* Connecting lines */}
            {edges.map((edge, i) => (
                <line key={i} x1={edge.start.pos.x + margin} y1={edge.start.pos.y + margin} x2={edge.end.pos.x + margin} y2={edge.end.pos.y + margin} style={{ stroke: "purple", strokeWidth: 3 }}/>
            ))}
        
            {/* Points influenced by pull factors */}
            {noteNodes.map((pt, index) => {
                return <circle key={index} cx={pt.pos.x + margin} cy={pt.pos.y + margin} r={baseNotePointRadius} fill="red" />;
            })}
        </svg>
    );
}