import Image from "next/image";

export function SignatureIntro({ src }: { src: string }) {
  return (
    <div className="signature-intro" aria-hidden="true">
      <Image src={src} alt="" width={240} height={96} className="signature-intro-image" preload />
    </div>
  );
}
