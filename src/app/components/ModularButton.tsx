import React from "react";

interface AnimatedButtonProps {
  text: string;
}
const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text }) => {
  const letters = text.split("");

  // Fonction pour générer un délai aléatoire parmi une sélection de valeurs
  const getRandomDelay = () => {
    const delays = ["delay-75", "delay-200", "delay-100", "delay-300"];
  };

  return (
    <div className="flex  cursor-pointer group items-start justify-start lg:space-y-0 rounded-full duration-500 transition-all w-full relative flex-col font-Geist text-neutral-800 ">
      <div className="relative overflow-hidden w-fit z-30">
        <span className="opacity-0 flex">{text}1</span>
        <span className="absolute perspective-[1000px] flex top-0 left-0 w-full">
          {letters.map((letter, index) => (
            <React.Fragment key={`top-${index}`}>
              {letter === " " ? (
                <span className="px-1"> </span>
              ) : (
                <span
                  className={`flex [transform:rotateX(0deg)] group-hover:[transform:rotateY(180deg)_translateY(-300%)] transition-transform duration-500 ease-in-out origin-center ${getRandomDelay()}`}
                >
                  {letter}
                </span>
              )}
            </React.Fragment>
          ))}
        </span>
        <span className="absolute perspective-[1000px] navtext flex top-0 left-0 w-full">
          {letters.map((letter, index) => (
            <React.Fragment key={`bottom-${index}`}>
              {letter === " " ? (
                <span className="px-1"> </span>
              ) : (
                <span
                  className={`flex [transform:rotateY(-180deg)_translateY(100%)] group-hover:[transform:rotateY(0deg)_translateY(0%)] transition-transform duration-500 ease-in-out origin-center ${getRandomDelay()}`}
                >
                  {letter}
                </span>
              )}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default AnimatedButton;
