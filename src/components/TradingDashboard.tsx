// frontend/src/components/TradingDashboard.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TradingStatus } from '../types/trading';
import TradeHistory from './TradeHistory';

const TradingDashboard = () => {
  const [status, setStatus] = useState<TradingStatus | null>(null);

  const fetchStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/trading-status');
      setStatus(response.data);
    } catch (error) {
      console.error('Error fetching trading status:', error);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // Cập nhật mỗi 5 giây
    return () => clearInterval(interval);
  }, []);

  if (!status) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Forex AI Trading Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl">${status.balance.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Current Price</h2>
          <p className="text-2xl">{status.currentPrice.toFixed(4)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Position</h2>
          <p className="text-2xl">
            {status.position === 1 ? 'Long' : status.position === -1 ? 'Short' : 'None'}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Last Prediction</h2>
        <p className={status.lastPrediction === 1 ? 'text-green-600' : 'text-red-600'}>
          {status.lastPrediction === 1 ? 'Bullish' : 'Bearish'}
        </p>
      </div>

      <TradeHistory trades={status.trades} />
    </div>
  );
};

export default TradingDashboard;