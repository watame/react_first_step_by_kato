import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  // 扱う値と、それを受け取る関数を作成
  const [count, setCount] = useState<number>(0);
  // 直前の値を保持しておいてくれる
  const prevCount = useRef<number>();

  const handleUp = (): void => {
    // setCount()はコールバック関数で値をcountを取得している
    // setCount(count => count + 1)
    setCount(count + 1);
  };

  const handleDown = (): void => {
    setCount(count - 1);
  };

  const handleReset = (): void => {
    setCount(0);
  };

  // 値を監視する
  // 第二引数は以下のパターンで利用できる
  // => 指定しない：すべてのuseStateで定義された変数を監視
  //    [](空配列):すべてのuseStateを監視しない
  //    [count]:`count`というuseStateを監視する
  useEffect(() => {
    if (count > 0 && count % 5 === 0) {
      //alert("5の倍数です");
    }
    console.log("render");
    prevCount.current = count;
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h1>{count}</h1>

      <button onClick={handleUp}>up</button>
      <button onClick={handleDown}>down</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
