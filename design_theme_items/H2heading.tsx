import { inter } from "@/fonts/Fonts";

type PropsType = {
  color: string;
  text: string;
};

const H2heading = ({ color, text }: PropsType) => {
  const style = {
    color: color,
  };

  return (
    <h3 className={`${inter.className} font-extrabold text-8xl`} style={style}>
      {text}
    </h3>
  );
};

export default H2heading;
