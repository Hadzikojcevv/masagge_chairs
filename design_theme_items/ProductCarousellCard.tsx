import { MassageChairType } from "@/types/Types"
import Image from "next/image"
import LinkItem from "./LinkItem"
import { inter, montserat } from "@/fonts/Fonts"

type ProductCarousellCardPropsType = {

    chair: MassageChairType
}

const ProductCarousellCard = ({chair}:ProductCarousellCardPropsType) => {
  return (
    <div className="carousellCard">
        <Image src={chair.gallery.product} alt={chair.name} width={250} height={200}/>
        <h3 className={`${montserat.className}`}>{chair.name}</h3>
        <p className={`${inter.className}`}>{chair.subTitle}</p>
        <LinkItem path={`/${chair.name}`} text={"Детали"} variant={"dark"} />
    </div>
  )
}

export default ProductCarousellCard