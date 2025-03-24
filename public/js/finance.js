document.addEventListener('DOMContentLoaded', () => {
    const revenueChartCanvas = document.getElementById('revenue-chart');
    const totalRevenueDisplay = document.getElementById('total-revenue');
    const revenueByServiceContainer = document.getElementById('revenue-by-service');

    const revenueData = {
        labels: ['Consultation', 'Procedure A', 'Procedure B', 'Follow-up'],
        datasets: [{
            label: 'Revenue',
            data: [1500, 2200, 1800, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    };
    const totalRevenue = revenueData.datasets[0].data.reduce((sum, value) => sum + value, 0);
    totalRevenueDisplay.textContent = `$${totalRevenue.toFixed(2)}`;

    revenueData.labels.forEach((service, index) => {
        const revenueAmount = revenueData.datasets[0].data[index];
        const breakdownItem = document.createElement('div');
        breakdownItem.textContent = `${service}: $${revenueAmount.toFixed(2)}`;
        revenueByServiceContainer.appendChild(breakdownItem);
    });

    const chartJsCDN = "https://cdn.jsdelivr.net/npm/chart.js";

    const script = document.createElement('script');
    script.src = chartJsCDN;
    script.onload = () => {
        const revenueChart = new Chart(revenueChartCanvas, {
            type: 'bar',
            data: revenueData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return '$' + value;
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue by Service',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });

        
        const applyDateRangeButton = document.getElementById('apply-date-range');
        applyDateRangeButton.addEventListener('click', () => {
            

            revenueData.datasets[0].data = [1800, 2500, 1500, 1200];
            revenueChart.update();

            const newTotalRevenue = revenueData.datasets[0].data.reduce((sum, value) => sum + value, 0);
            totalRevenueDisplay.textContent = `$${newTotalRevenue.toFixed(2)}`;

            revenueByServiceContainer.innerHTML = '';
            revenueData.labels.forEach((service, index) => {
                const revenueAmount = revenueData.datasets[0].data[index];
                const breakdownItem = document.createElement('div');
                breakdownItem.textContent = `${service}: $${revenueAmount.toFixed(2)}`;
                revenueByServiceContainer.appendChild(breakdownItem);
            });
        });
    };

    document.head.appendChild(script); 
});


document.addEventListener('DOMContentLoaded', () => {
    const revenueChartCanvas = document.getElementById('revenue-chart');
    const totalRevenueDisplay = document.getElementById('total-revenue');
    const revenueByServiceContainer = document.getElementById('revenue-by-service');

    const revenueData = {
        labels: ['Consultation', 'Procedure A', 'Procedure B', 'Follow-up'],
        datasets: [{
            label: 'Revenue',
            data: [1500, 2200, 1800, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    };

    const totalRevenue = revenueData.datasets[0].data.reduce((sum, value) => sum + value, 0);
    totalRevenueDisplay.textContent = `$${totalRevenue.toFixed(2)}`;

    revenueData.labels.forEach((service, index) => {
        const revenueAmount = revenueData.datasets[0].data[index];
        const breakdownItem = document.createElement('div');
        breakdownItem.textContent = `${service}: $${revenueAmount.toFixed(2)}`;
        revenueByServiceContainer.appendChild(breakdownItem);
    });

    const chartJsCDN = "https://cdn.jsdelivr.net/npm/chart.js";

    if (typeof Chart === 'undefined') {
        const script = document.createElement('script');
        script.src = chartJsCDN;
        script.onload = () => {
            createRevenueChart(revenueChartCanvas, revenueData);
        };
        document.head.appendChild(script);
    } else {
        createRevenueChart(revenueChartCanvas, revenueData);
    }

    function createRevenueChart(canvas, data) {
        const revenueChart = new Chart(canvas, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return '$' + value;
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue by Service',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });

        const applyDateRangeButton = document.getElementById('apply-date-range');
        applyDateRangeButton.addEventListener('click', () => {
            revenueData.datasets[0].data = [1800, 2500, 1500, 1200];
            revenueChart.update();

            const newTotalRevenue = revenueData.datasets[0].data.reduce((sum, value) => sum + value, 0);
            totalRevenueDisplay.textContent = `$${newTotalRevenue.toFixed(2)}`;

            revenueByServiceContainer.innerHTML = '';
            revenueData.labels.forEach((service, index) => {
                const revenueAmount = revenueData.datasets[0].data[index];
                const breakdownItem = document.createElement('div');
                breakdownItem.textContent = `${service}: $${revenueAmount.toFixed(2)}`;
                revenueByServiceContainer.appendChild(breakdownItem);
            });
        });
    }


    const expensesChartCanvas = document.getElementById('expenses-chart');
    const totalExpensesDisplay = document.getElementById('total-expenses');
    const expensesByCategoryContainer = document.getElementById('expenses-by-category');

    const expensesData = {
        labels: ['Salaries', 'Rent', 'Supplies', 'Marketing'],
        datasets: [{
            label: 'Expenses',
            data: [8000, 3000, 1500, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    };

    const totalExpenses = expensesData.datasets[0].data.reduce((sum, value) => sum + value, 0);
    totalExpensesDisplay.textContent = `$${totalExpenses.toFixed(2)}`;

    expensesData.labels.forEach((category, index) => {
        const expenseAmount = expensesData.datasets[0].data[index];
        const breakdownItem = document.createElement('div');
        breakdownItem.textContent = `${category}: $${expenseAmount.toFixed(2)}`;
        expensesByCategoryContainer.appendChild(breakdownItem);
    });


    if (typeof Chart === 'undefined') {
        const script = document.createElement('script');
        script.src = chartJsCDN;
        script.onload = () => {
            createExpensesChart(expensesChartCanvas, expensesData);
        };
        document.head.appendChild(script);
    } else {
        createExpensesChart(expensesChartCanvas, expensesData);
    }

    function createExpensesChart(canvas, data) {
        const expensesChart = new Chart(canvas, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return '$' + value;
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Expenses by Category',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });

        const applyDateRangeButton = document.getElementById('apply-date-range');
        applyDateRangeButton.addEventListener('click', () => {
            expensesData.datasets[0].data = [9000, 2500, 1800, 1200];
            expensesChart.update();

            const newTotalExpenses = expensesData.datasets[0].data.reduce((sum, value) => sum + value, 0);
            totalExpensesDisplay.textContent = `$${newTotalExpenses.toFixed(2)}`;

            expensesByCategoryContainer.innerHTML = '';
            expensesData.labels.forEach((category, index) => {
                const expenseAmount = expensesData.datasets[0].data[index];
                const breakdownItem = document.createElement('div');
                breakdownItem.textContent = `${category}: $${expenseAmount.toFixed(2)}`;
                expensesByCategoryContainer.appendChild(breakdownItem);
            });
        });
    }
});