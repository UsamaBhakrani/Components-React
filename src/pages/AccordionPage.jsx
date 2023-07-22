import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "asdasd",
      heading: "HELLO",
      content:
        "Yes there is React Yes there is React Yes there is React Yes there is React ",
    },
    {
      id: "asdasasdad",
      heading: "REACT IS FUN",
      content:
        "Yes there is React Yes there is React Yes there is React Yes there is React ",
    },
    {
      id: "asdasdasdghh",
      heading: "YOLOOOOOO?",
      content:
        "Yes there is React Yes there is React Yes there is React Yes there is React ",
    },
  ];

  return (
    <div>
      <Accordion data={items} />
    </div>
  );
};

export default AccordionPage;
