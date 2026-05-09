document.addEventListener('DOMContentLoaded', () => {
    // Common Chart Options
    const commonOptions = {
        fontFamily: 'Outfit, sans-serif',
        foreColor: '#94a3b8',
        toolbar: { show: false },
        zoom: { enabled: false }
    };

    // --------------------------------------------------
    // Sparkline Charts for KPI Cards
    // --------------------------------------------------
    const sparklineOptions = {
        chart: {
            type: 'area',
            height: 60,
            sparkline: { enabled: true },
            animations: { enabled: true, easing: 'smooth', speed: 800 }
        },
        stroke: { curve: 'smooth', width: 2 },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 100]
            }
        },
        tooltip: {
            fixed: { enabled: false },
            x: { show: false },
            y: { title: { formatter: function (seriesName) { return '' } } },
            marker: { show: false }
        }
    };

    // Spark 1: Revenue
    new ApexCharts(document.querySelector("#spark1"), {
        ...sparklineOptions,
        series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
        colors: ['#8b5cf6']
    }).render();

    // Spark 2: Orders
    new ApexCharts(document.querySelector("#spark2"), {
        ...sparklineOptions,
        series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
        colors: ['#f97316']
    }).render();

    // Spark 3: Deliveries
    new ApexCharts(document.querySelector("#spark3"), {
        ...sparklineOptions,
        series: [{ data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82] }],
        colors: ['#3b82f6']
    }).render();

    // Spark 4: Satisfaction
    new ApexCharts(document.querySelector("#spark4"), {
        ...sparklineOptions,
        series: [{ data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15] }],
        colors: ['#10b981']
    }).render();


    // --------------------------------------------------
    // 1. LINE CHART — Hourly Orders Trend
    // --------------------------------------------------
    const hourlyOrdersOptions = {
        series: [{
            name: 'Actual Orders',
            data: [120, 180, 240, 340, 290, 410, 580, 450, 320]
        }, {
            name: 'AI Predicted',
            data: [110, 175, 230, 350, 310, 390, 600, 480, 300]
        }],
        chart: {
            type: 'area',
            height: 300,
            ...commonOptions,
            background: 'transparent'
        },
        colors: ['#8b5cf6', '#3b82f6'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 3, dashArray: [0, 5] },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100]
            },
        },
        xaxis: {
            categories: ['10AM', '11AM', '12PM', '1PM', '2PM', '6PM', '8PM', '9PM', '10PM'],
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: { formatter: (val) => val }
        },
        grid: {
            borderColor: 'rgba(255,255,255,0.05)',
            strokeDashArray: 4,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        },
        theme: { mode: 'dark' }
    };
    new ApexCharts(document.querySelector("#hourlyOrdersChart"), hourlyOrdersOptions).render();


    // --------------------------------------------------
    // 2. BAR CHART — Top Restaurants by Revenue
    // --------------------------------------------------
    const topRestaurantsOptions = {
        series: [{
            name: 'Revenue ($)',
            data: [12450, 9840, 8400, 6200, 4900]
        }],
        chart: {
            type: 'bar',
            height: 300,
            ...commonOptions,
            background: 'transparent'
        },
        colors: ['#f97316'],
        plotOptions: {
            bar: {
                borderRadius: 6,
                horizontal: true,
                distributed: true,
                dataLabels: { position: 'bottom' }
            }
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: { colors: ['#fff'], fontSize: '12px' },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ": $" + val
            },
            offsetX: 0,
            dropShadow: { enabled: true }
        },
        xaxis: {
            categories: ['Burger Hub', 'Pizza Point', 'Urban Biryani', 'Sushi Town', 'Food Factory'],
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: { show: false }
        },
        grid: { show: false },
        legend: { show: false },
        theme: { mode: 'dark' }
    };
    new ApexCharts(document.querySelector("#topRestaurantsChart"), topRestaurantsOptions).render();


    // --------------------------------------------------
    // 3. DONUT CHART — Order Status Distribution
    // --------------------------------------------------
    const orderStatusOptions = {
        series: [65, 20, 5, 10],
        chart: {
            type: 'donut',
            height: 300,
            ...commonOptions,
            background: 'transparent'
        },
        labels: ['Delivered', 'Preparing', 'Cancelled', 'On the way'],
        colors: ['#10b981', '#f97316', '#ef4444', '#3b82f6'],
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        name: { fontSize: '14px', color: '#94a3b8' },
                        value: {
                            fontSize: '24px',
                            fontWeight: 600,
                            color: '#fff',
                            formatter: function (val) { return val + "%" }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Delivered',
                            fontSize: '14px',
                            color: '#94a3b8',
                            formatter: function (w) {
                                return w.globals.seriesTotals[0] + "%"
                            }
                        }
                    }
                }
            }
        },
        dataLabels: { enabled: false },
        stroke: { show: true, colors: ['#12121a'], width: 2 },
        legend: {
            position: 'bottom',
            markers: { radius: 12 }
        },
        theme: { mode: 'dark' }
    };
    new ApexCharts(document.querySelector("#orderStatusChart"), orderStatusOptions).render();


    // --------------------------------------------------
    // 4. AREA CHART — Revenue vs Refunds
    // --------------------------------------------------
    const revenueRefundsOptions = {
        series: [{
            name: 'Revenue',
            data: [4200, 3800, 5100, 4900, 6200, 5800, 7100]
        }, {
            name: 'Refunds',
            data: [400, 350, 480, 200, 310, 420, 250]
        }],
        chart: {
            type: 'area',
            height: 300,
            ...commonOptions,
            background: 'transparent'
        },
        colors: ['#10b981', '#ef4444'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 100]
            }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        grid: {
            borderColor: 'rgba(255,255,255,0.05)',
            strokeDashArray: 4,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        },
        theme: { mode: 'dark' }
    };
    new ApexCharts(document.querySelector("#revenueRefundsChart"), revenueRefundsOptions).render();


    // --------------------------------------------------
    // 5. HEATMAP — Delivery Hotspots
    // --------------------------------------------------
    const generateData = (count, yrange) => {
        let i = 0;
        let series = [];
        while (i < count) {
            let x = 'Z' + (i + 1).toString();
            let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({ x: x, y: y });
            i++;
        }
        return series;
    };

    const heatmapOptions = {
        series: [
            { name: '10 AM', data: generateData(6, { min: 0, max: 90 }) },
            { name: '12 PM', data: generateData(6, { min: 20, max: 100 }) },
            { name: '2 PM', data: generateData(6, { min: 0, max: 60 }) },
            { name: '6 PM', data: generateData(6, { min: 40, max: 100 }) },
            { name: '8 PM', data: generateData(6, { min: 50, max: 100 }) },
            { name: '10 PM', data: generateData(6, { min: 0, max: 50 }) }
        ],
        chart: {
            height: 300,
            type: 'heatmap',
            ...commonOptions,
            background: 'transparent'
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 4,
                useFillColorAsStroke: false,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 30,
                        name: 'Low',
                        color: 'rgba(139, 92, 246, 0.2)'
                    }, {
                        from: 31,
                        to: 70,
                        name: 'Medium',
                        color: 'rgba(139, 92, 246, 0.6)'
                    }, {
                        from: 71,
                        to: 100,
                        name: 'High',
                        color: '#8b5cf6'
                    }]
                }
            }
        },
        dataLabels: { enabled: false },
        stroke: { width: 1, colors: ['#12121a'] },
        xaxis: {
            labels: { style: { colors: '#94a3b8' } }
        },
        theme: { mode: 'dark' }
    };
    new ApexCharts(document.querySelector("#heatmapChart"), heatmapOptions).render();
});
