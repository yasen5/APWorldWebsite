import * as d3 from "d3";
import { useEffect, useRef } from "react";

export type category = 'Government' | 'Society' | 'Culture' | 'Environment' | 'Economy' | 'Technology';

interface Node {
  id: string;
  noteId: string;
  category: category;
  radius: number;
  importance: number;
  x: number;
  y: number;
  vx?: number;
  vy?: number;
}

const categoryFillColors: Record<category, string> = {
  'Government': "#c97f47", // Brown/Tan
  'Society': "#ba9961", // Muted Brown/Beige
  'Culture': "#c4c37c", // Yellow
  'Environment': "#45b061", // Green
  'Economy': "#32a4c9", // Blue
  'Technology': "#c75fbd" // Pink/Magenta
}

const categoryTextColors: Record<category, string> = {
  'Government':"#ffffff",
  'Society':"#000000",
  'Culture':"#000000",
  'Environment':"#000000",
  'Economy':"#ffffff",
  'Technology':"#ffffff"
}

// TEMPORARY CLASSES - remove once actual notes are in (TODO)
interface ActualNote {
  noteId: string,
  category: category,
  importance: number
}

const actualNotes: ActualNote[] = [
  { noteId: "Zamindars & Mansabdars", category: 'Government', importance: 3 },
  { noteId: "Taj Mahal", category: 'Culture', importance: 2 },
  { noteId: "Akbar", category: 'Society', importance: 1.5 },
  { noteId: "Sikhism", category: 'Environment', importance: 1 },
  { noteId: "Cotton", category: 'Economy', importance: 0.8 },
  { noteId: "Aurangzeb", category: 'Technology', importance: 0.5 }
]

export const D3ForceGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const getNodeSeed = () => {
      return d3.range(6).map((i) => {
        const importance = actualNotes[i].importance;// Math.pow(1.1, 10 - i);
        const category = actualNotes[i].category;// Math.floor(Math.random() * 6);
        return {
          id: `node-${i}`,
          noteId: actualNotes[i].noteId,
          category: category,
          importance: importance,
          radius: 6 + importance * 60,
          x: width / 2 + Math.sign(Math.random() - 0.5) * 4000 / importance,
          y: height / 2 + Math.sign(Math.random() - 0.5) * 4000 / importance
        }
      });
    }

    const nodes: Node[] = getNodeSeed();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    d3.select('#force-graph-tooltip').remove();
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
    
    const wrapText = (textSelection: d3.Selection<SVGTextElement, Node, any, any>) => {
      textSelection.each(function(d) {
        const text = d3.select(this);
        const words = d.noteId.split(/\s+/).reverse();
        const maxWidth = d.radius * 1.8; // inside circle
        let line: string[] = [];
        let lineNumber = 0;
        const lineHeight = 1.1; // ems
        const y = 0;
        let tspan = text.text(null)
          .append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dy", "0em");
    
        let word;
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node()!.getComputedTextLength() > maxWidth) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan")
              .attr("x", 0)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + "em")
              .text(word);
          }
        }
    
        // Center vertically
        text.selectAll("tspan")
          .attr("dy", function(_, i) {
            return (i - lineNumber / 2) * lineHeight + "em";
          });
      });
    }

    const resetSim = (nodesToEnter: Node[]) => {
      const nodeSelection = svg.selectAll("g.node")
        .data(nodesToEnter)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("data-note-id", d => d.noteId)
        .attr("transform", d => `translate(${d.x},${d.y})`);

      nodeSelection.append("circle")
        .attr("r", d => d.radius)
        .attr("fill", d => categoryFillColors[d.category])
        .attr("stroke", "black")
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

      // This text should wrap
      const textSelection = nodeSelection.append("text")
        .text(d => d.noteId)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .style("font-family", "sans-serif")
        .style("pointer-events", "none")
        .style("fill", d => categoryTextColors[d.category])
        .style("font-size", d => d.radius * 0.3 + "px")

      wrapText(textSelection);

      return nodeSelection;
    }

    const nodeSelection = resetSim(nodes);

    const simulation = d3.forceSimulation<Node>(nodes)
      .alphaMin(0.003)
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide<Node>().radius(d => d.radius + 1))
      .force("x", d3.forceX<Node>(width / 2).strength(d => 0.05 + d.importance * 0.2))
      .force("y", d3.forceY<Node>(height / 2).strength(d => 0.05 + d.importance * 0.2))
      .alphaDecay(0.02)
      .on("tick", () => {
        nodeSelection.attr("transform", d => `translate(${d.x!},${d.y!})`);
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

          svg.selectAll("g.node").remove();

          simulation.nodes(newNodes);

          const newNodeSelection = resetSim(newNodes);

          simulation.on("tick", () => {
            newNodeSelection.attr("transform", d => `translate(${d.x!},${d.y!})`);
          });

          simulation.alpha(1).restart();
        }
      });

    simulation.tick(10);

    return () => {
      simulation.stop();
      tooltip.remove();
    };
  }, []);

  return <svg ref={svgRef} />;
};