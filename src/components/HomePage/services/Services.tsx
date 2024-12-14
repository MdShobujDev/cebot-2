import ServiceTabs from "./SearviceTabs";

function Services() {
  return (
    <section className=" bg-[#030C14]">
      <div
        className="  w-full rounded-t-[50px] p-20 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(360.31deg, rgba(11, 14, 51, 0) 0.1%, #0B0E33 108.11%)",
        }}
      >
        <div>
          <h1 className=" font-almarai font-light text-6xl ">
            What can you do with <span className=" text-[#979EEE]">CEBOT</span>
          </h1>
        </div>
      </div>
      <div className=" h-screen w-full px-24 py-10">
        <ServiceTabs />
      </div>
    </section>
  );
}

export default Services;
