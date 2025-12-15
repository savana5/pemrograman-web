import React, { useState } from 'react';

function ConditionalStyling() {
  const [status, setStatus] = useState('idle');
  const [isActive, setIsActive] = useState(false);

  // Conditional classes using the template literals
  const getStatusClasses = () => {
    const baseClasses = 'px-4 py-2 rounded font-semibold transition-colors mr-2';

    switch (status) {
      case 'success':
        return `${baseClasses} bg-green-500 text-white`;
      case 'error':
        return `${baseClasses} bg-red-500 text-white`;
      case 'loading':
        return `${baseClasses} bg-yellow-500 text-white`;
      default:
        return `${baseClasses} bg-gray-500 text-white`;
    }
  };

  // Conditional inline styles
  const getBoxStyle = () => ({
    padding: '15px',
    borderRadius: '6px',
    backgroundColor: isActive ? '#d4edda' : '#f8f9fa',
    border: isActive ? '2px solid #28a745' : '1px solid #dee2e6',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  });

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Status Buttons:</h3>
        
        {/* Button 1: Success State Setter */}
        <button 
          className={getStatusClasses()} 
          onClick={() => setStatus('success')}
        >
          Success
        </button>
        
        {/* Button 2: Error State Setter */}
        <button 
          className={getStatusClasses()}
          onClick={() => setStatus('error')}
        >
          Error
        </button>
        
        {/* Button 3: Loading State Setter */}
        <button 
          className={getStatusClasses()}
          onClick={() => setStatus('loading')}
        >
          Loading
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Toggle Box:</h3>
        
        {/* Div using conditional inline styles */}
        <div 
          style={getBoxStyle()}
          onClick={() => setIsActive(!isActive)}
        >
          <p>Click me to toggle active state</p>
          <p>Current: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
      </div>
    </div>
  );
}

export default ConditionalStyling;