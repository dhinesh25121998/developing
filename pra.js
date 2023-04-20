var StudentDetails = [
  {
    name: "Dhine",
    dob: "25.12.1998",
    regno: 1,
    present: true,
  },
  {
    name: "Dh",
    dob: "25.12.1998",
    regno: 1,
    present: false,
  },
  {
    name: "Dhinsse",
    dob: "25.12.1998",
    regno: 1,
    present: false,
  },
  {
    name: "Dhine",
    dob: "25.12.1998",
    regno: 1,
    present: true,
  },
];

var Filtermethod = StudentDetails.filter(Callbacckfunction);

function Callbacckfunction(value) {
  return value.present == true;
}

console.log(Filtermethod);
