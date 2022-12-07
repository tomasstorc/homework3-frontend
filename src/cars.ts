export interface car {
  brand: string;
  model: string;
  km: number;
  price: number;
  engine: "petrol" | "diesel" | "electro";
}

export const cars: Array<car> = [
  {
    brand: "Peugeot",
    model: "3008",
    km: 69000,
    price: 105000,
    engine: "diesel",
  },
  {
    brand: "Tesla",
    model: "model S",
    km: 10000,
    price: 1999999,
    engine: "electro",
  },
  {
    brand: "Škoda",
    model: "Kodyaq",
    km: 20000,
    price: 777777,
    engine: "diesel",
  },
  {
    brand: "Škoda",
    model: "Fabia",
    km: 100000,
    price: 400000,
    engine: "petrol",
  },
  {
    brand: "Peugeot",
    model: "208",
    km: 111654,
    price: 140000,
    engine: "petrol",
  },
  {
    brand: "Tesla",
    model: "model X",
    km: 97360,
    price: 1399900,
    engine: "electro",
  },
];
