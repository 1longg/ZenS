import Image from "next/image";

export default function Head() {
  return (
    <div className="flex items-center justify-between mx-24 sm:mx-36 md:mx-44 lg:mx-52 xl:mx-64">
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-fill"
        />
      </div>
      <div className="flex items-center">
        <div className="text-end mr-4">
          <p className="text-text-blur">Handicrafted by</p>
          <p>Jim HLS</p>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={60}
          height={60}
          className="object-fill"
        />
      </div>
    </div>
  );
}
