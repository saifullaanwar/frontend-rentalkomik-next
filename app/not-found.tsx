import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ maxWidth: '600px', margin: '4rem auto', textAlign: 'center', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '3.5rem', color: '#0f172a', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#475569' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Maaf, data komik atau halaman yang kamu cari tidak tersedia.
      </p>
      <Link href="/" style={{ padding: '0.6rem 1.2rem', backgroundColor: '#1e293b', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 500 }}>
        Kembali ke Beranda
      </Link>
    </main>
  );
}