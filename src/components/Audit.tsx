const audits = [
  { id: 'A-301', actor: 'Service Account', action: 'Published model', timestamp: '2024-03-02 10:24' },
  { id: 'A-302', actor: 'Alex Turner', action: 'Approved exception', timestamp: '2024-03-02 11:05' },
];

export function Audit() {
  return (
    <section>
      <h2>Audit Log</h2>
      <p>Recent events recorded for compliance and traceability.</p>
      <table className="table-placeholder" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Actor</th>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {audits.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.actor}</td>
              <td>{entry.action}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
