export const renderChart = ({
  id,
  type,
  labels = [],
  infoData,
  backgroundColor,
  titleText,
  other = false,
}) => {
  if (other) labels = other();

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
        position: "left",
        align: "center",
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
