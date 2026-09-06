import Link from 'next/link';
import KomikCard from './KomikCard';
import type { Komik } from '../types';

interface DaftarKomikProps {
  komikList: Komik[];
}

function DaftarKomik({ komikList }: DaftarKomikProps) {
  return (
    <div className="grid-komik">
      {komikList.map((komik) => (
        <Link href={`/komik/${komik.id}`} key={komik.id} className="card-link">
          <KomikCard komik={komik} />
        </Link>
      ))}
    </div>
  );
}

export default DaftarKomik;