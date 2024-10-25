import {useInput} from "./customHooks/useInput";
import {content, useTabs} from "./customHooks/useTabs";

function App() {
  // useInput 테스트
  const maxLen = (value) => value.length <= 10;
  const hasNotAtMark = (value) => !value.includes("@");
  const name = useInput("Mr.", hasNotAtMark);

  // useTabs 테스트
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      <h1>useInput 테스트</h1>
      <h2>Hello</h2>
      <input type="text" placeholder="Name" {...name} />
      <hr/>
      <h1>useTabs 테스트</h1>
      {
        content.map((c, i) => (
          <button key={i} onClick={() => changeItem(i)}>{c.tab}</button>
        ))
      }
      <div>
        {
          currentItem.content
        }
      </div>
    </>
  );
}

export default App;
