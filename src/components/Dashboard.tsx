const stats = [
  { label: 'Open Work Items', value: '124' },
  { label: 'Queued Items', value: '57' },
  { label: 'Exceptions', value: '6' },
  { label: 'Audits Pending', value: '12' },
];

export function Dashboard() {
  return (
    <section>
      <h2>Dashboard Overview</h2>
      <p>
        A quick snapshot of your BIM pipeline health. Use the navigation above to drill into
        specific sections of the application.
      </p>
      <div className="card-grid" style={{ marginTop: '1.5rem' }}>
        {stats.map((stat) => (
          <article key={stat.label} className="card">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
