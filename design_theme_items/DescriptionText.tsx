import { hind } from '@/fonts/Fonts'
import React from 'react'

type PropsType = {
    text: string,
    color?: string,
    textAlign?: 'left' | 'center'
}

const DescriptionText = ({text, color = '#808080', textAlign = 'left'}: PropsType ) => {

    const style = {
        color: color,
        fontWeight: 300,
        textAlign: textAlign,
        letterSpacing: -1,
        lineHeight: 1
    }


  return (
    <p className={`${hind.className} description`} style={style}>{text}</p>
  )
}

export default DescriptionText