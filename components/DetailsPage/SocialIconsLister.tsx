import Image from "next/image"

type SocialIconsListerPropsType = {
    icons: string[]
}

const SocialIconsLister = ({icons}: SocialIconsListerPropsType) => {
  
    

  return (
    <ul className="socialIconLister">
        {icons.map(icon => <li key={icon}>
            <Image src={`/icons/${icon}`} alt={icon} width={50} height={50}/>
        </li>)}
    </ul>
  )
}

export default SocialIconsLister