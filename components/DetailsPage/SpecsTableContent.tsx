import { montserat } from "@/fonts/Fonts";

type SpecsTableContentPropsType = {
  content:{
        title: string;
        info1: string;
        info2: string;
      }
};

const SpecsTableContent = ({content }: SpecsTableContentPropsType) => {
  return (
    <div className="specsTableContent">
      <h6>{content.title}</h6>
      <p className={`${montserat.className} tableContentParagraph`}>{content.info1}</p>
      <p className={`${montserat.className} tableContentParagraph`}>{content.info2}</p>
    </div>
  );
};

export default SpecsTableContent;
