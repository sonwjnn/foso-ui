export interface Category {
  id: string;
  name: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "oil-filter",
    name: "Lọc nhớt",
    count: 24,
  },
  {
    id: "air-filter",
    name: "Lọc gió",
    count: 18,
  },
  {
    id: "fuel-filter",
    name: "Lọc nhiên liệu",
    count: 15,
  },
  {
    id: "cabin-filter",
    name: "Lọc cabin",
    count: 12,
  },
  {
    id: "spark-plugs",
    name: "Bugi đánh lửa",
    count: 9,
  },
  {
    id: "brake-pads",
    name: "Má phanh",
    count: 16,
  },
  {
    id: "engine-oil",
    name: "Dầu động cơ",
    count: 21,
  },
];
