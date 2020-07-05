// !preview r2d3 data=jsonlite::read_json('http://127.0.0.1:5000/map'), d3_version = 3, dependencies = "topojson.min.js"
//
// r2d3: https://rstudio.github.io/r2d3
//

var path = d3.geo.path();

var root = svg
  .attr("width", "100%")
        .append("g");

r2d3.onRender(function(us, svg, width, height, options) {
const projection = d3.geoEqualEarth()
    .fitWidth(dimensions.boundedWidth, sphere)
const pathGenerator = d3.geoPath(projection)
const earth = root.append("path")
      .attr("d", pathGenerator(sphere))

  const graticuleJson = d3.geoGraticule10()
  const graticule = bounds.append("path")
      .attr("class", "graticule")
      .attr("d", pathGenerator(graticuleJson))

  const countries = bounds.selectAll(".country")
    .data(countryShapes.features)
    .enter().append("path")
      .attr("class", "country")
      .attr("d", pathGenerator)
      .attr("fill", d => {
        const metricValue = metricDataByCountry[countryIdAccessor(d)]
        if (typeof metricValue == "undefined") return "#e2e6e9"
        return colorScale(metricValue)
      });
});
