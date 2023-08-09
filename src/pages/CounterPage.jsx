import useCounter from "../hooks/use-Counter";
import Button from "../components/Button";

function CounterPage() {
  const { count, handleClick } = useCounter();

  return (
    <div>
      <h1>Count is: {count}</h1>
      <Button primary onClick={handleClick}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
