import React, { useState } from "react";
import getRandItem, { DEFAULT_ANSWERS } from "./helpers";

/** Generate EightBall
 * Props:
 * - answers (array of answer objects containing msg and color)
 *
 * State:
 * - msg of answer
 * - color of answer
 */
function EightBall({ answers = DEFAULT_ANSWERS }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  function changeBall() {
    const newBall = getRandItem(answers);
    setAnswer({ msg: newBall.msg, color: newBall.color });
  }

  const ballStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: answer.color,
    color: "white",
    borderRadius: "50%",
    height: "300px",
    width: "300px",
    margin: "0 auto",
    fontSize: "20px",
  };

  return (
    <div onClick={changeBall} style={ballStyles}>
      {answer.msg}
    </div>
  );
}

export default EightBall;
