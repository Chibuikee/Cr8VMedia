import Image from "next/image";

function PopUp({ setPopUp }) {
  return (
    <div
      onClick={() => setPopUp.setPopUp(null)}
      className="h-[8000px] absolute  z-[10] top-0 bg-[#fffcfcab] w-full"
    >
      <div
        id="popUp"
        className="bg-[#ffffff] z-[8] mt-[200px] relative h-scree top-[50vw] mx-auto px-[10px] w-[320px] s480:w-[440px] x580:max-w-[620px] "
      >
        DETIALS page under development check back later
        <br />
        <h1>CLICK TO CLOSE !</h1>
        <div className="relative">
          <Image
            src={setPopUp?.activePopUp?.Img}
            width={700}
            height={500}
            alt={setPopUp?.activePopUp?.title}
            className="cursor-pointer"
          />
        </div>
        <h3 className="activeitem mx-[20px] inline-block leading-[12px] cursor-pointer text-[#898989] llg:text-[0.875rem] text-[0.75rem] mt-[20px] mb-[10px]">
          {setPopUp?.activePopUp?.title}
        </h3>
        <h1 className="px-[20px] cursor-pointer text-[1.375rem] font-normal leading-[1.4rem] llg:text-[1.75rem]">
          {setPopUp?.activePopUp?.description}
        </h1>
        <h1 className="px-[20px] mt-4 text-[1.063rem] text-[#999999] font-light llg:text-[1.75rem]">
          {setPopUp?.activePopUp?.details}
        </h1>
        <button className="text-[0.75rem] tracking-[0.2rem] leading-[0.75rem] mx-[20px] activeitem my-10">
          VIEW PROJECT
        </button>
      </div>
    </div>
  );
}

export default PopUp;
