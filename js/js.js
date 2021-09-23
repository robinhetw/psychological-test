// 情緒化父母 A
const emotional = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];
// 神經質父母 B
const neuroticism = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "15",
  "16",
  "17",
  "18",
  "19",
];
// 消極型父母 C
const negative = [
  "1",
  "3",
  "6",
  "9",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
];
// 冷漠型父母 D
const indifferent = [
  "1",
  "6",
  "7",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
];

function myFunction() {
  var array = [];
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  console.log(checkboxes.dataset.answer);
  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }
  console.log(array);
}
