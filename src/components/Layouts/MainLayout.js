// src/components/layout/MainLayout.js
import React, { useState } from 'react';
import {
    Home,
    DollarSign,
    Tool,
    Bell,
    Calendar,
    FileText,
    Settings,
    User,
    LogOut,
    Menu,
    X,
    BookOpen,
    MessageSquare,
    Key
} from 'lucide-react';

// Navigation configuration
export const navigationItems = [
    { name: 'Dashboard', icon: Home, href: '/dashboard' },
    { name: 'Payments', icon: DollarSign, href: '/dashboard/payments' },
    { name: 'Maintenance', icon: Tool, href: '/dashboard/maintenance' },
    { name: 'Bookings', icon: Calendar, href: '/dashboard/bookings' },
    { name: 'Documents', icon: FileText, href: '/dashboard/documents' },
    { name: 'Messages', icon: MessageSquare, href: '/dashboard/messages' },
    { name: 'Profile', icon: User, href: '/dashboard/profile' },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [notifications] = useState([
        { id: 1, title: 'Rent Due', message: 'Your rent payment is due in 5 days' },
        { id: 2, title: 'Maintenance Update', message: 'Request #1234 completed' },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Desktop */}
            <aside className={`bg-white fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 lg:static lg:w-64 shadow-lg`}>

                {/* Sidebar Header */}
                <div className="h-16 flex items-center justify-between px-4 border-b">
                    <h1 className="text-2xl font-bold text-blue-600">RentEase</h1>
                    <button
                        className="lg:hidden text-gray-500 hover:text-gray-700"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <nav className="mt-6 px-4 space-y-2">
                    {navigationItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-sm rounded-lg text-gray-600 hover:bg-gray-50"
                        >
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.name}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top Navigation Bar */}
                <header className="bg-white h-16 shadow-sm flex items-center justify-between px-4 lg:px-8">
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-500 hover:text-gray-700"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Nav Right Items */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Bell className="h-6 w-6 text-gray-500 cursor-pointer" />
                            {notifications.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {notifications.length}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <User className="h-5 w-5 text-blue-600" />
                            </div>
                            <span className="hidden md:block text-sm font-medium text-gray-700">John Doe</span>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {children}
                </main>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default MainLayout;