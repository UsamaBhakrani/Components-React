import { useState } from "react";
import { BsChevronLeft, BsChevronDown } from "react-icons/bs";

const Accordion = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleOnClick = (newIndex) => {
    // Using Functional State Update to Utilize the Latest Value of expandedIndex
    setExpandedIndex((current) => {
      if (current === newIndex) {
        return -1;
      } else {
        return newIndex;
      }
    });

    // Dafault BATCHING in REACT 18 which is Giving Stale References with Normal State Update Procedure

    // if (expandedIndex === newIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(newIndex);
    // }
  };

  const details = data.map((dat, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <BsChevronDown /> : <BsChevronLeft />}</span>
    );

    return (
      <div key={dat.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer font-semibold"
          onClick={() => handleOnClick(index)}
        >
          {dat.heading}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{dat.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{details}</div>;
};

export default Accordion;
