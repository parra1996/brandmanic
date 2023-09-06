export const renderChart = ({
  id,
  type,
  labels = [],
  infoData,
  backgroundColor,
  titleText,
  other = false,
  displayLegend = true,
  otherData = false,
}) => {
  if (other) labels = other();
  if (otherData) infoData = otherData();

  console.log(infoData);

  const data = {
    labels: [...labels],
    datasets: [
      {
        data: [...infoData],
        backgroundColor: [...backgroundColor],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: displayLegend,
        position: "left",
        align: "center",
        borderWidth: 1,
        borderColor: [...backgroundColor],
      },
      title: {
        display: true,
        font: {
          size: 16,
          family: "vazir",
        },
        text: `${titleText}`,
      },
    },
  };

  new Chart(`${id}`, {
    type: `${type}`,
    data,
    options: options,
  });
};
