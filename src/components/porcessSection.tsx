'use client';

import React from 'react';
import {
  Gauge,
  RefreshCw,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Target,
  Terminal,
  Code,
  Activity,
  Cpu,
} from 'lucide-react';

const cardWrapper = "bg-black text-white p-6 rounded-3xl shadow-lg min-h-[28rem] flex flex-col justify-between";

export default function ProcessSection() {
  return (
    <div className=" py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        <DiscoveryAnalysisProcess />
        <DevelopmentTestProcess />
        <LaunchMaintainProcess />
      </div>
    </div>
  );
}

function LaunchMaintainProcess() {
  return (
    <div className={cardWrapper}>
      <div className="bg-[#1a1a1a] rounded-2xl p-4 space-y-4 flex-1 flex flex-col">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        <div className="flex flex-1 pt-2">
          <div className="w-1/2 space-y-3">
            {[{ icon: ShieldCheck, label: 'Security' }, { icon: Gauge, label: 'Efficiency', active: true }, { icon: Zap, label: 'Speed' }, { icon: CheckCircle2, label: 'Accuracy' }].map(({ icon: Icon, label, active }) => (
              <div key={label} className={`flex items-center space-x-2 ${active ? 'bg-[#333] px-2 py-1 rounded-lg' : ''}`}>
                <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-gray-400'}`} />
                <span className={`text-sm ${active ? 'font-medium' : 'text-gray-400'}`}>{label}</span>
              </div>
            ))}
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-sm text-gray-300">Status:</span>
            <RefreshCw className="animate-spin w-6 h-6 text-white" />
            <div className="w-3/4 h-1 bg-gray-600 rounded-full">
              <div className="w-2/3 h-full bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-xs text-gray-400">Deploying updates...</span>
          </div>
        </div>

        {/* Additional Detail Section */}
        <div className="bg-black/40 rounded-lg p-2 text-xs text-gray-400 mt-4">
          <p>Last Deployed: <span className="text-white">12 mins ago</span></p>
          <p>Uptime: <span className="text-white">99.98%</span></p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-semibold">Launch & Maintain</h3>
        <p className="text-gray-400 text-sm mt-2">
          We deploy your solution seamlessly and ensure continuous performance with proactive monitoring.
        </p>
      </div>
    </div>
  );
}

function DevelopmentTestProcess() {
  return (
    <div className={cardWrapper}>
      <div className="bg-[#1a1a1a] rounded-2xl px-4 pt-3 pb-4 font-mono text-sm flex-1 flex flex-col">
        <div className="flex space-x-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <pre className="text-left whitespace-pre-wrap text-gray-300 flex-1">
<span className="text-purple-400">class</span> Sampling(layers.Layer):
  <span className="text-yellow-300">"""Samples z from (mean, log_var)."""</span>

  <span className="text-purple-400">def</span> <span className="text-blue-400">call</span>(self, inputs):
    mean, log_var = inputs
    batch = tf.shape(mean)[0]
    dim = tf.shape(mean)[1]
    epsilon = tf.random.normal(shape=(batch, dim))
    return mean + tf.exp(0.5 * log_var) * epsilon
        </pre>

        {/* Additional Detail Section */}
        <div className="bg-black/40 rounded-lg p-2 text-xs text-gray-400 mt-4">
          <p>Tests Passed: <span className="text-white">97%</span></p>
          <p>Build Time: <span className="text-white">12s</span></p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-semibold">Development & Test</h3>
        <p className="text-gray-400 text-sm mt-2">
          We build tailored solutions and rigorously test them to ensure they’re rock-solid before release.
        </p>
      </div>
    </div>
  );
}

function DiscoveryAnalysisProcess() {
  return (
    <div className={cardWrapper}>
      <div className="bg-[#1a1a1a] rounded-2xl p-4 flex-1 flex flex-col justify-between">
        <div className="flex space-x-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-end justify-between space-x-1 h-16">
              <div className="w-2 bg-gray-500 h-4 rounded-sm"></div>
              <div className="w-2 bg-gray-500 h-6 rounded-sm"></div>
              <div className="w-2 bg-indigo-500 h-12 rounded-sm animate-pulse"></div>
              <div className="w-2 bg-gray-500 h-8 rounded-sm"></div>
            </div>

            <div className="space-y-1">
              <div className="w-full h-1.5 bg-gray-600 rounded"></div>
              <div className="w-full h-1.5 bg-gray-600 rounded"></div>
              <div className="w-2/3 h-1.5 bg-gray-600 rounded"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <Target className="w-16 h-16 text-gray-400" />
              <div className="absolute top-1 left-1 w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Additional Detail Section */}
        <div className="bg-black/40 rounded-lg p-2 text-xs text-gray-400 mt-4">
          <p>Last Insight: <span className="text-white">User churn rising</span></p>
          <p>Key Focus: <span className="text-white">Product-Market Fit</span></p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-semibold">Discovery & Analysis</h3>
        <p className="text-gray-400 text-sm mt-2">
          We explore your product landscape and uncover actionable strategies to guide long-term direction.
        </p>
      </div>
    </div>
  );
}
