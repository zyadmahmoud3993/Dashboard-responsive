var ctx2 = document.querySelectorAll(".chart-line");

new Chart(ctx2[ctx2.length - 1], {
    type: "line",
    data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Black Friday",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "rgb(195, 78, 78)",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [20, 60, 20, 50, 90, 220, 440, 380, 500],
            maxBarThickness: 6
        },
        {
            label: "Autumn Sale",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "rgb(78, 84, 195)",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [30, 90, 40, 140, 290, 290, 240, 270, 230],
            maxBarThickness: 6
        },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
        },
        scales: {
            yAxes: [{
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: '#dee2e6',
                    zeroLineColor: '#dee2e6',
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [2],
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 500,
                    beginAtZero: true,
                    padding: 10,
                    fontSize: 11,
                    fontColor: '#adb5bd',
                    lineHeight: 3,
                    fontStyle: 'normal',
                    fontFamily: "Public Sans",
                },
            },],
            xAxes: [{
                gridLines: {
                    zeroLineColor: 'rgba(0,0,0,0)',
                    display: false,
                },
                ticks: {
                    padding: 10,
                    fontSize: 11,
                    fontColor: '#adb5bd',
                    lineHeight: 3,
                    fontStyle: 'normal',
                    fontFamily: "Public Sans",
                },
            },],
        },
    },
});

// Chart 2
document.addEventListener("DOMContentLoaded", function () {
    var chartsLine = document.querySelectorAll(".chart-line2");

    chartsLine.forEach(function (chart) {
        if (!chart.getAttribute('data-chart-initialized')) {
            var ctx = chart.getContext("2d");

            var gradient = ctx.createLinearGradient(0, 0, 0, 225);
            gradient.addColorStop(0, "rgb(5, 252, 87)");
            gradient.addColorStop(1, "rgba(26, 236, 11, 0)");

            new Chart(ctx, {
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Sales ($)",
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: "#0d6efd",
                        data: [2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    legend: { display: false },
                    tooltips: { intersect: false },
                    hover: { intersect: true },
                    plugins: {
                        filler: { propagate: false }
                    },
                    scales: {
                        xAxes: [{
                            reverse: true,
                            gridLines: {
                                color: "rgba(0,0,0,0.0)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 1000
                            },
                            display: true,
                            borderDash: [3, 3],
                            gridLines: {
                                color: "rgba(0,0,0,0.0)"
                            }
                        }]
                    }
                }
            });

            chart.setAttribute("data-chart-initialized", "true");
        }
    });
});



// Chart 3
document.addEventListener("DOMContentLoaded", function () {
    var chartsLine = document.querySelectorAll(".chart-line3");

    chartsLine.forEach(function (chart) {
        if (!chart.getAttribute('data-chart-initialized')) {
            var ctx = chart.getContext("2d");

            var gradient = ctx.createLinearGradient(0, 0, 0, 225);
            gradient.addColorStop(0, "rgb(252, 5, 5)");
            gradient.addColorStop(1, "rgba(236, 11, 11, 0)");

            new Chart(ctx, {
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Sales ($)",
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: "#0d6efd",
                        data: [4000, 4343, 3445, 3545, 3000, 2500, 2566, 2448, 2805, 3438, 2917, 3327]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    legend: { display: false },
                    tooltips: { intersect: false },
                    hover: { intersect: true },
                    plugins: {
                        filler: { propagate: false }
                    },
                    scales: {
                        xAxes: [{
                            reverse: true,
                            gridLines: {
                                color: "rgba(0,0,0,0.0)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 1000
                            },
                            display: true,
                            borderDash: [3, 3],
                            gridLines: {
                                color: "rgba(0,0,0,0.0)"
                            }
                        }]
                    }
                }
            });

            chart.setAttribute("data-chart-initialized", "true");
        }
    });
});


//------------------------------

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});



document.getElementById("show").addEventListener("click", function () {
    document.getElementById("Sidebar").classList.toggle("show");
    document.getElementById("show").classList.toggle("show");
})