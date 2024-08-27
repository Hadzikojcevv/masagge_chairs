import React from 'react'
import SmallDescText from './SmallDescText'

type PropsType = {
    items: string[],
    color: 'dark' | 'light'
}

const ListDescription = ({items, color = 'dark'}:PropsType) => {

    if(!items.length) return ""

  return (
    <ul className='mb-10'>
        {items.map(item => <li key={item}><SmallDescText color={color} text={item} /></li>)}
    </ul>
  )
}

export default ListDescription