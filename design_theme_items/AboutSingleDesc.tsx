import { montserat } from "@/fonts/Fonts";

type AboutSingleDescPropsType = {
  number: number;
  desc: string;
};

const AboutSingleDesc = ({ number, desc }: AboutSingleDescPropsType) => {
  return (
    <div>
      <p className={`aboutNumber ${montserat.className}`}>0{number}</p>
      <p className={`aboutDesc ${montserat.className}`}>{desc}</p>
    </div>
  );
};

export default AboutSingleDesc;
