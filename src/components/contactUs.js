function ContactUs() {
  return (
    <section className="py-[90px] m:py-[120px] lg:max-w-[900px] ">
      <div className="px-[5%] llg:max-w-[1020px] mx-auto">
        <h1 className=" text-[1.75rem] mb-[30px] text-[#292929] font-normal">
          Contact Me
        </h1>
        <div className="items-center justify-between">
          <p className="mb-[30px]">
            Subscribe and contact me for super captivating content and make
            yourself fulfilled!
          </p>
          <div className=" ">
            <input
              className="w-[99.996%] outline-none leading-[48px] m:w-[49.998%] mb-[25px] text-[0.875rem] border-b-[1px]"
              type="text"
              placeholder="Name *"
            />
            <input
              className="w-[99.996%] outline-none leading-[48px] m:w-[49.998%] mb-[25px] text-[0.875rem] border-b-[1px]"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-[99.996%] outline-none leading-[48px] m:w-[49.998%] mb-[25px] text-[0.875rem] border-b-[1px]"
              type="text"
              placeholder="Mobile Number"
            />
            <textarea
              className="w-[99.996%] h-[120px] outline-none py-[20px] leading-[48px] m:w-[49.998%] mb-[25px] text-[0.875rem] border-b-[1px]"
              type="message"
              placeholder="Message"
            />
            <button className="mx-auto activeitem duration-[0.3s] pt-[2px] text-[0.75rem] leading-[12px] tracking-[0.2em] cursor-pointer inline-block w-[fit-content]">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
