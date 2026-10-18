import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Kiswanto.id — Beranda">
      <Image src="/brand/logo.svg" width={52} height={52} alt="" />
      <span>KISWANTO.ID</span>
    </Link>
  );
}
