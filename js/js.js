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
  //console.log(checkboxes);
  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].dataset.answer);
  }
  //console.log("my selected" + array);

  // 比較出差異
  function arrayCompare(val) {
    return array.indexOf(val) != -1;
  }

  let newEmotional = emotional.filter(arrayCompare);
  let newNeuroticism = neuroticism.filter(arrayCompare);
  let newNegative = negative.filter(arrayCompare);
  let newIndifferent = indifferent.filter(arrayCompare);

  // console.log("newEmotional " + newEmotional);
  // console.log("newNeuroticism " + newNeuroticism);
  // console.log("newNegative " + newNegative);
  // console.log("newIndifferent " + newIndifferent);

  // 百分比
  function Percentage(num, total) {
    if (isNaN(num) || isNaN(total)) {
      return "-";
    }
    return total <= 0 ? "0%" : Math.round(((num / total) * 10000) / 100);
  }

  newEmotional = Percentage(newEmotional.length, 14);
  newNeuroticism = Percentage(newNeuroticism.length, 14);
  newNegative = Percentage(newNegative.length, 14);
  newIndifferent = Percentage(newIndifferent.length, 14);

  // console.log("newEmotional %" + newEmotional);
  // console.log("newNeuroticism %" + newNeuroticism);
  // console.log("newNegative %" + newNegative);
  // console.log("newIndifferent %" + newIndifferent);

  // 圓比例
  function RoundPercentage(num) {
    let total;
    total = Math.round((num * 360) / 100);
    // if (total > 180) {
    //   total = total - 180;
    //   console.log(num + " 角度大於180 " + total);
    // }
    return total;
  }
  let RoundNewEmotional = RoundPercentage(newEmotional);
  let RoundNewNeuroticism = RoundPercentage(newNeuroticism);
  let RoundNewNegative = RoundPercentage(newNegative);
  let RoundNewIndifferent = RoundPercentage(newIndifferent);

  // console.log("newEmotionalRound 圓比例" + RoundNewEmotional);
  // console.log("newNeuroticism  圓比例" + RoundNewNeuroticism);
  // console.log("newNegative  圓比例" + RoundNewNegative);
  // console.log("newIndifferent  圓比例" + RoundNewIndifferent);

  // localStorage 比例與角度
  localStorage.setItem("newEmotional", newEmotional);
  localStorage.setItem("newNeuroticism", newNeuroticism);
  localStorage.setItem("newNegative", newNegative);
  localStorage.setItem("newIndifferent", newIndifferent);

  localStorage.setItem("RoundNewEmotional", RoundNewEmotional);
  localStorage.setItem("RoundNewNeuroticism", RoundNewNeuroticism);
  localStorage.setItem("RoundNewNegative", RoundNewNegative);
  localStorage.setItem("RoundNewIndifferent", RoundNewIndifferent);

  window.open("results.html", "_self");
}

window.onload = function () {
  // function rotationAngle(num) {
  //   if (num > 180) {
  //     num = num - 180;
  //     this.insertRule(".pie::before{content:'我是修改的 content ';}", 0);
  //   }
  //   return num;
  // }

  let answerEmotional = localStorage.getItem("newEmotional");
  let answerNeuroticism = localStorage.getItem("newNeuroticism");
  let answerNegative = localStorage.getItem("newNegative");
  let answerIndifferent = localStorage.getItem("newIndifferent");

  // let answerRoundEmotional = localStorage.getItem("RoundNewEmotional");
  // let answerRoundNeuroticism = localStorage.getItem("RoundNewNeuroticism");
  // let answerRoundNegative = localStorage.getItem("RoundNewNegative");
  // let answerRoundIndifferent = localStorage.getItem("RoundNewIndifferent");

  let answerRoundEmotional = localStorage.getItem("RoundNewEmotional");
  let answerRoundNeuroticism = localStorage.getItem("RoundNewNeuroticism");
  let answerRoundNegative = localStorage.getItem("RoundNewNegative");
  let answerRoundIndifferent = localStorage.getItem("RoundNewIndifferent");

  // console.log(answerEmotional);
  // console.log(answerNeuroticism);
  // console.log(answerNegative);
  // console.log(answerIndifferent);

  console.log(answerRoundEmotional);
  console.log(answerRoundNeuroticism);
  console.log(answerRoundNegative);
  console.log(answerRoundIndifferent);

  $("#neuroticism").html(answerNeuroticism + "<span>%</span>");
  $("#negative").html(answerNegative + "<span>%</span>");
  $("#emotional").html(answerEmotional + "<span>%</span>");
  $("#indifferent").html(answerIndifferent + "<span>%</span>");
};
