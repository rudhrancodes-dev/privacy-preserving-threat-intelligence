import React from 'react';
import { Shield, Activity, Lock, AlertTriangle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Shield className="mr-3 text-blue-600" size={32} />
          Privacy-Preserving Threat Intelligence Dashboard
        </h1>
        <p className="text-gray-600">Real-time anomaly detection with Differential Privacy</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Activity className="text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">System Status</h2>
          </div>
          <p className="text-4xl font-bold text-green-600">Active</p>
          <p className="text-gray-500 mt-2">ML Engine: Running</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Lock className="text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Privacy Layer</h2>
          </div>
          <p className="text-gray-600">Epsilon ($\epsilon$): 1.0</p>
          <p className="text-gray-500 mt-2">Status: Laplace Noise Applied</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-red-500 mr-2" />
            <h2 className="text-xl font-semibold">Anomalies Detected</h2>
          </div>
          <p className="text-4xl font-bold text-red-600">0</p>
          <p className="text-gray-500 mt-2">Last 24 Hours</p>
        </div>
      </main>
      
      <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          This dashboard provides a visualization layer for the Privacy-Preserving Threat Intelligence engine.
          By utilizing Isolation Forests for anomaly detection and Differential Privacy for data sanitization,
          we ensure that sensitive network metadata is analyzed without compromising individual privacy.
        </p>
      </section>
    </div>
  );
}

export default App;
