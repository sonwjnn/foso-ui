export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
}
interface SubcategoryType {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "oil-filter",
    name: "Lọc nhớt",
    count: 24,
    image: "/categories/cate_1.png",
  },
  {
    id: "air-filter",
    name: "Lọc gió",
    count: 18,
    image: "/categories/cate_2.png",
  },
  {
    id: "fuel-filter",
    name: "Lọc nhiên liệu",
    count: 15,
    image: "/categories/cate_3.png",
  },
  {
    id: "cabin-filter",
    name: "Lọc cabin",
    count: 12,
    image: "/categories/cate_4.png",
  },
  {
    id: "spark-plugs",
    name: "Bugi đánh lửa",
    count: 9,
    image: "/categories/cate_5.png",
  },
  {
    id: "brake-pads",
    name: "Má phanh",
    count: 16,
    image: "/categories/cate_6.png",
  },
  {
    id: "engine-oil",
    name: "Dầu động cơ",
    count: 21,
    image: "/categories/cate_7.png",
  },
];

export const subcategories: SubcategoryType[] = [
  { id: "sub1", name: "Air filter", image: "/categories/sub_cate_1.png" },
  { id: "sub2", name: "Engine oil", image: "/categories/sub_cate_2.png" },
  { id: "sub3", name: "Oil filter", image: "/categories/sub_cate_1.png" },
  { id: "sub4", name: "Fuel filter", image: "/categories/sub_cate_2.png" },
  { id: "sub5", name: "Cabin filter", image: "/categories/sub_cate_1.png" },
  { id: "sub6", name: "Spark plugs", image: "/categories/sub_cate_2.png" },
];
