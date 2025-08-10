import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface Node {
  id: string;
  noteId: string;
  category: number;
  radius: number;
  importance: number;
  x: number;
  y: number;
  vx?: number;
  vy?: number;
}

const sixRainbowColors = [
  "#ff0000", // Red
  "#ff7f00", // Orange
  "#ffff00", // Yellow
  "#00ff00", // Green
  "#0000ff", // Blue
  "#4b0082" // Indigo
]

export const D3ForceGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const getNodeSeed = () => {
      return d3.range(10).map((i) => {
        const importance = Math.pow(1.1, 10 - i);
        const category = Math.floor(Math.random() * 6);
        return {
          id: `node-${i}`,
          noteId: `Note number ${i} with category ${category}`,
          category: category,
          importance: importance,
          radius: 6 + importance * 20,
          x: width / 2 + Math.sign(Math.random() - 0.5) * 2000 / importance,
          y: height / 2 + Math.sign(Math.random() - 0.5) * 2000 / importance
        }
      });
    }

    const nodes: Node[] = getNodeSeed();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "black")
      .style("border", "1px solid #ddd")
      .style("border-radius", "4px")
      .style("padding", "8px")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("transition", "opacity 0.3s")
      .style("color", "white")
      .style("max-width", "none")
      .style("width", "auto")
      .style("white-space", "pre-line");

    const circleSelection = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => sixRainbowColors[d.category])
      .attr("stroke", "black")
      .attr("data-note-id", d => d.noteId)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      // Add hover functionality for displaying notes
      .on("mouseover", (event, d) => {
        tooltip.transition()
          .duration(200)
          .style("opacity", 0.9);
        tooltip.html(`${d.noteId}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });

    const simulation = d3.forceSimulation(nodes)
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide<Node>().radius(d => d.radius + 1))
      .force("x", d3.forceX(width / 2).strength(d => 0.05 + d.importance * 0.2))
      .force("y", d3.forceY(height / 2).strength(d => 0.05 + d.importance * 0.2))
      .alphaDecay(0.02)
      .on("tick", () => {
        // Direct DOM manipulation, NOT React state
        circleSelection
          .attr("cx", d => d.x!)
          .attr("cy", d => d.y!);
      })
      .on("end", () => {
        if (window.confirm("Is this layout suitable?")) {
          // Export the svg
          const svgData = new XMLSerializer().serializeToString(svgRef.current!);
          const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
          const svgUrl = URL.createObjectURL(svgBlob);
          
          // Create download link and trigger download
          const downloadLink = document.createElement("a");
          downloadLink.href = svgUrl;
          downloadLink.download = "force-graph.svg";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          
          // Clean up the URL object
          URL.revokeObjectURL(svgUrl);
        }
        else {
          const newNodes = getNodeSeed();

          svg.selectAll("circle").remove();

          simulation.nodes(newNodes);
          
          const newCircleSelection = svg.selectAll("circle")
            .data(newNodes)
            .enter()
            .append("circle")
            .attr("r", d => d.radius)
            .attr("fill", d => sixRainbowColors[d.category])
            .attr("stroke", "black")
            .attr("data-note-id", d => d.noteId) // added
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .on("mouseover", (event, d) => {
              tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
              tooltip.html(`${d.noteId}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => {
              tooltip.transition()
                .duration(500)
                .style("opacity", 0);
            });

            simulation.on("tick", () => {
              newCircleSelection
                .attr("cx", d => d.x!)
                .attr("cy", d => d.y!);
            });

          simulation.alpha(1).restart();
        }
      });

    simulation.tick(10);

    return () => {
      simulation.stop();
    };
  }, []);

  return <svg ref={svgRef} />;
};