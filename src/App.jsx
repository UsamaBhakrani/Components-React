import Route from "./components/Route";
import SideBar from "./components/SideBar";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/Accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/Buttons">
          <ButtonPage />
        </Route>
        <Route path="/Modal">
          <ModalPage />
        </Route>
        <Route path="/Table">
          <TablePage />
        </Route>
        <Route path="/Counter">
          <CounterPage initialValue={15} />
        </Route>
      </div>
    </div>
  );
};

export default App;
