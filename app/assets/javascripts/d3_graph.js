//set up basic chart and tool tip DOM elements 

function makeGraph(musicData){

//set up basic variables 
  var data = musicData
  var w = 800
  var h = 600
  var barHeight = 20
  var padding = 20

  //set up scales 

  var xScale = d3.scale.linear()
              .domain([0,10])
              .range([0,w-padding]);

  var yScale = d3.scale.linear()
              .domain([0,100])
              .range([h-padding,0]);

  //set up chart 
  var chart = d3.select(".chart")
    .attr("width", w)
    .attr("height", h );


// set DOM element for background color 
  chart.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "rgb(100, 100, 100");

 d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .style("width", function(d) { return (xScale(d[1])/10); })
  .text(function(d) { return d[0]; });   

// var bar = chart.selectAll("g")
//     .data(data)
//     .enter()
//     .append("g")
//     .attr("transform", function(d, i) { return "translate(d[1]," + i * barHeight + ")"; });
    
//   bar.append("rect")
//     .attr("width", w)
//     .attr("height", barHeight - 1);

  // bar.append("text")
  //   .attr("x", function(d) { return x(d) - 3; })
  //   .attr("y", barHeight / 2)
  //   .attr("dy", ".35em")
  //   .text(function(d) { return d; });

  //set up axes

   var xAxis = d3.svg.axis()
              .scale(xScale)
              .ticks(5)
              .orient("bottom");

  var yAxis = d3.svg.axis()
              .scale(yScale)
              .ticks(5)
              .orient("right");


  // add axes

  chart.append("g")
    .attr("class", "axis")
    .call(xAxis);
 
 chart.append("g")
    .attr("class", "axis")
    .call(yAxis);
// add tooltips 
  
var div = d3.select("body").append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);
};


