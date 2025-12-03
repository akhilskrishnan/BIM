import { useState } from 'react';

const MOCK_RESULTS = [
  'IfcWall - Level 2',
  'IfcSpace - Mechanical Room',
  'IfcDoor - North Entry',
];

export function Search() {
  const [query, setQuery] = useState('');

  const results = query
    ? MOCK_RESULTS.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    : MOCK_RESULTS;

  return (
    <section>
      <h2>Search</h2>
      <p>Find assets, work items, or exceptions across the BIM dataset.</p>
      <div style={{ marginTop: '1rem' }}>
        <input
          aria-label="Search"
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          style={{
            padding: '0.6rem 0.8rem',
            width: '320px',
            maxWidth: '100%',
            borderRadius: '8px',
            border: '1px solid var(--border)',
          }}
        />
      </div>
      <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem' }}>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
