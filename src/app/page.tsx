import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-lvh h-lvh w-full bg-[url('/mastering.jpg')] bg-cover bg-center flex flex-col">
      <div className="bg-gradient-to-br from-black via-black/80 to-transparent h-full w-full absolute z-10 "></div>
      <div className="w-full lg:h-4/6 lg:mt-0 mt-32 flex items-center z-20 lg:pl-10 pl-5">
        {" "}
        <h1 className="font-supremebold title ">
          <div>MARINE BENABOU</div>
          <div>MASTERING</div>
          <div className="mt-3 ml-2 flex items-center space-x-2">
            <div className="w-3 h-3 bg-neutral-200"></div>
            <div className="subtitle font-supreme ">
              Professional mastering engineer
            </div>
          </div>
        </h1>
      </div>

      <div className="lg:mt-0 mt-32 lg:h-2/6 h-3/4 z-20 p-5 lg:flex-row flex-col flex items-center justify-center lg:space-x-5 lg:spae-y-0 space-y-5">
        <div className=" h-full cursor-pointer group overflow-hidden pl-10 pt-5 relative lg:w-1/3 w-full  rounded-xl border-2 border-neutral-400 border-solid cellule backdrop-blur-md">
          <h2 className="  font-supremebold cellulefont flex flex-col items-start">
            <div className=" relative flex items-center w-fit z-20 ">About</div>
            <div className=" cellulefont3 font-supreme relative flex items-center w-fit z-20 ">
              Marine Benabou
            </div>
          </h2>
          <div className="z-20 font-supreme group-hover:translate-x-0 transition-all duration-500 translate-x-3/4 cellulefont2 flex items-center space-x-3 absolute bottom-5 right-5">
            <img src="/expand.svg" className="svg z-20"></img>
            <div className="opacity-0 group-hover:opacity-100 z-20 transition-all duration-200">
              Learn More
            </div>
          </div>
          <img
            src="/marine.webp"
            className="absolute  lg:opacity-0 opacity-30   group-hover:opacity-50 transition-all duration-700  scale-100 -top-20 right-0 w-full grayscale z-10"
          ></img>
        </div>
        <div className=" h-full cursor-pointer group overflow-hidden pl-10 pt-5 relative lg:w-1/3 w-full   rounded-xl border-2 border-neutral-400 border-solid cellule backdrop-blur-md">
          <h2 className="  font-supremebold cellulefont flex flex-col items-start">
            <div className=" relative flex items-center w-fit z-20 ">
              Services
            </div>
            <div className=" cellulefont3 font-supreme relative flex items-center w-fit z-20 ">
              Mastering Techniques
            </div>
          </h2>
          <div className="z-20 font-supreme group-hover:translate-x-0 transition-all duration-500 translate-x-3/4 cellulefont2 flex items-center space-x-3 absolute bottom-5 right-5">
            <img src="/expand.svg" className="svg z-20"></img>
            <div className="opacity-0 group-hover:opacity-100 z-20 transition-all duration-200">
              Learn More
            </div>
          </div>
          <img
            src="/materiel.jpg"
            className="absolute lg:opacity-0 opacity-30   group-hover:opacity-50 transition-all duration-700  scale-100 top-0 right-0 w-full grayscale z-10"
          ></img>
        </div>
        <div className=" h-full cursor-pointer group overflow-hidden pl-10 pt-5 relative lg:w-1/3 w-full   rounded-xl border-2 border-neutral-400 border-solid cellule backdrop-blur-md">
          <h2 className="  font-supremebold cellulefont flex flex-col items-start">
            <div className=" relative flex items-center w-fit z-20 ">
              Contact
            </div>
            <div className=" cellulefont3 font-supreme relative flex items-center w-fit z-20 ">
              Let's talk about your next project
            </div>
          </h2>
          <div className="z-20 font-supreme group-hover:translate-x-0 transition-all duration-500 translate-x-3/4 cellulefont2 flex items-center space-x-3 absolute bottom-5 right-5">
            <img src="/expand.svg" className="svg z-20"></img>
            <div className="opacity-0 group-hover:opacity-100 z-20 transition-all duration-200">
              Learn More
            </div>
          </div>
          <img
            src="/contact.jpg"
            className="absolute lg:opacity-0 opacity-30   group-hover:opacity-50 transition-all duration-700  scale-100 -top-0 right-0 w-full grayscale z-10"
          ></img>
        </div>
      </div>
    </main>
  );
}
