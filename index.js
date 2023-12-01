async function fetchData() {
  const res = await fetch("./data.json");
  const data = res.json();
  return data;
}

async function main() {
  const data = await fetchData();
  const charts = document.querySelectorAll(".chart__bar");
  const amounts = data.map((day) => +day.amount);
  const highestValue = Math.max(...amounts);
  const highestValueIndex = amounts.indexOf(highestValue);

  charts.forEach((chart, i) => {
    chart.dataset.tooltip = data[i].amount;
    chart.style.height = `${(+data[i].amount / highestValue) * 100}%`;
  });
  charts[highestValueIndex].classList.add("chart__bar--accent");
}

main();
