import React from "react";
import Cursor from "react-animated-cursor";

const AnimatedCursor = () => {
  return (
    <>
      <Cursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "1px solid #fff",
        }}
        trailingSpeed={2}
      />
    </>
  );
};

export default AnimatedCursor;
