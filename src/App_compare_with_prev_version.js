import {useState} from "react";

// 훅을 사용한 리액트 코드
function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <>
      <h1>{item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </>
  );
}

// 훅이 생기기 전 리액트 코드
class AppUgly extends React.Component {
  state = {
    item: 1
  }

  render() {
    const {item} = this.state;

    return (
      <>
        <h1>{item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </>
    );
  }

  incrementItem = () => {
    this.setState(state => {
        return {
          item: state.item + 1
        }
    })
  };

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  };
}

export default App;
