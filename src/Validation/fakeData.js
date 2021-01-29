import { v4 as uuid } from "uuid";

export default [
  {
    id: uuid(),
    name: "Chazzers",
    size: "Small",
    pineapple: false,
    jalepeno: false,
    mandOranges: false,
    ham: false,
    specIns: "",
  },
  {
    id: uuid(),
    name: "Zazzy Chazzy",
    size: "Large",
    pineapple: true,
    jalepeno: true,
    mandOranges: true,
    ham: true,
    specIns: "39625555 NAPKINS NEEDED",
  },
  {
    id: uuid(),
    name: "Probably Carl",
    size: "Medium",
    pineapple: true,
    jalepeno: false,
    mandOranges: true,
    ham: false,
    specIns: "NO MOONMEN!!",
  },
];
