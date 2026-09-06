import DaftarAnggota from '../../components/DaftarAnggota';
import { getAnggotaList } from '../../lib/api';

export default async function AnggotaPage() {
  const daftarAnggota = await getAnggotaList();

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Daftar Anggota</h2>
      <DaftarAnggota anggotaList={daftarAnggota} />
    </main>
  );
}