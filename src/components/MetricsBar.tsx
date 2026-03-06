import React from 'react';

export default function MetricsBar() {
  return (
    <div className="mbar-row">
      <div className="mbar r">
        <div className="mbar-label">Throughput</div>
        <div className="mbar-val">18,900<sub> TPS</sub></div>
      </div>
      <div className="mbar r">
        <div className="mbar-label">Latency (p95)</div>
        <div className="mbar-val">32<sub> ms</sub></div>
      </div>
      <div className="mbar r">
        <div className="mbar-label">Uptime (90d)</div>
        <div className="mbar-val">99.98<sub>%</sub></div>
      </div>
      <div className="mbar r">
        <div className="mbar-label">Cost per Tx</div>
        <div className="mbar-val">$0.0007</div>
      </div>
    </div>
  );
}