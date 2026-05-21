import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Javi Air Conditioning | GILBERT & MESA AZ';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#090d16',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
          padding: '40px',
        }}
      >
        {/* Cool modern layout border frame */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: '2px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '24px',
            pointerEvents: 'none',
          }}
        />

        {/* Brand visual icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '30px',
            background: 'rgba(14, 165, 233, 0.1)',
            border: '3px solid #0ea5e9',
            marginBottom: '32px',
          }}
        >
          {/* Custom SVG Snowflake/Breeze HVAC Symbol */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
          </svg>
        </div>

        <h1
          style={{
            fontSize: '56px',
            fontWeight: 800,
            margin: '0 0 16px 0',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#38bdf8',
          }}
        >
          Javi Air Conditioning
        </h1>

        <p
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            maxWidth: '820px',
            textAlign: 'center',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          13+ Years of Honest Residential & Commercial HVAC Diagnostics & Repair
          across Gilbert, Mesa, Chandler & Tempe AZ. No Sales Speeches.
        </p>

        {/* Trust Badges */}
        <div
          style={{
            display: 'flex',
            marginTop: '36px',
            gap: '16px',
          }}
        >
          <div
            style={{
              background: 'rgba(14, 165, 233, 0.15)',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              borderRadius: '8px',
              padding: '6px 18px',
              color: '#3aeeff',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            ★ 5.0 Star Honest Service
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '6px 18px',
              color: '#e2e8f0',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            ROC #346850
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
