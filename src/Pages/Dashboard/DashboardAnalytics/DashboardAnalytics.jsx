import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardAnalytics = () => {
    const [counts, setCounts] = useState({
        products: 0,
        services: 0,
        blogs: 0
    });

    const fetchData = async () => {
        try {
            const productsResponse = await axios.get('https://energy-project-server.vercel.app/products');
            const servicesResponse = await axios.get('https://energy-project-server.vercel.app/services');
            const blogsResponse = await axios.get('https://energy-project-server.vercel.app/blogs');

            setCounts({
                products: productsResponse.data.length,
                services: servicesResponse.data.length,
                blogs: blogsResponse.data.length
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const pieData = {
        labels: ['Products', 'Services', 'Blogs'],
        datasets: [
            {
                data: [counts.products, counts.services, counts.blogs],
                backgroundColor: ['#1B4242', '#5C8374', '#9EC8B9'],
                hoverBackgroundColor: ['#1B4242', '#5C8374', '#9EC8B9']
            }
        ]
    };

    const pieOptions = {
        maintainAspectRatio: false,
    };

    const barData = {
        labels: ['Products', 'Services', 'Blogs'],
        datasets: [
            {
                label: 'Count',
                data: [counts.products, counts.services, counts.blogs],
                backgroundColor: ['#1B4242', '#5C8374', '#9EC8B9'],
                barThickness: 50 // Adjust the bar thickness here
            }
        ]
    };

    const barOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5 // Adjust the step size for y-axis here
                }
            }
        }
    };

    return (
        <div className="container mx-auto p-6 bg-[#F5F5F5]">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 bg-[#FEFEFE] p-8 rounded-lg">
                <div className="card bg-[#1B4242] text-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Total Products</h2>
                    <p className="text-2xl">{counts.products}</p>
                </div>
                <div className="card bg-[#5C8374] text-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Total Services</h2>
                    <p className="text-2xl">{counts.services}</p>
                </div>
                <div className="card bg-[#9EC8B9] text-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Total Blogs</h2>
                    <p className="text-2xl">{counts.blogs}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='bg-[#FEFEFE] p-12 rounded-lg w-full' style={{ height: '400px', width: '100%' }}>
                    <h2 className="text-xl font-bold mb-2">Distribution</h2>
                    <Pie data={pieData} options={pieOptions} />
                </div>
                <div className='bg-[#FEFEFE] p-12 rounded-lg w-full' style={{ height: '400px', width: '100%' }}>
                    <h2 className="text-xl font-bold mb-2">Counts</h2>
                    <Bar data={barData} options={barOptions} />
                </div>
            </div>
        </div>
    );
};

export default DashboardAnalytics;
