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

  const data = {
    labels: [...labels],
    datasets: [
      {
        label: [...infoData],
        data: [...infoData],
        backgroundColor: [...backgroundColor],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "left",
        align: "center",
        borderWidth: 1,
        borderColor: [...backgroundColor],
      },
      title: {
        display: true,
        // padding: 0,
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

export const renderBarChart = ({
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
        display: true,
        position: "left",
        align: "end",
        labels: {
          generateLabels: (chart) => {
            return chart.data.labels.map((label, index) => ({
              text: label,
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              hidden: false,
            }));
          },
        },
      },
      title: {
        display: true,
        padding: {
          top: 1,
          bottom: 10,
        },
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
