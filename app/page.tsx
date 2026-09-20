import Link from 'next/link';
import PageSection from '../components/PageSection';
import KategoriChip from '../components/KategoriChip';
import { getKategoriList, getKomikList, getAnggotaList, getPeminjamanList } from '../lib/api';

export default async function HalamanUtama() {
  const [kategoriList, komikList, anggotaList, peminjamanList] = await Promise.all([
    getKategoriList(),
    getKomikList(),
    getAnggotaList(),
    getPeminjamanList(),
  ]);

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <PageSection judul="Ringkasan">
        <div className="ringkasan-grid">
          <Link href="/komik" className="ringkasan-card">
            <strong>{komikList.length}</strong>
            <span>Komik</span>
          </Link>
          <Link href="/anggota" className="ringkasan-card">
            <strong>{anggotaList.length}</strong>
            <span>Anggota</span>
          </Link>
          <Link href="/peminjaman" className="ringkasan-card">
            <strong>{peminjamanList.length}</strong>
            <span>Peminjaman</span>
          </Link>
        </div>
      </PageSection>

      <PageSection judul="Kategori">
        <div className="daftar-kategori">
          {kategoriList.map((kategori) => (
            <KategoriChip key={kategori.id} nama={kategori.nama_kategori} />
          ))}
        </div>
      </PageSection>
    </main>
  );
}