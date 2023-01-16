let nStatus = document.getElementById("network-status");

const checkConnection = () => {
  return navigator.onLine;
};

const updateConnectionStatus = (status) => {
  if (status) {
    nStatus.textContent = "Connected";
  } else {
    nStatus.textContent = "Not Connected";
  }
};

setInterval(() => {
  updateConnectionStatus(checkConnection());
}, 300);


updateConnectionStatus(checkConnection())