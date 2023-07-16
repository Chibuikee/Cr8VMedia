import Image from "next/image";

function PopUp({ setPopUp }) {
  return (
    <div
      onClick={() => setPopUp.setPopUp(null)}
      className="h-[8000px] absolute  z-[10] top-0 bg-[#fffcfcab] w-full"
    >
      <div
        id="popUp"
        className="bg-[#c01313ab] z-[8] mt-[200px] relative top-[50vw] mx-auto  h-[50vh] w-[300px]"
      >
        DETIALS page under development check back later
        <br />
        <h1>CLICK TO CLOSE</h1>
        <div className="relative">
          <Image
            src={setPopUp?.activePopUp?.Img}
            width={700}
            height={500}
            alt={setPopUp?.activePopUp?.title}
            className="cursor-pointer"
          />
        </div>
        <h3 className="activeitem inline-block leading-[12px] cursor-pointer text-[#898989] llg:text-[0.875rem] text-[0.75rem] mt-[20px] mb-[10px]">
          {setPopUp?.activePopUp?.title}
        </h3>
        <h1 className="cursor-pointer text-[1.375rem] font-light leading-[1.875rem] llg:text-[1.75rem]">
          {setPopUp?.activePopUp?.description}
        </h1>
        <h1 className=" text-[1.375rem] font-light leading-[1.875rem] llg:text-[1.75rem]">
          {setPopUp?.activePopUp?.details}
        </h1>
        <button>More Deatails</button>
      </div>
    </div>
  );
}

export default PopUp;
