import { hind } from "@/fonts/Fonts";

type PropsType = {
  text: string;
};

const SmallDescText = ({ text }: PropsType) => {
  const style = {
    letterSpaccing: 2,
    fontWeight: 300,
    color: "#C2C2C2",
  };

  return (
    <p className={`${hind.className} small-desc`} style={style}>
      {text}
    </p>
  );
};

export default SmallDescText;
