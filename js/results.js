function removeLs() {
  localStorage.clear();
  window.open("index.html", "_self");
}

$(window).ready(function () {
  $("#background").delay(1500).fadeOut(1000);
  $(".lds-facebook").delay(1500).fadeOut(1000);
});

window.onload = function () {
  let answerEmotional = localStorage.getItem("newEmotional");
  let answerNeuroticism = localStorage.getItem("newNeuroticism");
  let answerNegative = localStorage.getItem("newNegative");
  let answerIndifferent = localStorage.getItem("newIndifferent");

  let answerRoundEmotional = localStorage.getItem("RoundNewEmotional");
  let answerRoundNeuroticism = localStorage.getItem("RoundNewNeuroticism");
  let answerRoundNegative = localStorage.getItem("RoundNewNegative");
  let answerRoundIndifferent = localStorage.getItem("RoundNewIndifferent");

  console.log(answerEmotional);
  console.log(answerNeuroticism);
  console.log(answerNegative);
  console.log(answerIndifferent);

  console.log(answerRoundEmotional);
  console.log(answerRoundNeuroticism);
  console.log(answerRoundNegative);
  console.log(answerRoundIndifferent);

  $("#neuroticism").html(answerNeuroticism + "<span>%</span>");
  $("#negative").html(answerNegative + "<span>%</span>");
  $("#emotional").html(answerEmotional + "<span>%</span>");
  $("#indifferent").html(answerIndifferent + "<span>%</span>");

  var ctx = document.getElementById("chart").getContext("2d");

  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["神經質", "消極型", "情緒化", "冷漠型"],
      datasets: [
        {
          label: "# 百分比",
          data: [
            answerNeuroticism,
            answerNegative,
            answerEmotional,
            answerIndifferent,
          ],
          backgroundColor: [
            "rgba(134,142,150, 0.2)",
            "rgba(73, 80, 87, 0.2)",
            "rgba(52, 58, 64, 0.2)",
            "rgba(33, 37, 41, 0.2)",
          ],
          borderColor: [
            "rgba(134,142,150,1)",
            "rgba(73, 80, 87, 1)",
            "rgba(52, 58, 64, 1)",
            "rgba(33, 37, 41, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });
};
