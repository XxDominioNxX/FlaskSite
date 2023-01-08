// Global parameters:
// do not resize the chart canvas when its container does (keep at 600x400px)
Chart.defaults.global.responsive = false;

// define the chart data
var chartData = {
labels : [{{33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a} for item in labels {33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a}}
"{{item}}",
{{33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a} endfor {33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a}}],
datasets : [{
label: '{{ legend }}',
fill: true,
lineTension: 0.1,
backgroundColor: "rgba(75,192,192,0.4)",
borderColor: "rgba(75,192,192,1)",
borderCapStyle: 'butt',
borderDash: [],
borderDashOffset: 0.0,
borderJoinStyle: 'miter',
pointBorderColor: "rgba(75,192,192,1)",
pointBackgroundColor: "#fff",
pointBorderWidth: 1,
pointHoverRadius: 5,
pointHoverBackgroundColor: "rgba(75,192,192,1)",
pointHoverBorderColor: "rgba(220,220,220,1)",
pointHoverBorderWidth: 2,
pointRadius: 1,
pointHitRadius: 10,
data : [{{33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a} for item in values {33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a}}
{{item}},
{{33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a} endfor {33d8302486bd10b0fde64d2037652320e6f176a736d71849c0427b0d7398501a}}],
spanGaps: false
}]
}

// get chart canvas
var ctx = document.getElementById("myChart").getContext("2d");

// create the chart using the chart canvas
var myChart = new Chart(ctx, {
type: 'line',
data: chartData,
});