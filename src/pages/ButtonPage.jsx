import Button from "../components/Button";
import { FaBeer, FaAngular, FaAppStore } from "react-icons/fa";

const handleOnClick = () => {
  console.log("handle on click");
};

const handleMouseOver = () => {
  console.log("mouseover");
};

const handleML = () => {
  console.log("onmouseleave");
};

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary onMouseLeave={handleML}>
          <FaBeer />
          Hi There
        </Button>
      </div>
      <div>
        <Button secondary rounded onMouseOver={handleMouseOver}>
          <FaAngular />
          Order Now
        </Button>
      </div>
      <div>
        <Button warning onClick={handleOnClick}>
          <FaAppStore />
          Buy Now
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Clear
        </Button>
      </div>
      <div>
        <Button success>Hide Ads</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
