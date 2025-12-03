const exceptions = [
  { id: 'E-1042', summary: 'Geometry clash detected', severity: 'High' },
  { id: 'E-1043', summary: 'Missing metadata on HVAC assets', severity: 'Medium' },
];

export function Exceptions() {
  return (
    <section>
      <h2>Exceptions</h2>
      <p>Investigate and resolve problems surfaced during processing.</p>
      <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem' }}>
        {exceptions.map((item) => (
          <li key={item.id}>
            <strong>{item.id}:</strong> {item.summary} ({item.severity})
          </li>
        ))}
      </ul>
    </section>
  );
}
