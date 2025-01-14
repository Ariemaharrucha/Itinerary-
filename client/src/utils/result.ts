export interface ItinerarySession {
  Waktu: string;
  Kegiatan: string;
  Deskripsi: string;
  HargaTiket: string;
  JamOperasional: string;
  Transportasi: string;
}

export interface ItineraryDay {
  Hari: number;
  Pagi: ItinerarySession;
  Siang: ItinerarySession;
  Malam: ItinerarySession;
}

export interface ITravelPlan {
  InformasiUmum: string[];
  Catatan: string[];
  Itinerary: ItineraryDay[];
  EstimasiTotalBiaya: string[];
  SisaAnggaran: string[];
  TipsTambahan: string[];
}
