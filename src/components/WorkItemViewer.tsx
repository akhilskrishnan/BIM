import { useParams } from 'react-router-dom';

const workItems = [
  {
    id: '1',
    title: 'Update building envelope model',
    owner: 'Alex Turner',
    status: 'In Progress',
    description: 'Refine curtain wall details and validate against updated structural grid.',
  },
];

export function WorkItemViewer() {
  const { id } = useParams<{ id: string }>();
  const workItem = workItems.find((item) => item.id === id) ?? workItems[0];

  return (
    <section>
      <h2>Work Item #{workItem.id}</h2>
      <p>{workItem.title}</p>
      <div className="card" style={{ marginTop: '1rem' }}>
        <p><strong>Owner:</strong> {workItem.owner}</p>
        <p><strong>Status:</strong> {workItem.status}</p>
        <p style={{ marginTop: '0.5rem' }}>{workItem.description}</p>
      </div>
    </section>
  );
}
