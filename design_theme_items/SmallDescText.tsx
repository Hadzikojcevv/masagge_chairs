import { montserat } from "@/fonts/Fonts";

type PropsType = {
  text: string;
  color: "dark" | "light";
};

const SmallDescText = ({ text, color = "dark" }: PropsType) => {
  const style = {
    color: color === "dark" ? "#303030" : "#dbdbdb",
  };

  return (
    <p className={`${montserat.className} small-desc`} style={style}>
      {text}
    </p>
  );
};

export default SmallDescText;
