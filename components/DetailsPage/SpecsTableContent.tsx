import { montserat } from "@/fonts/Fonts";

type SpecsTableContentPropsType = {
  content:{
        title: string;
        info1: string;
        info2: string;
        info3: string;
        info4: string;

      }
};

const SpecsTableContent = ({content }: SpecsTableContentPropsType) => {
  return (
    <div className="specsTableContent">
      <h6>{content.title}</h6>
      <p className={`${montserat.className} tableContentParagraph`}>{content.info1}</p>
      <p className={`${montserat.className} tableContentParagraph`}>{content.info2}</p>
      <p className={`${montserat.className} tableContentParagraph`}>{content.info3}</p>
      <p className={`${montserat.className} tableContentParagraph`}>{content.info4}</p>
    </div>
  );
};

export default SpecsTableContent;
