export const bookingChartOptions = {
    animation: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
    },
    scales: {
        x: {
            grid:{
                drawBorder:false,
                display:false
            },
            ticks:{
                color:"#7C828A"
            }
        },
        y: {
            grid:{
                drawBorder:false,
                display:false
            },
            ticks:{
                color:"#7C828A"
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 0
        },
        line: {
            tension: 0.5
        }
    }
};
export const bookingStatusOptions = {
    animation: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
    },
    scales: {
        x: {
            grid:{
                drawBorder:false,
                display:false
            },
            ticks:{
                color:"#7C828A"
            }
        },
        y: {
            grid:{
                drawBorder:false,
                display:false
            },
            ticks:{
                color:"#7C828A"
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 3
        },
        line: {
            tension: 0.5
        }
    }
};
export const miniChartOptions = {
    animation: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
    },
    scales: {
        x: {
            display:false,
            grid:{
                drawBorder:false,
                display:false
            },
            ticks:{
                color:"#7C828A"
            }
        },
        y: {
            display:false,
            grid:{
                drawBorder:false,
                display:false
            },
            ticks:{
                color:"#7C828A"
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 0
        },
        line: {
            tension: 0.5
        }
    }
};