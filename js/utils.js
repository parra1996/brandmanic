export const screenShot = () => {
  loading();

  setTimeout(() => {
    html2canvas(document.body).then((canvas) => {
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.setAttribute("download", "imageName.png");
      a.setAttribute("href", url);
      a.click();
    });
  }, 1500);
};

const loading = () => {
  let timerInterval;
  Swal.fire({
    title: "Preparing to download the screenshot!",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    console.log(result);
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
};

export const goHome = () => {
  window.location.href = "index.html";
};

export const mostrarHora = () => {
  const horaActual = moment().format("MMMM Do YYYY, h:mm:ss a");
  horaActualizada.innerHTML += horaActual;
};
