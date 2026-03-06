function Metrics() {
  return (
    <div className="metrics">
      <div className="metric r"><div className="metric-label">Throughput</div><div className="metric-val">18,900<sub> TPS</sub></div></div>
      <div className="metric r"><div className="metric-label">Latency (p95)</div><div className="metric-val">32<sub> ms</sub></div></div>
      <div className="metric r"><div className="metric-label">Uptime (90d)</div><div className="metric-val">99.98<sub>%</sub></div></div>
      <div className="metric r"><div className="metric-label">Cost per Tx</div><div className="metric-val">$0.0007</div></div>
    </div>
  );
}

export default Metrics;
