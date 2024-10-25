import React from 'react';

const Section = ({title, children}) => {
  return (
    <div>
        {title}
        {children}
    </div>
  )
}

export default Section;
