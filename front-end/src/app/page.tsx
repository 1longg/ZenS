/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col  py-4">
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

      <div className="bg-main-green text-white flex flex-col justify-center items-center py-16">
        <p className="text-3xl mb-4 font-semibold">
          A joke a day keeps the doctor away
        </p>
        <p className="text-sm">
          If you joke wrong way, your teeth have to pay. (Serious)
        </p>
      </div>
      <div className="py-8 text-text-main text-md mx-24 sm:mx-36 md:mx-44 lg:mx-52 xl:mx-64">
        A housewife, an accountant and a lawyer were asked "How much is 2+2?"
        The housewife replies: "Four!". The accountant says: "I think it's
        either 3 or 4. Let me run those figures through my spreadsheet one more
        time." The lawyer pulls the drapes, dims the lights and asks in a hushed
        voice, "How much do you want it to be?"
      </div>

      <div className="mb-4 flex items-center border-t py-16 border-slate-200 justify-center mx-48 sm:mx-56 md:mx-64 lg:mx-80 xl:mx-96 mt-4">
        <button className="bg-main-blue px-6 py-1 md:px-8 md:py-2 lg:px-12 lg:py-3 xl:px-16 xl:py-4 mr-8 border-b-bottom-button-blue border-b-4 text-white text-xl cursor-pointer hover:bg-opacity-80">
          This is Funny!
        </button>
        <button className="bg-main-green px-6 py-1 md:px-8 md:py-2 lg:px-12 lg:py-3 xl:px-16 xl:py-4 border-b-bottom-button-green border-b-4  text-white text-xl cursor-pointer hover:bg-opacity-80">
          This is not Funny.
        </button>
      </div>
      <div className="bg-slate-300 h-[1px] w-full mb-4"></div>
      <div className="flex justify-center text-slate-400  text-center mt-4  mx-24 sm:mx-36 md:mx-44 lg:mx-52 xl:mx-64">
        <p className="max-w-[900px]">
          This website is created as part of HIsolutions program. The materials
          contained on this website are provided for general information only
          and do not constitute any form of advice. HLS assumes no
          responsibility for the accuracy of any particular statement and
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </p>
      </div>
      <div className="py-8 text-center w-full text-slate-600">
        Copyright 2021 HLS
      </div>
    </div>
  );
}
