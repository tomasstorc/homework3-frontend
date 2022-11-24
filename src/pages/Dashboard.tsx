import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import BirthChart from "../components/BirthChart";
import MortalityChart from "../components/MortalityChart";
import PopulationChart from "../components/PopulationChart";

const Dashboard = () => {
  const [yearRange, setYearRange] = useState(5);
  return (
    <Container className="mt-3">
      <Row>
        <Col md="auto">
          <PopulationChart numOfYears={yearRange} />
        </Col>
        <Col md="auto">
          {" "}
          <BirthChart numOfYears={yearRange} />
        </Col>
        <Col md="auto">
          {" "}
          <MortalityChart numOfYears={yearRange} />
        </Col>
      </Row>
      <div className="text-center">
        1
        <input
          type="range"
          id="range"
          name="range"
          min="1"
          max="5"
          value={yearRange}
          onChange={(e) => {
            setYearRange(+e.target.value);
          }}
        />
        5
      </div>
    </Container>
  );
};

export default Dashboard;
