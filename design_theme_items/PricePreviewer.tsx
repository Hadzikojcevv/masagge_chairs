import { montserat } from "@/fonts/Fonts";
import { color } from "framer-motion";

type PricePreviewerPropsType = {
  price: number;
};

const PricePreviewer = ({ price }: PricePreviewerPropsType) => {
  const priceStyle = {
    fontWeight: 800,
    fontSize: 30,
    color: '#727171'
  };

  const ddvStyle = {
    fontSize: 12,
  };

  return (
    <p className={`${montserat.className} small-desc`}>
      Цена: <span style={priceStyle}>{price}€</span>{" "}
      <span style={ddvStyle}> +ДДВ</span>
    </p>
  );
};

export default PricePreviewer;
