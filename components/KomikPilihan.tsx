import { Komik } from '../types';
import StatusBadge from './StatusBadge';

interface Props {
  komik: Komik | null;
}

export default function KomikPilihan({ komik }: Props) {
  if (!komik) return null;

  return (
    <div style={{ border: '2px solid #3b82f6', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', backgroundColor: '#eff6ff' }}>
      <h2 style={{ marginTop: 0, color: '#1e3a8a' }}>Komik Pilihan Minggu Ini</h2>
      <h3 style={{ margin: '0.5rem 0' }}>{komik.judul}</h3>
      <p style={{ margin: 0, color: '#4b5563' }}>Penulis: {komik.penulis}</p>
      <div style={{ marginTop: '0.5rem' }}>
        Status: <StatusBadge status={komik.status} />
      </div>
    </div>
  );
}