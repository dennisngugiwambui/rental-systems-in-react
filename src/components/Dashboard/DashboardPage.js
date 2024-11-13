// src/components/dashboard/DashboardPage.js
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DashboardPage = () => {
    return (
        <MainLayout>
            {/* Your dashboard content here */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                <p className="text-gray-600">Welcome to your student tenant portal</p>
            </div>
            {/* Rest of your dashboard content */}
        </MainLayout>
    );
};

export default DashboardPage;