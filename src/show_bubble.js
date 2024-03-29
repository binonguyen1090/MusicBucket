// http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
const width = window.innerWidth;
const height = window.innerHeight;

// number of circles
const n = 20;
// number of floret in each circle
const m = 20;

// the divergence angle between the position vectors of any two successive florets is constant
const ALPHA = 137.5;

const alpha = (ALPHA * Math.PI) / 180;

let svg = d3
  .select(".c")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`);

let data = [];

for (let r = 1; r <= n; r++) {
  for (let theta = 0; theta < Math.PI * 2; theta += (2 * Math.PI) / m) {
    data.push({
      r: r,
      cx: r * r * Math.cos(theta + alpha * r),
      cy: r * r * Math.sin(theta + alpha * r)
    });
  }
}

let colorScale = d3.scale
  .linear()
  .range([0, data.length])
  .domain([0, 180]);

let florets = svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => d.cx)
  .attr("cy", d => d.cy)
  .attr("r", 0.1)
  .attr("fill", (d, i) => d3.hsl(colorScale(i), 0.5, 0.7))
  .attr("fill-opacity", 0.4);
d3.timer(function(t) {
  florets.attr("r", (d, i) => (Math.sin((i * t) / 400000) + 1) * d.r);
  svg.attr(
    "transform",
    `translate(${width / 2},${height / 2}) rotate(${(t / 500) % 360})`
  );
});
