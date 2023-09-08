export const renderChart = ({
  id,
  type,
  labels = [],
  infoData,
  backgroundColor,
  titleText,
  other = false,
  displayLegend = true,
  displayTitle = true,
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
        display: displayLegend,
        position: "left",
        align: "center",
        borderWidth: 1,
        borderColor: [...backgroundColor],
      },

      title: {
        display: displayTitle,
        position: "top",
        font: {
          size: 16,
          family: "vazir",
          lineHeight: 1,
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

export const renderChartTerritory = ({
  id,
  type,
  labels = [],
  infoData,
  titleText,
  other = false,
  displayLegend = true,
  displayTitle = true,
  otherData = false,
}) => {
  if (other) labels = other();
  if (otherData) infoData = otherData();
  const data = {
    labels: [...infoData.labels],
    datasets: [
      {
        label: [...infoData.labels],
        data: [...infoData.dataValues],
        backgroundColor: [...infoData.colors],
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
        borderColor: [...infoData.colors],
      },
      title: {
        display: displayTitle,
        position: "top",
        padding: {
          bottom: 1,
        },
        font: {
          size: 20,
          family: "arial",
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
