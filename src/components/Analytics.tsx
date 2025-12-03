const metrics = [
  { label: 'Model sync time', value: '14m 21s' },
  { label: 'Validation success rate', value: '93%' },
  { label: 'Average queue depth', value: '22 items' },
];

export function Analytics() {
  return (
    <section>
      <h2>Analytics</h2>
      <p>Lightweight operational metrics to help you spot trends.</p>
      <div className="card-grid" style={{ marginTop: '1.5rem' }}>
        {metrics.map((metric) => (
          <article key={metric.label} className="card">
            <h2>{metric.value}</h2>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
