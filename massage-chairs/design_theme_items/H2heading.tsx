import { inter } from "@/fonts/Fonts";

type PropsType = {
  color: string;
  text: string;
};

const H2heading = ({ color, text }: PropsType) => {
  const style = {
    color: color,
    letterSpacing: -3,
    fontWeight: 500,
    lineHeight: 0.8
  };

  return (
    <h2
      className={`${inter.className} font-extrabold text-8xl`}
      style={style}
    >
      {text}
    </h2>
  );
};

export default H2heading;
