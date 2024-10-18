import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Website Traffic</h3>
        <div className="mt-2">
          <p className="text-gray-700">Page Views: <span className="font-bold">1000</span></p>
          <p className="text-gray-700">Unique Visitors: <span className="font-bold">500</span></p>
        </div>
      </div>

      {/* Traffic Graph Placeholder */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Traffic Overview</h3>
        <div className="mt-2 h-40 border border-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Graph Placeholder</p>
        </div>
      </div>

      {/* Additional Statistics */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h4 className="font-bold">Top Pages</h4>
          <p className="text-gray-700">1. Home</p>
          <p className="text-gray-700">2. About Us</p>
          <p className="text-gray-700">3. Contact</p>
        </div>

        <div className="p-4 bg-green-100 rounded-lg shadow-md">
          <h4 className="font-bold">Recent Visitors</h4>
          <p className="text-gray-700">User1 - 10 mins ago</p>
          <p className="text-gray-700">User2 - 20 mins ago</p>
          <p className="text-gray-700">User3 - 30 mins ago</p>
        </div>

        <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
          <h4 className="font-bold">Actions</h4>
          <p className="text-gray-700">Total Sign-ups: <span className="font-bold">50</span></p>
          <p className="text-gray-700">Pending Requests: <span className="font-bold">5</span></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
