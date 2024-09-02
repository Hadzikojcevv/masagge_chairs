import React from 'react'

type SpecsTableContentPropsType = {
    content:{
          title: string;
          funcs: string[]
        }
  };

const SpecsFunctionsContent = ({content}: SpecsTableContentPropsType) => {
  return (
    <div className="specsTableContent functionsTableContent">
      <h6>{content.title}</h6>
      <ul className='funcitonsListing'>
        {content.funcs.map(func => <li key={func}>{func}</li>)}
      </ul>
    </div>
  )
}

export default SpecsFunctionsContent