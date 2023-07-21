import Image from "next/image";
import { HiX } from "react-icons/hi";
function PopUp({ setPopUp }) {
  return (
    <div
      onClick={() => setPopUp.setPopUp(null)}
      className="h-[8000px] absolute  z-[10] top-0 bg-[#fffcfcb7] w-full"
    >
      <div
        id="popUp"
        className="bg-[#ffffff] rounded-[10px] shadow-[0_25px_50px_rgba(0,0,0,0.045)] z-[8] mt-[200px] relative top-[50vw] mx-auto px-[10px] "
      >
        <div className="relative pt-10">
          <div className="absolute bg-[white] h-[30px] w-[30px] top-10 right-0">
            <HiX size={20} className="absolute text-[green] top-1 right-1" />
          </div>
          <Image
            src={setPopUp?.activePopUp?.Img}
            width={700}
            height={500}
            alt={setPopUp?.activePopUp?.title}
            className="cursor-pointer"
          />
        </div>
        <div className="py-[30px]">
          <h3 className="activeitem mx-[20px] inline-block leading-[12px] cursor-pointer text-[#898989] llg:text-[0.875rem] text-[0.75rem] mt-[20px] mb-[10px]">
            {setPopUp?.activePopUp?.title}
          </h3>
          <h1 className="px-[20px] font-hind cursor-pointer text-[1.375rem] font-normal leading-[1.4rem] llg:text-[1.75rem]">
            {setPopUp?.activePopUp?.description}
          </h1>
          <p className="font-hind px-[20px] leading-[1.875rem] mt-4 text-[1.063rem] text-[#999999] font-light llg:text-[1.75rem]">
            {setPopUp?.activePopUp?.details}
          </p>
          <button className="font-hind text-[0.75rem] tracking-[0.2rem] leading-[0.75rem] mx-[20px] activeitem my-10">
            VIEW PROJECT
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
