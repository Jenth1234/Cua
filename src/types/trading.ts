// frontend/src/types/trading.ts
export interface Trade {
    timestamp: string;
    type: 'buy' | 'sell' | 'close';
    price: number;
    lotSize: number;
  }
  
  export interface TradingStatus {
    balance: number;
    position: number;
    currentPrice: number;
    lastPrediction: number;
    trades: Trade[];
  }