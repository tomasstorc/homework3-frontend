import { useEffect, useState, useContext } from "react";
import Cars from "../components/Cars";
import FilterCars from "../components/FilterCars";
import { car, cars } from "../cars";
import { Button } from "react-bootstrap";
import { ColorContext } from "../context/colorSchema.context";

const Bazar = () => {
  const [filteredCars, setFilteredCars] = useState<Array<car>>([]);
  useEffect(() => {
    setFilteredCars(cars);
  }, []);

  const [show, setShow] = useState<boolean>(false);
  const { colorSchema } = useContext(ColorContext);
  const filter = (filterData: any) => {
    let tmpArray: Array<car> = cars;
    if (filterData.brand && filterData.brand !== "All") {
      tmpArray = tmpArray.filter((c) => c.brand === filterData.brand);
    }
    if (filterData.model && filterData.model !== "All") {
      tmpArray = tmpArray.filter((c) => c.model === filterData.model);
    }
    if (filterData.kmFrom) {
      tmpArray = tmpArray.filter((c) => c.km > filterData.kmFrom);
    }
    if (filterData.kmTo) {
      tmpArray = tmpArray.filter((c) => c.km < filterData.kmTo);
    }
    if (filterData.priceFrom) {
      tmpArray = tmpArray.filter((c) => c.price > filterData.priceFrom);
    }
    if (filterData.priceTo) {
      tmpArray = tmpArray.filter((c) => c.price > filterData.priceTo);
    }
    if (filterData.engine) {
      tmpArray = tmpArray.filter((c) => c.engine === filterData.engine);
    }
    setFilteredCars(tmpArray);
  };

  return (
    <div style={{ backgroundColor: colorSchema }}>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        Filter
      </Button>
      <Button
        onClick={() => {
          setFilteredCars(cars);
        }}
      >
        Reset
      </Button>
      <FilterCars show={show} setShow={setShow} filterFn={filter} />
      <Cars filteredCars={filteredCars} />
    </div>
  );
};

export default Bazar;
