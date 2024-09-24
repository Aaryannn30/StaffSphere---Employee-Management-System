import React , {useState} from 'react';
import { Line, Radar, Pie, Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale, ArcElement, BarElement, Title, Tooltip, Legend, TimeScale, Filler, DoughnutController } from 'chart.js';

// Register required Chart.js components, including DoughnutController
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale, ArcElement, BarElement, Title, Tooltip, Legend, TimeScale, Filler, DoughnutController);


const ChartComponent = ({ chartType, data, options }) => {
    switch (chartType) {
        case 'line':
            return <Line data={data} options={options} />;
        case 'bar':
            return <Bar data={data} options={options} />;
        case 'radar':
            return <Radar data={data} options={options} />;
        case 'pie':
            return <Pie data={data} options={options} />;
        default:
            return null;
    }
};

const turnoverData = {
    labels: ['Hiring', 'Promotion', 'Resignation'],
    datasets: [
        {
            label: 'Employee Turnover',
            data: [50, 30, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

// Example: Configuring Pie chart as Doughnut
const turnoverOptions = {
    cutout: '50%', // This creates the doughnut effect by "cutting out" a percentage of the center
};

const Dashboard = () => {
    // Define states for chart types
    const [attendanceChartType, setAttendanceChartType] = useState('line');
    const [productivityChartType, setProductivityChartType] = useState('bar');
    const [taskCompletionChartType, setTaskCompletionChartType] = useState('bar');
    const [performanceReviewChartType, setPerformanceReviewChartType] = useState('radar');
    const [engagementChartType, setEngagementChartType] = useState('pie');

    // Example data for various charts
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // 1. Employee Attendance and Punctuality
    const attendanceData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                label: 'On-time',
                data: [85, 90, 80, 70, 75],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
            {
                label: 'Late',
                data: [15, 10, 20, 30, 25],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
            },
        ],
    };

    // 2. Employee Productivity
    const productivityData = {
        labels: ['Team A', 'Team B', 'Team C'],
        datasets: [
            {
                label: 'Productivity',
                data: [75, 60, 90],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
            },
        ],
    };

    // 3. Task or Project Completion
    const taskCompletionData = {
        labels: ['Task 1', 'Task 2', 'Task 3'],
        datasets: [
            {
                label: 'Completed',
                data: [100, 80, 60],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
            },
            {
                label: 'Pending',
                data: [50, 40, 20],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };

    // 4. Performance Reviews
    const performanceReviewData = {
        labels: ['Employee 1', 'Employee 2', 'Employee 3'],
        datasets: [
            {
                label: 'Exceeds Expectations',
                data: [3, 5, 2],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Meets Expectations',
                data: [5, 3, 4],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
            {
                label: 'Needs Improvement',
                data: [2, 2, 4],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    // 5. Employee Satisfaction and Engagement
    const engagementData = {
        labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
        datasets: [
            {
                label: 'Employee Satisfaction',
                data: [40, 35, 15, 5, 5],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // 6. Employee Turnover
    const turnoverData = {
        labels: ['Hiring', 'Promotion', 'Resignation'],
        datasets: [
            {
                label: 'Employee Turnover',
                data: [50, 30, 20],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    // 7. Salary and Compensation Analysis
    const salaryData = {
        labels: ['Junior', 'Mid', 'Senior'],
        datasets: [
            {
                label: 'Average Salary',
                data: [50000, 70000, 100000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // 8. Training and Development
    const trainingData = {
        labels: ['Pre-training', 'Post-training'],
        datasets: [
            {
                label: 'Skill Improvement',
                data: [3, 7],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
            },
        ],
    };

    // 9. Diversity and Inclusion
    const diversityData = {
        labels: ['Male', 'Female', 'Other'],
        datasets: [
            {
                label: 'Gender Distribution',
                data: [60, 35, 5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // 10. Leave and Time Off Analysis
    const leaveTypeData = {
        labels: ['Sick Leave', 'Vacation', 'Personal Leave', 'Other'],
        datasets: [
            {
                label: 'Leave Types',
                data: [30, 40, 20, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const leaveTypeOptions = {
        cutout: '50%', // Doughnut style
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const timeOffTrendsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Days Off Taken',
                data: [4, 5, 3, 6, 7, 8, 4, 3, 6, 8, 7, 5],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    const timeOffTrendsOptions = {
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // 11. Resource Allocation
    const resourceAllocationData = {
        labels: ['Project A', 'Project B', 'Project C'],
        datasets: [
            {
                label: 'Resources Allocated',
                data: [150, 100, 200],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Employee Attendance</h3>
                        <select
                            value={attendanceChartType}
                            onChange={(e) => setAttendanceChartType(e.target.value)}
                            className="border rounded p-1"
                        >
                            <option value="line">Line</option>
                            <option value="bar">Bar</option>
                            <option value="radar">Radar</option>
                            <option value="pie">Pie</option>
                        </select>
                    </div>
                    <ChartComponent chartType={attendanceChartType} data={data} options={options} />
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Employee Productivity</h3>
                        <select
                            value={productivityChartType}
                            onChange={(e) => setProductivityChartType(e.target.value)}
                            className="border rounded p-1"
                        >
                            <option value="line">Line</option>
                            <option value="bar">Bar</option>
                            <option value="radar">Radar</option>
                            <option value="pie">Pie</option>
                        </select>
                    </div>
                    <ChartComponent chartType={productivityChartType} data={data} options={options} />
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Task Completion</h3>
                        <select
                            value={taskCompletionChartType}
                            onChange={(e) => setTaskCompletionChartType(e.target.value)}
                            className="border rounded p-1"
                        >
                            <option value="line">Line</option>
                            <option value="bar">Bar</option>
                            <option value="radar">Radar</option>
                            <option value="pie">Pie</option>
                        </select>
                    </div>
                    <ChartComponent chartType={taskCompletionChartType} data={data} options={options} />
                </div>

                {/* Employee Attendance and Punctuality */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Attendance and Punctuality</h3>
                        <Line data={attendanceData} />
                    </div>
                </div>

                {/* Employee Productivity */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Employee Productivity</h3>
                        <Radar data={productivityData} />
                    </div>
                </div>

                {/* Task or Project Completion */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Task or Project Completion</h3>
                        <Bar data={taskCompletionData} />
                    </div>
                </div>

                {/* Performance Reviews */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Performance Reviews</h3>
                        <Radar data={performanceReviewData} />
                    </div>
                </div>

                {/* Employee Satisfaction and Engagement */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Employee Engagement</h3>
                        <Pie data={engagementData} />
                    </div>
                </div>

                {/* Employee Turnover */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Employee Turnover</h3>
                        <Pie data={turnoverData} options={turnoverOptions} />
                    </div>
                </div>

                {/* Salary and Compensation Analysis */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Salary Analysis</h3>
                        <Bar data={salaryData} />
                    </div>
                </div>

                {/* Training and Development */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Training Development</h3>
                        <Line data={trainingData} />
                    </div>
                </div>

                {/* Diversity and Inclusion */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Diversity and Inclusion</h3>
                        <Pie data={diversityData} />
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Leave Type Distribution</h3>
                        <Pie data={leaveTypeData} options={leaveTypeOptions} />
                    </div>
                </div>

                {/* Time Off Trends Line Chart */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Time Off Trends</h3>
                        <Line data={timeOffTrendsData} options={timeOffTrendsOptions} />
                    </div>
                </div>

                {/* Resource Allocation */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Resource Allocation</h3>
                        <Bar data={resourceAllocationData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
