import { useState } from "react";

export default function SolarCalculator() {
  const [bill, setBill] = useState("");
  const [propertyType, setPropertyType] =
    useState("residential");

  const [roofSpace, setRoofSpace] =
    useState("medium");

  const [result, setResult] = useState(null);

  const calculateSavings = () => {
    const monthlyBill = parseFloat(bill);

    if (!monthlyBill || monthlyBill < 200) {
      alert(
        "Kripya valid electricity bill enter karein."
      );
      return;
    }

    // Estimated units consumed
    const units = monthlyBill / 8;

    // Recommended kW size
    let kw = Math.max(
      1,
      Math.round(units / 120)
    );

    // Roof space adjustment
    if (roofSpace === "small" && kw > 2) {
      kw = 2;
    }

    if (roofSpace === "medium" && kw > 5) {
      kw = 5;
    }

    // Commercial systems bigger
    if (
      propertyType === "commercial" &&
      kw < 5
    ) {
      kw += 2;
    }

    // Monthly savings
    const monthlySaving = Math.round(
      monthlyBill * 0.8
    );

    // Estimated system cost
    const systemCost = kw * 65000;

    // Government subsidy
    let subsidy = 0;

    if (kw <= 2) {
      subsidy = 30000;
    } else if (kw <= 3) {
      subsidy = 78000;
    } else {
      subsidy = 78000;
    }

    // Net cost
    const netCost = systemCost - subsidy;

    // Payback period
    const payback = (
      netCost /
      (monthlySaving * 12)
    ).toFixed(1);

    // CO2 reduction estimate
    const co2Reduction = (
      kw * 1.4
    ).toFixed(1);

    setResult({
      kw,
      monthlySaving,
      systemCost,
      subsidy,
      netCost,
      payback,
      co2Reduction,
    });
  };

  return (
    <section
      className="section section-alt"
      id="solar-calc"
    >
      <div className="section-header">
        <span className="section-tag">
          Savings Calculator
        </span>

        <h2>
          Aap Kitna Bachayenge?
        </h2>

        <p>
          Apna monthly bill daalo aur
          dekhein solar se kitni savings
          hogi.
        </p>
      </div>

      <div className="calc-wrap">
        <div className="calc-header">
          <h3>
            ☀️ Solar Savings Calculator
          </h3>

          <p>
            Rough estimate — actual quote
            site survey ke baad milega
          </p>
        </div>

        <div className="calc-body">
          <div className="calc-grid">
            <div className="calc-field">
              <label>
                Monthly Electricity Bill (₹)
              </label>

              <input
                type="number"
                placeholder="e.g. 2500"
                value={bill}
                onChange={(e) =>
                  setBill(e.target.value)
                }
              />
            </div>

            <div className="calc-field">
              <label>
                Property Type
              </label>

              <select
                value={propertyType}
                onChange={(e) =>
                  setPropertyType(
                    e.target.value
                  )
                }
              >
                <option value="residential">
                  Ghar (Residential)
                </option>

                <option value="commercial">
                  Dukaan / Office
                </option>
              </select>
            </div>
          </div>

          <div className="calc-field">
            <label>
              Roof Space Available
            </label>

            <select
              value={roofSpace}
              onChange={(e) =>
                setRoofSpace(
                  e.target.value
                )
              }
            >
              <option value="small">
                Chhoti (100-200 sqft)
              </option>

              <option value="medium">
                Medium (200-400 sqft)
              </option>

              <option value="large">
                Badi (400+ sqft)
              </option>
            </select>
          </div>

          <button
            className="btn-green"
            onClick={calculateSavings}
          >
            Calculate My Savings →
          </button>

          {result && (
            <div className="calc-result show">
              <p className="calc-result-title">
                Aapke liye estimated solar
                plan:
              </p>

              <div className="calc-result-grid">
                <div className="calc-res-item">
                  <span className="calc-res-num">
                    {result.kw}kW
                  </span>

                  <span className="calc-res-label">
                    Recommended System
                  </span>
                </div>

                <div className="calc-res-item">
                  <span className="calc-res-num">
                    ₹
                    {result.monthlySaving.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                  <span className="calc-res-label">
                    Monthly Savings
                  </span>
                </div>

                <div className="calc-res-item">
                  <span className="calc-res-num">
                    {result.payback} yr
                  </span>

                  <span className="calc-res-label">
                    Payback Period
                  </span>
                </div>
              </div>

              <div
                style={{
                  marginTop: "24px",
                }}
              >
                <div className="calc-grid">
                  <div className="calc-res-item">
                    <span className="calc-res-num">
                      ₹
                      {result.systemCost.toLocaleString(
                        "en-IN"
                      )}
                    </span>

                    <span className="calc-res-label">
                      Total System Cost
                    </span>
                  </div>

                  <div className="calc-res-item">
                    <span className="calc-res-num">
                      ₹
                      {result.subsidy.toLocaleString(
                        "en-IN"
                      )}
                    </span>

                    <span className="calc-res-label">
                      Govt Subsidy
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  background:
                    "var(--green-pale)",
                  borderRadius: "12px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "8px",
                  }}
                >
                  🌱 Estimated CO₂ Reduction:
                  <strong>
                    {" "}
                    {result.co2Reduction} tons/year
                  </strong>
                </p>

                <p
                  style={{
                    fontSize: "13px",
                    color:
                      "var(--text-muted)",
                  }}
                >
                  *Yeh ek rough estimate hai.
                  Final quotation free site
                  survey ke baad diya jayega.
                </p>
              </div>

              <div className="calc-cta">
                <a
                  href={`https://wa.me/919999999999?text=Hello Vidya Solar, mujhe ${result.kw}kW solar system ke baare mein information chahiye`}
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    marginTop: "20px",
                    textDecoration: "none",
                  }}
                >
                  💬 Free Quote Maangein
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}