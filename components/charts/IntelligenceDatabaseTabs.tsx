'use client'

import { useState } from 'react'
import CustomerIntelligenceDatabase from './CustomerIntelligenceDatabase'
import DistributorsIntelligence from './DistributorsIntelligence'
import CustomerIntelligenceSimple from './CustomerIntelligenceSimple'

interface IntelligenceDatabaseTabsProps {
  title?: string
  height?: number
}

export default function IntelligenceDatabaseTabs({ title = "Intelligence Database", height }: IntelligenceDatabaseTabsProps) {
  const [activeTab, setActiveTab] = useState<'customer' | 'distributor' | 'customer-simple'>('customer')

  return (
    <div className="w-full">
      {/* Main Title */}
      <h2 className="text-xl font-bold text-black mb-6">{title}</h2>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('customer')}
            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'customer'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-black hover:text-black hover:border-gray-300'
            }`}
          >
            Customer Intelligence
          </button>
          <button
            onClick={() => setActiveTab('distributor')}
            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'distributor'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-black hover:text-black hover:border-gray-300'
            }`}
          >
            Distributor Intelligence
          </button>
          <button
            onClick={() => setActiveTab('customer-simple')}
            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'customer-simple'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-black hover:text-black hover:border-gray-300'
            }`}
          >
            Customer Intelligence
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'customer' && (
          <CustomerIntelligenceDatabase />
        )}
        {activeTab === 'distributor' && (
          <DistributorsIntelligence
            title=""
            height={height}
          />
        )}
        {activeTab === 'customer-simple' && (
          <CustomerIntelligenceSimple
            title=""
            height={height}
          />
        )}
      </div>
    </div>
  )
}
