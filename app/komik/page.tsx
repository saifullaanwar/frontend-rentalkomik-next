import DaftarKomik from '../../components/DaftarKomik';
import { getKomikList } from '../../lib/api';

export default async function KomikPage() {
  const komikList = await getKomikList();

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h2>Daftar Komik</h2>
      <DaftarKomik komikList={komikList} />
    </main>
  );
}