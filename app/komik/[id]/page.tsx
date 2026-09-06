import Link from 'next/link';
import { notFound } from 'next/navigation';
import StatusBadge from '../../../components/StatusBadge';
import KategoriChip from '../../../components/KategoriChip';
import { getKomikById } from '../../../lib/api';

interface DetailKomikProps {
  params: Promise<{ id: string }>;
}

export default async function DetailKomikPage({ params }: DetailKomikProps) {
  const { id } = await params;
  const komik = await getKomikById(id);

  if (!komik) {
    notFound(); // Mengarahkan otomatis ke app/not-found.tsx
  }

  return (
    <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
      <Link href="/komik">&larr; Kembali ke Daftar Komik</Link>
      <div style={{ marginTop: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff' }}>
        <h2>{komik.judul}</h2>
        <p>Penulis: {komik.penulis}</p>
        <p>Kategori: <KategoriChip nama={komik.nama_kategori} /></p>
        <p>Stok: {komik.stok}</p>
        <div style={{ marginTop: '1rem' }}>
          <StatusBadge status={komik.status} />
        </div>
      </div>
    </main>
  );
}