import React, { useState } from 'react';
import {
    Home,
    DollarSign,
    Tool,
    Bell,
    Calendar,
    FileText,
    MessageSquare,
    User,
    LogOut
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Sample data - In a real app, this would come from an API
    const notifications = [
        { id: 1, title: 'Rent Due', message: 'Your rent payment is due in 5 days', type: 'warning' },
        { id: 2, title: 'Maintenance Update', message: 'Your maintenance request #1234 has been completed', type: 'success' },
    ];

    const maintenanceRequests = [
        { id: 1, issue: 'Broken heater', status: 'In Progress', date: '2024-03-10' },
        { id: 2, issue: 'Leaking faucet', status: 'Pending', date: '2024-03-12' },
    ];

    const upcomingPayments = [
        { id: 1, type: 'Rent', amount: 750, dueDate: '2024-03-25' },
        { id: 2, type: 'Utilities', amount: 120, dueDate: '2024-03-20' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation Bar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-blue-600">RentEase</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Bell className="h-6 w-6 text-gray-500" />
                            <div className="flex items-center space-x-2">
                                <User className="h-6 w-6 text-gray-500" />
                                <span className="text-gray-700">John Doe</span>
                            </div>
                            <LogOut className="h-6 w-6 text-gray-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome back, John!</h2>
                    <p className="text-gray-600">Here's what's happening with your rental.</p>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <DollarSign className="h-5 w-5 text-blue-500" />
                                <span>Next Payment</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${upcomingPayments[0].amount}</div>
                            <p className="text-gray-600">Due on {upcomingPayments[0].dueDate}</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Pay Now
                            </button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Tool className="h-5 w-5 text-blue-500" />
                                <span>Maintenance</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{maintenanceRequests.length}</div>
                            <p className="text-gray-600">Active requests</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                New Request
                            </button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Bell className="h-5 w-5 text-blue-500" />
                                <span>Notifications</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{notifications.length}</div>
                            <p className="text-gray-600">Unread messages</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                View All
                            </button>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Maintenance Requests */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Maintenance Requests</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {maintenanceRequests.map(request => (
                                    <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <h4 className="font-medium">{request.issue}</h4>
                                            <p className="text-sm text-gray-600">{request.date}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            request.status === 'In Progress'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {request.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Upcoming Payments */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Payments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {upcomingPayments.map(payment => (
                                    <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <h4 className="font-medium">{payment.type}</h4>
                                            <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                                        </div>
                                        <span className="font-medium">${payment.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;