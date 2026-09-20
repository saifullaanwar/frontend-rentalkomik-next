import type { Kategori, Komik, Anggota, Peminjaman } from '../types';

const API_BASE_URL = process.env.API_BASE_URL as string;
const API_TOKEN = process.env.API_TOKEN as string;

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Gagal mengambil data dari ${endpoint} (status ${response.status})`);
  }

  const hasil = await response.json();
  return hasil.data as T;
}

// Kategori jarang berubah — simpan cache 60 detik
export async function getKategoriList(): Promise<Kategori[]> {
  const response = await fetch(`${API_BASE_URL}/kategori`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
    next: { revalidate: 60 },
  });
  const hasil = await response.json();
  return hasil.data as Kategori[];
}

// Komik bisa berubah stoknya — simpan cache 15 detik
export async function getKomikList(): Promise<Komik[]> {
  const response = await fetch(`${API_BASE_URL}/komik`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
    next: { revalidate: 15 },
  });
  const hasil = await response.json();
  return hasil.data as Komik[];
}

export async function getKomikById(id: string): Promise<Komik | null> {
  try {
    return await fetchAPI<Komik>(`/komik/${id}`);
  } catch (err) {
    return null;
  }
}

export function getAnggotaList(): Promise<Anggota[]> {
  return fetchAPI<Anggota[]>('/anggota');
}

export function getPeminjamanList(): Promise<Peminjaman[]> {
  return fetchAPI<Peminjaman[]>('/peminjaman');
}