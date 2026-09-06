import TabelPeminjaman from '../../components/TabelPeminjaman';
import { getPeminjamanList } from '../../lib/api';

export default async function PeminjamanPage() {
  const daftarPeminjaman = await getPeminjamanList();

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Daftar Peminjaman</h2>
      <TabelPeminjaman peminjamanList={daftarPeminjaman} />
    </main>
  );
}