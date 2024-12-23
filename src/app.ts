// number, string, boolean, null, undefined
// any

// к number относятся:
// age: number = -20 отрицательные числа
// age: number = 20 положительные числа
// age: number = 20.89182321 числа с плавающей точкой
// age: number = NaN специальные конструкции Not a Number
// age: number = Infinity специальные конструкции как бесконечность

// export const o1: number = 20;

// к string чуть попроще, строки мы можем формировать с помощью кавычек, всё, что в кавычках будет string
// export const o2: string = "dfgsdfgsgfhs";

// boolean либо true false
// export const o3: boolean = true;

// null, undefined всё достаточно просто.
// если тип null, то и значение должно быть null. Тоже самое и с undefined
// export const o4: null = null;
// export const o5: undefined = undefined;

// any - магический тип, который называется any
// export const o6: any = "20";

// export function o7(a: number, b: string, c: boolean) {
//   // return [1, 2, 3].map(() => {});
// }

// const o8 = (a: number, b: string, c: boolean): number => {
//   return 123;
// };

type User = {
  name: string;
  age: number;
  car: { color: string };
};

const o9: User = {
  name: "alex",
  age: 20,
  car: { color: "red" },
};

const o10: User = {
  name: "alex",
  age: 20,
  car: { color: "red" },
};
