function makeGraphAlso(musicData){

    var data = musicData;

    var width = 420,
        barHeight = 20;

    var x = d3.scale.linear()
        .domain([0, 100])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * 11);

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", function(d) { return x(d[1]); })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d[1]) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d[0]+ ": " +d[1]; });
};