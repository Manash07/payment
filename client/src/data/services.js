const servicesList = [
  {
    id: 1,
    title: "Daraz Shopping",
    img: "/daraz.png",
    manager: "Manash Ghimire",
  },
  {
    id: 2,
    title: "Agriculture Development Bank",
    img: "/adbl.png",
    manager: "Shuom Ghimire",
  },
  {
    id: 3,
    title: "Nepal Airlines Domestic",
    img: "/nepair.png",
    manager: "Sushil Ghimire",
  },
  {
    id: 4,
    title: "NAME Institute",
    img: "/name.png",
    manager: "Sarita Ghimire",
  },
  {
    id: 5,
    title: "Nepal Engineering College",
    img: "/nec.png",
    manager: "Dipak Ghimire",
  },
  {
    id: 6,
    title: "Nepal Electricity Authorization",
    img: "/nea.png",
    manager: "Dipesh Ghimire",
  },
  {
    id: 7,
    title: "Bluebook Renewal DOTM",
    img: "/billbook.png",
    manager: "Dhiraj Ghimire",
  },
  {
    id: 8,
    title: "KUKL Water Bill Payment",
    img: "/kukl.jpg",
    manager: "Shyam Ghimire",
  },
];

const formsList = [
  {
    id: 1,
    title: "Daraz Shopping",
    formField: [
      { fieldTitle: "Product name", type: "text" },
      { fieldTitle: "Product sold by", type: "text" },
      { fieldTitle: "Product to recieve by", type: "text" },
      { fieldTitle: "Price of the product", type: "number" },
      { fieldTitle: "Product delivery date", type: "date" },
    ],
  },
  {
    id: 2,
    title: "Agriculture Development Bank",

    formField: [
      { fieldTitle: "Department Name", type: "text" },
      { fieldTitle: "Title for payment", type: "text" },
      { fieldTitle: "Total Amount to be paid", type: "number" },
      { fieldTitle: "Amount payment date", type: "date" },
    ],
  },
  {
    id: 3,
    title: "Nepal Airlines Domestic",

    formField: [
      { fieldTitle: "Flight Number", type: "text" },
      { fieldTitle: "From (Departure)", type: "text" },
      { fieldTitle: "To (Destination)", type: "text" },
      { fieldTitle: "Total Amount to be paid", type: "number" },
      { fieldTitle: "Flight date", type: "date" },
    ],
  },
  {
    id: 4,
    title: "NAME Institute",

    formField: [
      { fieldTitle: "Name of course", type: "text" },
      { fieldTitle: "Section or Department", type: "text" },
      { fieldTitle: "Study method: Online / Offline", type: "text" },
      { fieldTitle: "Total Amount to be paid", type: "number" },
      { fieldTitle: "Due date for payment", type: "date" },
    ],
  },
  {
    id: 5,
    title: "Nepal Engineering College",

    formField: [
      { fieldTitle: "Name of course", type: "text" },
      { fieldTitle: "Section or Department", type: "text" },
      { fieldTitle: "Semester or Trimester", type: "text" },
      { fieldTitle: "Study method: Online / Offline", type: "text" },
      { fieldTitle: "Total amount to be paid", type: "number" },
      { fieldTitle: "Due date for payment", type: "date" },
    ],
  },
  {
    id: 6,
    title: "Nepal Electricity Authorization",

    formField: [
      { fieldTitle: "NEA office location", type: "text" },
      { fieldTitle: "Bill number", type: "text" },
      { fieldTitle: "Bill meter number", type: "text" },
      { fieldTitle: "Total amount to be paid", type: "number" },
      { fieldTitle: "Due date to be paid", type: "date" },
    ],
  },
  {
    id: 7,
    title: "Bluebook Renewal DOTM",

    formField: [
      { fieldTitle: "DOTM Office Location", type: "text" },
      { fieldTitle: "Bluebook number", type: "text" },
      { fieldTitle: "Insurance policy number", type: "text" },
      { fieldTitle: "Total amount to be paid", type: "number" },
      { fieldTitle: "Due date for payment", type: "date" },
    ],
  },
  {
    id: 8,
    title: "KUKL Water Bill Payment",

    formField: [
      { fieldTitle: "KUKL Office Location", type: "text" },
      { fieldTitle: "Bill number", type: "text" },
      { fieldTitle: "Bill meter number", type: "text" },
      { fieldTitle: "Total amount to be paid", type: "number" },
      { fieldTitle: "Due date of payment", type: "date" },
    ],
  },
];

export default servicesList;
export { formsList };
