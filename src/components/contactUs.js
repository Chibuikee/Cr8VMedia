function ContactUs() {
  return (
    <section className="p-5 items-center lg:max-w-[900px] mx-auto my-[100px]">
      <div>
        <h1 className="text-center text-[2rem] mb-5 font-semibold">
          CONTACT US
        </h1>
        <div className="s450:flex items-center justify-between">
          <p className="basis-[60%]">
            Subscribe and contact us for super attractive furnitures and make
            yourself comfortable!
          </p>
          <div className="flex flex-col gap-2 p-10 bg-[rgba(223,233,244,1)] basis-[30%]">
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Message" />
            <button className="px-8 py-2 mx-auto mt-10 bg-slate-600 rounded-full w-[fit-content]">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
