import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter";
export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <button
          aria-label="Increment count"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement count"
          onClick={() => (count > 0 ? dispatch(decrement()) : 0)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
