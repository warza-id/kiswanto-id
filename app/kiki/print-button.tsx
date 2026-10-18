"use client";

import { Icon } from "../ui/outline-icon";

// Memakai dialog cetak browser: pilih "Simpan sebagai PDF" untuk mengunduh CV.
export function PrintButton() {
  return (
    <button className="button button-primary" type="button" onClick={() => window.print()}>
      <Icon name="download" /> Unduh PDF
    </button>
  );
}
