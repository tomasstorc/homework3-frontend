import React, { useState } from "react";
import { Col, Row, Form, Modal, Button } from "react-bootstrap";
import { cars, uniqueBrands } from "../cars";

interface fProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<any>>;
  filterFn: (filterData: any) => void;
}

const FilterCars = ({ show, setShow, filterFn }: fProps) => {
  const defValues = {
    brand: undefined,
    model: undefined,
    kmFrom: undefined,
    kmTo: undefined,
    priceFrom: undefined,
    priceTo: undefined,
    engine: undefined,
  };
  const [filterData, setFilterData] = useState(defValues);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(!show);
        setFilterData(defValues);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Filter results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>

            <Form.Select onChange={handleChange} name="brand">
              <option value={undefined}>All</option>
              {uniqueBrands?.map((b, index) => {
                return (
                  <option key={index} value={b}>
                    {b}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Select
              onChange={handleChange}
              name="model"
              disabled={!filterData.brand}
            >
              <option value={undefined}>All</option>
              {cars.map((c, index) => {
                if (c.brand === filterData.brand) {
                  return <option key={index}>{c.model}</option>;
                } else {
                  return null;
                }
              })}
            </Form.Select>
          </Form.Group>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>KM from</Form.Label>
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  name="kmFrom"
                  value={filterData.kmFrom}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>KM to</Form.Label>
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  name="kmTo"
                  value={filterData.kmTo}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Price from</Form.Label>
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  name="priceFrom"
                  value={filterData.priceFrom}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Price to</Form.Label>
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  name="priceTo"
                  value={filterData.priceTo}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <div key="inline-radio" className="mb-3">
            <Form.Check
              inline
              onChange={handleChange}
              label="electro"
              name="engine"
              value="electro"
              type="radio"
            />
            <Form.Check
              inline
              onChange={handleChange}
              label="diesel"
              name="engine"
              value="diesel"
              type="radio"
            />
            <Form.Check
              inline
              onChange={handleChange}
              label="petrol"
              name="engine"
              value="petrol"
              type="radio"
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            filterFn(filterData);
            setShow(!show);
          }}
        >
          Filter
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setShow(!show);
            setFilterData(defValues);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterCars;
