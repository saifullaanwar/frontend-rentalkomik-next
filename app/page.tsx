import KomikPilihan from '../components/KomikPilihan';
import DaftarKomik from '../components/DaftarKomik';
import { getKomikList, getKomikById } from '../lib/api';

export default async function HomePage() {
  const [daftarKomik, komikPilihan] = await Promise.all([
    getKomikList(),
    getKomikById('1'),
  ]);

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1rem 2rem 1rem' }}>
      <KomikPilihan komik={komikPilihan} />
      <h2 style={{ marginBottom: '1rem' }}>Daftar Komik</h2>
      <DaftarKomik komikList={daftarKomik} />
    </main>
  );
}