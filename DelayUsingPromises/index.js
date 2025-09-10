const statu = document.getElementById("status");

const fetchDataWithDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received successfully!");
    }, 3500);
  });
};

statu.textContent = "Loading...";

fetchDataWithDelay()
  .then((result) => {
    statu.textContent = result;
    console.log(result);
  })
  .catch((error) => {
    statu.textContent = error;
    console.error(error);
  });
