// frontend/src/components/TradeHistory.tsx
import { Trade } from '../types/trading';

interface TradeHistoryProps {
  trades: Trade[];
}

const TradeHistory = ({ trades }: TradeHistoryProps) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Trade History</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Time</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left p-2">Lot Size</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{new Date(trade.timestamp).toLocaleString()}</td>
              <td className="p-2">{trade.type}</td>
              <td className="p-2">{trade.price.toFixed(4)}</td>
              <td className="p-2">{trade.lotSize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;