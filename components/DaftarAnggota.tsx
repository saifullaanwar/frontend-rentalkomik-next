// components/DaftarAnggota.tsx
import AnggotaCard from './AnggotaCard';
import type { Anggota } from '../types';
interface DaftarAnggotaProps {
    anggotaList: Anggota[];
}
function DaftarAnggota({ anggotaList }: DaftarAnggotaProps) {
    return (
        <div className="grid-anggota">
            {anggotaList.map((anggota) => (
                <AnggotaCard key={anggota.id} anggota={anggota} />
            ))}
        </div>
    );
}
export default DaftarAnggota;