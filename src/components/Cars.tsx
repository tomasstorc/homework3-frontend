import { car } from "../cars";
import { Table } from "react-bootstrap";

interface cProps {
  filteredCars: Array<car>;
}
const Cars = ({ filteredCars }: cProps) => {
  if (filteredCars?.length < 1) return <div>No cars for given filter</div>;
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">KM</th>
            <th scope="col">Price</th>
            <th scope="col">Engine</th>
          </tr>
        </thead>
        <tbody>
          {filteredCars.map((c) => {
            return (
              <tr>
                <td>{c.brand}</td>
                <td>{c.model}</td>
                <td>{c.km.toLocaleString("cs-CZ")}</td>
                <td>{c.price.toLocaleString("cs-CZ")} CZK</td>
                <td>{c.engine}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cars;
