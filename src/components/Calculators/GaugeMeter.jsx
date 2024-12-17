import {
  GaugeContainer,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle == null) return null;

  const pointerEnd = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <path
        d={`M ${cx} ${cy} L ${pointerEnd.x} ${pointerEnd.y}`}
        stroke="red"
        strokeWidth={4}
      />
      <circle cx={cx} cy={cy} r={6} fill="red" />
    </g>
  );
}

export default function BMIGaugeMeter({ value }) {
  const category =
    value < 16
      ? "Severe Thinness"
      : value < 17
      ? "Moderate Thinness"
      : value < 18.5
      ? "Mild Thinness"
      : value < 25
      ? "Normal weight"
      : value < 30
      ? "Overweight"
      : value < 35
      ? "Obese Class I"
      : value < 40
      ? "Obese Class II"
      : "Obese Class III";

  return (
    <div
      style={{
        textAlign: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <GaugeContainer
        value={value}
        valueMin={0}
        valueMax={value < 40 ? 40 : value}
        height={100}
        width={200}
        startAngle={-110}
        endAngle={110}
      >
        <GaugeReferenceArc
          startValue={16}
          endValue={40}
          style={{
            stroke: "none",
            fill: "#fff",
            strokeWidth: 10,
          }}
        />
        <GaugePointer />
      </GaugeContainer>
      <p>Category: {category}</p>
    </div>
  );
}
