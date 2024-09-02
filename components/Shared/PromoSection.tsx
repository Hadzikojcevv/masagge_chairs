import { montserat } from "@/fonts/Fonts"
import Image from "next/image"

const PromoSection = () => {
  return (
    <section className="promoSection">
        <p className={`${montserat.className} aboutDesc`}>Направете промена во вашиот живот</p>
        <p className={`${montserat.className} aboutDesc`}>Инвестирајте во вашето </p>
        <h2 style={{color: "#3e3e3e"}}>ЗДРАВЈЕ</h2>
        <Image src={'/logo.png'} alt="Logo" width={300} height={200}/>
    </section>
  )
}

export default PromoSection