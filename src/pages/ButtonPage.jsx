import Button from "../components/Button";

import {
  RxBell,
  RxBadge,
  RxBlendingMode,
  RxBookmarkFilled,
  RxComponentBoolean,
} from "react-icons/rx";

const handleClick = () => {
  console.log("Hi there!...Missed me?");
};
function ButtonPage() {
  return (
    <div>
      <div>
        <Button onClick={handleClick} className="mb-5" primary rounded>
          <RxBell />
          Button 1
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <RxBadge />
          Button 2
        </Button>
      </div>
      <div>
        <Button warning outline>
          <RxBlendingMode />
          Button 3
        </Button>
      </div>
      <div>
        <Button success rounded>
          <RxBookmarkFilled />
          Button 4
        </Button>
      </div>
      <div>
        <Button danger>
          <RxComponentBoolean />
          Button 5
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
