function makeGraph(musicData){
    var data = musicData;

    var width = 420,
        barHeight = 20;

//popularity data goes from 1-100
    var x = d3.scale.linear()
        .domain([0, 100])
        .range([0, width]);

    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * 13);

    var bar = chart.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", function(d) { return x(d[1]); })
        .attr("height", barHeight - 1)
        .transition()
        .duration(1000)
        .attr("width", function(d) { return (x(d[1]-25)); })
        .attr("height", barHeight - 1)
        .transition()
        .duration(400)
        .attr("width", function(d) { return x(d[1]); })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d[1]) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d[0]+ ": " +d[1]; });

// set up axes

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(3," + barHeight*10 + ")")
        .call(xAxis)
        .append("text")
        .attr("x", x(50))
        .attr("dy", ".71em")
        .style("text-anchor", "middle")
        .text("Popularity Index");

};