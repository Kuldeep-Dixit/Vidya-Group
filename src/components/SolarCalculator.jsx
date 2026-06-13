import { useState } from 'react';

export default function SolarCalculator() {
  const [bill,      setBill]      = useState('');
  const [proptype,  setProptype]  = useState('residential');
  const [roofspace, setRoofspace] = useState('small');
  const [result,    setResult]    = useState(null);
  const [error,     setError]     = useState('');

  const calculate = () => {
    const b = parseFloat(bill) || 0;

    if (b < 200) {
      // Inline error instead of alert() — alert() is silently
      // blocked inside many iframe / website-builder previews,
      // which made the button look like it did nothing.
      setError('Monthly electricity bill daalo (minimum ₹200)');
      setResult(null);
      return;
    }

    setError('');

    const kw      = Math.max(1, Math.round((b / 8) / 120));
    const saving  = Math.round(b * 0.8);
    const cost    = kw * 65000;
    const subsidy = kw <= 2 ? 30000 : 78000;
    const payback = ((cost - subsidy) / (saving * 12)).toFixed(1);

    setResult({
      size:    `${kw}kW`,
      saving:  `₹${saving.toLocaleString('en-IN')}`,
      payback: `${payback} yr`,
    });
  };

  return (
    <div className="calc-wrap">
      <div className="calc-header">
        <h3>☀️ Solar Savings Calculator</h3>
        <p>Rough estimate hai — exact quote ke liye call karo.</p>
      </div>

      <div className="calc-body">
        <div className="calc-grid-2">
          <div className="calc-field">
            <label>Monthly Bijli Bill (₹)</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => {
                setBill(e.target.value);
                if (error) setError('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') calculate();
              }}
              placeholder="e.g. 2000"
              min="0"
            />
          </div>
          <div className="calc-field">
            <label>Property Type</label>
            <select value={proptype} onChange={(e) => setProptype(e.target.value)}>
              <option value="residential">Home (Residential)</option>
              <option value="commercial">Shop / Office</option>
            </select>
          </div>
        </div>

        <div className="calc-field">
          <label>Available Roof Space</label>
          <select value={roofspace} onChange={(e) => setRoofspace(e.target.value)}>
            <option value="small">Small  (200–400 sqft)</option>
            <option value="medium">Medium (400–600 sqft)</option>
            <option value="large">Large  (600+ sqft)</option>
          </select>
        </div>

        {/* Inline error message — replaces alert() */}
        {error && (
          <p style={{
            color: '#c0392b',
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 14,
            padding: '10px 14px',
            background: '#fdecea',
            border: '1px solid #f5c2bc',
            borderRadius: 'var(--radius-sm)',
          }}>
            ⚠️ {error}
          </p>
        )}

        <button type="button" className="btn-green" onClick={calculate}>
          Savings Calculate Karo →
        </button>


        {result && (
          <div>
            <p className="calc-result-title">Aapke liye estimated solar plan:</p>
            <div className="calc-result-grid">
              <div className="calc-res-item">
                <span className="calc-res-num">{result.size}</span>
                <span className="calc-res-label">Recommended System</span>
              </div>
              <div className="calc-res-item">
                <span className="calc-res-num">{result.saving}</span>
                <span className="calc-res-label">Monthly Savings</span>
              </div>
              <div className="calc-res-item">
                <span className="calc-res-num">{result.payback}</span>
                <span className="calc-res-label">Payback Period</span>
              </div>
            </div>
            <div className="calc-cta">
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 10 }}>
                *Yeh rough estimate hai. Exact quote ke liye contact karo.
              </p>
              <a
                href="https://wa.me/918178453197?text=I%20need%20a%20free%20solar%20quote"
                className="btn-primary"
                style={{ display: 'inline-flex', textDecoration: 'none' }}
              >
                💬 WhatsApp pe Free Quote Lo
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
