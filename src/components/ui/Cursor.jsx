import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <div className="App">
      <AnimatedCursor
        className='none md:block lg:block'
        innerSize={20}
        outerSize={20}
        color='193, 11, 111'
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  );
}