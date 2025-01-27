import useFormState from "@/store/useStore";
import { ItineraryDay, ItinerarySession } from "@/utils/result";
import { jsPDF } from "jspdf";

export const usePreview = () => {
  const { travelPlan } = useFormState();
  function handleDownloadPdf() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;
    const marginRight = 15;
    const textWidth = pageWidth - margin - marginRight;
    let yPosition = 10;

    const addNewPageIfNeeded = () => {
      if (yPosition + 10 > pageHeight) {
        doc.addPage();
        yPosition = 10;
      }
    };

    // Judul Utama
    doc.setFontSize(20);
    doc.text("Hasil", margin, yPosition);
    yPosition += 10;

    // Informasi Umum
    doc.setFontSize(16);
    doc.text("Informasi umum :", margin, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    travelPlan?.InformasiUmum.forEach((information) => {
      addNewPageIfNeeded();
      doc.text(`- ${information}`, 15, yPosition);
      yPosition += 10;
    });

    // Catatan
    yPosition += 7;
    doc.setFontSize(16);
    doc.text("Catatan :", margin, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    travelPlan?.Catatan.forEach((note) => {
      const bulletPoint = `- ${note}`;
      const wrappedText = doc.splitTextToSize(bulletPoint, textWidth);
      wrappedText.forEach((line) => {
        addNewPageIfNeeded();
        doc.text(line, 15, yPosition);
        yPosition += 10;
      });
    });

    //Itinerary
    yPosition += 7;
    doc.setFontSize(16);
    doc.text("Rencana aktifitas :", margin, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    travelPlan?.Itinerary.forEach((day: ItineraryDay) => {
      addNewPageIfNeeded();
      doc.text(`- Hari : ${day.Hari}`, 15, yPosition);
      yPosition += 10;
      Object.entries(day).forEach(([time, details]) => {
        if (time === "Hari") return;
        const session = details as ItinerarySession;

        if (yPosition + 40 > pageHeight) {
          doc.addPage();
          yPosition = 10;
        }
        doc.setFontSize(12);
        doc.text(`${time}`, 20, yPosition);
        yPosition += 10;

        // Tambahkan Detail Kegiatan
        doc.setFontSize(10);
        const detailsText = [
          `Waktu: ${session.Waktu}`,
          `Kegiatan: ${session.Kegiatan}`,
          `Deskripsi: ${session.Deskripsi}`,
          `Harga Tiket: ${session.HargaTiket}`,
          `Jam Operasional: ${session.JamOperasional}`,
          `Transportasi: ${session.Transportasi}`,
        ];

        detailsText.forEach((line) => {
          if (yPosition + 10 > pageHeight) {
            doc.addPage();
            yPosition = 10;
          }
          const bulletPoint = `- ${line}`;
          const wrappedText = doc.splitTextToSize(bulletPoint, textWidth);
          wrappedText.forEach((item) => {
            doc.text(item, 18, yPosition);
            yPosition += 10;
          });
        });
      });
    });

    // Tips Tambahan
    yPosition += 7;
    doc.setFontSize(16);
    doc.text("Tips Tambahan :", margin, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    travelPlan?.TipsTambahan.forEach((tips) => {
      const bulletPoint = `- ${tips}`;
      const wrappedText = doc.splitTextToSize(bulletPoint, textWidth);
      wrappedText.forEach((line) => {
        addNewPageIfNeeded();
        doc.text(line, 15, yPosition);
        yPosition += 10;
      });
    });

    // Estimasi Total Biaya dan Sisa Anggaran
    yPosition += 7;
    doc.setFontSize(16);
    doc.text("Total Biaya :", margin, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    travelPlan?.EstimasiTotalBiaya.forEach((total) => {
      addNewPageIfNeeded();
      doc.text(`- ${total}`, 15, yPosition);
      yPosition += 10;
    });
    travelPlan?.SisaAnggaran.forEach((sisa) => {
      addNewPageIfNeeded();
      doc.text(`- ${sisa}`, 15, yPosition);
      yPosition += 10;
    });

    // Unduh PDF
    doc.save("itinerary.pdf");
  }
  return { travelPlan, handleDownloadPdf };
};
