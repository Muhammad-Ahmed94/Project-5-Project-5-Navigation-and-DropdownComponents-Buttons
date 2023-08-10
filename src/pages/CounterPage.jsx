import { useReducer } from "react";
import Button from "../components/Button";
import DropDownPanel from "../components/DropDownPanel";

const INCREMENT_VALUE = "increment-value";
const DECREMENT_VALUE = "decrement-value";
const CHANGE_INPUT_VALUE = "change-input-value";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_VALUE: {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case DECREMENT_VALUE: {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        valueToAdd: action.payload,
      };
    }

    case ADD_VALUE_TO_COUNT: {
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    }

    default:
      return state;
  }

  /* if (action.type === INCREMENT_VALUE) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === DECREMENT_VALUE) {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === CHANGE_INPUT_VALUE) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  return state; */
};

function CounterPage() {
  /*   const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0); */
  const [state, dispatch] = useReducer(reducer, {
    count: 20,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_VALUE,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_VALUE,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: CHANGE_INPUT_VALUE,
      payload: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    /*     setCount(count + valueToAdd);
    setValueToAdd(0); */
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <DropDownPanel className="m-3">
      <h1 className="text-lg">Count is: {state.count}</h1>
      <div className="flex flex-row ">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleFormSubmit}>
        <label>Add!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-400"
        />
        <Button>Add Value</Button>
      </form>
    </DropDownPanel>
  );
}

export default CounterPage;
