import DescriptionText from "@/design_theme_items/DescriptionText";
import H1heading from "@/design_theme_items/H1heading";
import H2heading from "@/design_theme_items/H2heading";
import SmallDescText from "@/design_theme_items/SmallDescText";
import { hind, montserat } from "@/fonts/Fonts";

export default function Home() {
  return (
   <>

   <H1heading color={"#C2C2C2"} text={"BL-Z66"} />
   <H2heading color={"#3e3e3e"} text={"Внесете луксуз и релаксација во вашиот дом – со нашиот масажен стол, здравјето и удобноста се на дофат!"} />
    <DescriptionText  text={"Напреден ролер за стопала, шиљести ролери кои ќе вршат TuIna масажа на вашите нозе. Проширен одмор за нозе со различни висински опсези – нога -90 мм, автоматски одмор за нозе 170 мм, графенска технологија за загревање за грб, нозе и колена."} />
   <SmallDescText text={"Повеќе Модули за Масажа"} />
   </>
  );
}
