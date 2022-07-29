import { useState, useCallback, useMemo } from "react";

//색깔 버튼이랑 글씨 버튼 => 색깔이 랜덤으로 생성, 글씨가 랜덤으로 생성

function HookExample() {
  const [color, setColor] = useState("#fff");
  const [letter, setLetter] = useState("a");

  //글씨 랜덤 생성하는 함수 : Math.random(), 36진법: 0~9, a~z
  const randomLetter = () => {
    return Math.random().toString(36).slice(2);
  };

  //색깔 랜덤으로 생성하는 함수 : Hex, Math.floor(), Math.random(), 16
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const handleColorClick = useCallback(() => {
    setColor(randomColor());
  }, [color]);

  const handleLetterClick = useCallback(() => {
    setLetter(randomLetter());
  }, [letter]);

  //카멜케이스 : 컨벤션
  const memoColor = useMemo(
    () => <Color handleClick={handleColorClick} color={color} />,
    [color]
  );

  const memoLetter = useMemo(
    () => <Letter handleClick={handleLetterClick} letter={letter} />,
    [letter]
  );

  return (
    <div>
      {memoColor}
      {memoLetter}
      <hr />
      <h1 style={{ color }}>{letter}</h1>
    </div>
  );
}

function Color({ handleClick, color }) {
  console.log("color component render");
  return (
    <div>
      <button onClick={handleClick}>color</button>
      <h3>{color}</h3>
    </div>
  );
}

function Letter({ handleClick, letter }) {
  console.log("letter component render");
  return (
    <div>
      <button onClick={handleClick}>letter</button>
      <h3>{letter}</h3>
    </div>
  );
}

export default HookExample;
