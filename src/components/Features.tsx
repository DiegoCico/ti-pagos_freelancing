import React from 'react';

export default function Features() {
  return (
    <section className="section s-border" id="solutions">
      <div className="two-col">
        <div>
          <div className="eyebrow r">Enterprise Rails</div>
          <h2 className="sh r">Enterprise rails<br />ready to deploy</h2>
        </div>
        <p className="slead r">Core infrastructure for banks and fintechs worldwide: payments, custody, compliance, and data — secure by default, built to scale.</p>
      </div>
      <div className="rails-grid">
        <div className="rail r">
          <div className="rail-n">01</div>
          <div className="rail-title">Crypto Payments Rail</div>
          <p className="rail-desc">Buy, sell, and settle digital assets with on/off-ramps, wallet orchestration, and instant FX — integrated into your existing stack.</p>
        </div>
        <div className="rail r">
          <div className="rail-n">02</div>
          <div className="rail-title">Blockchain Data Pipelines</div>
          <p className="rail-desc">On-chain ETL into your data warehouse, real-time analytics, and SLAs for risk, compliance, and finance teams.</p>
        </div>
        <div className="rail r">
          <div className="rail-n">03</div>
          <div className="rail-title">Compliance &amp; Security</div>
          <p className="rail-desc">KYC/AML/KYT modules, policy engines, hardware key custody, audit logs, and enterprise access controls.</p>
        </div>
        <div className="rail r">
          <div className="rail-n">04</div>
          <div className="rail-title">Exchanges &amp; Custody</div>
          <p className="rail-desc">Order routing, cold/hot wallet logic, withdrawal approvals, and automated alerts for operations teams.</p>
        </div>
      </div>
    </section>
  );
}