function Ticker() {
  const items = [
    { symbol: 'BTC', value: '97,420.00', change: '▲ 0.9%', up: true },
    { symbol: 'ETH', value: '3,280.14', change: '▼ 0.9%', up: false },
    { symbol: 'SOL', value: '172.46', change: '▲ 1.1%', up: true },
    { symbol: 'USDC', value: '1.0001', change: '▼ 0.01%', up: false },
    { symbol: 'MATIC', value: '0.7230', change: '▲ 1.3%', up: true },
    { symbol: 'LINK', value: '14.803', change: '▼ 1.3%', up: false },
    { symbol: 'AVAX', value: '38.615', change: '▲ 1.5%', up: true },
    { symbol: 'DOT', value: '7.422', change: '▼ 1.5%', up: false },
  ];

  return (
    <div className="ticker-bar">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="ti">
            <span className="ts">{item.symbol}</span>
            <span className="tv">{item.value}</span>
            <span className={item.up ? 'tup' : 'tdn'}>{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
