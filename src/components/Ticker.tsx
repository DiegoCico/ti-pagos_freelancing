import React from 'react';

export default function Ticker() {
  const cryptoData = [
    { symbol: 'BTC', price: '$97,420.00', change: '+0.9%', up: true },
    { symbol: 'ETH', price: '$3,280.14', change: '−0.9%', up: false },
    { symbol: 'SOL', price: '$172.46', change: '+1.1%', up: true },
    { symbol: 'USDC', price: '$1.0001', change: '−0.01%', up: false },
    { symbol: 'MATIC', price: '$0.7230', change: '+1.3%', up: true },
    { symbol: 'LINK', price: '$14.803', change: '−1.3%', up: false },
    { symbol: 'AVAX', price: '$38.615', change: '+1.5%', up: true },
    { symbol: 'DOT', price: '$7.422', change: '−1.5%', up: false },
  ];

  // Duplicate the data for seamless scrolling
  const duplicatedData = [...cryptoData, ...cryptoData];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {duplicatedData.map((crypto, index) => (
          <div key={index} className="ti">
            <span className="ts">{crypto.symbol}</span>
            <span className="tv">{crypto.price}</span>
            <span className={crypto.up ? 'tup' : 'tdn'}>{crypto.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}