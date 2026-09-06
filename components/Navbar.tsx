import Link from 'next/link';
import Navigasi from './Navigasi';

export default function Navbar() {
  return (
    <header style={{ background: '#1e293b', padding: '1rem', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            RentalKomik Mini
          </Link>
        </h1>
        <Navigasi />
      </div>
    </header>
  );
}