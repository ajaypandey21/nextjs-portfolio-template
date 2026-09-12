type StatBlockProps = {
  label: string;
  value: string;
  index: number;
};

export function StatBlock({ label, value, index }: StatBlockProps) {
  return (
    <div className="stat-block">
      <span className="stat-block__index">0{index + 1}</span>
      <p>
        <span>{label}</span>
        <strong>{value}</strong>
      </p>
    </div>
  );
}
