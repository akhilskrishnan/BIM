const queues = [
  { name: 'Pre-processing', status: 'Healthy', items: 18 },
  { name: 'Modeling', status: 'Healthy', items: 23 },
  { name: 'Validation', status: 'Degraded', items: 9 },
];

export function Queues() {
  return (
    <section>
      <h2>Queues</h2>
      <p>Track pipeline throughput and spot bottlenecks early.</p>
      <table className="table-placeholder" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Queued Items</th>
          </tr>
        </thead>
        <tbody>
          {queues.map((queue) => (
            <tr key={queue.name}>
              <td>{queue.name}</td>
              <td>{queue.status}</td>
              <td>{queue.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
