export interface Hero {
  id: number
  name: string
  owner: Owner
}

// type Owner = "DC" | "Marvel"
export enum Owner {
  DC = "DC",
  Marvel = "Marvel",
}

// const heroes: Hero[] = [
//   {
//     id: 1,
//     name: "Batman",
//     owner: "DC",
//   },
//   {
//     id: 2,
//     name: "Spiderman",
//     owner: "Marvel",
//   },
//   {
//     id: 3,
//     name: "Superman",
//     owner: "DC",
//   },
//   {
//     id: 4,
//     name: "Flash",
//     owner: "DC",
//   },
//   {
//     id: 5,
//     name: "Wolverine",
//     owner: "Marvel",
//   },
//   {
//     id: 6,
//     name: "Green Lantern",
//     owner: "DC",
//   },
// ]

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: Owner.DC,
  },
  {
    id: 2,
    name: "Spiderman",
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: "Superman",
    owner: Owner.DC,
  },
  {
    id: 4,
    name: "Flash",
    owner: Owner.DC,
  },
  {
    id: 5,
    name: "Wolverine",
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: "Green Lantern",
    owner: Owner.DC,
  },
]
