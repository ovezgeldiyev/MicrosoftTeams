const resetBtn = document.getElementById("resetBtn");
const resetInput = document.getElementById("resetInput");

resetBtn.onclick = () => {
  resetInput.value = 0;
};

const tooltipBtn = document.getElementById("tooltipBtn");
const tooltipText = document.getElementById("tooltipText");
if (tooltipBtn) {
  tooltipBtn.onclick = () => {
    tooltipText.classList.add("active");
    setTimeout(() => tooltipText.classList.remove("active"), 1500);
  };
}
const timePickers = document.querySelectorAll(".timePicker");

timePickers.forEach((timePicker) => {
  const hoursUpBtn = timePicker.querySelector(".hoursUpBtn");
  const hoursDownBtn = timePicker.querySelector(".hoursDownBtn");
  const hoursInput = timePicker.querySelector(".hoursInput");

  const minutesUpBtn = timePicker.querySelector(".minutesUpBtn");
  const minutesDownBtn = timePicker.querySelector(".minutesDownBtn");
  const minutesInput = timePicker.querySelector(".minutesInput");

  const shiftUpBtn = timePicker.querySelector(".shiftUpBtn");
  const shiftDownBtn = timePicker.querySelector(".shiftDownBtn");
  const shiftInput = timePicker.querySelector(".shiftInput");

  hoursUpBtn.onclick = () => {
    a = hoursInput.value;
    a = parseInt(a) + 1;
    if (a <= 9) {
      hoursInput.value = "0" + a;
    } else {
      hoursInput.value = a;
    }
    if (hoursInput.value === "13") {
      hoursInput.value = "00";
    }
  };
  hoursDownBtn.onclick = () => {
    if (hoursInput.value === "00") {
      hoursInput.value = "12";
    } else {
      a = hoursInput.value;
      a = parseInt(a) - 1;
      if (a <= 9) {
        hoursInput.value = "0" + a;
      } else {
        hoursInput.value = a;
      }
    }
  };
  hoursInput.onchange = () => {
    if (hoursInput.value.length === 1) {
      hoursInput.value = "0" + hoursInput.value;
    }
    if (hoursInput.value === "13") {
      hoursInput.value = "00";
    }
    if (hoursInput.value === "-1") {
      hoursInput.value = "12";
    }
  };
  minutesUpBtn.onclick = () => {
    a = minutesInput.value;
    a = parseInt(a) + 1;
    if (a <= 9) {
      minutesInput.value = "0" + a;
    } else {
      minutesInput.value = a;
    }
    if (minutesInput.value === "60") {
      minutesInput.value = "00";
    }
  };
  minutesDownBtn.onclick = () => {
    if (minutesInput.value === "00") {
      minutesInput.value = "59";
    } else {
      a = minutesInput.value;
      a = parseInt(a) - 1;
      if (a <= 9) {
        minutesInput.value = "0" + a;
      } else {
        minutesInput.value = a;
      }
    }
  };
  minutesInput.onchange = () => {
    if (minutesInput.value.length === 1) {
      minutesInput.value = "0" + minutesInput.value;
    }
    if (minutesInput.value === "60") {
      minutesInput.value = "00";
    }
    if (minutesInput.value === "-1") {
      minutesInput.value = "59";
    }
  };
  shiftUpBtn.onclick = () => {
    if (shiftInput.value === "AM") {
      shiftInput.value = "PM";
    } else {
      shiftInput.value = "AM";
    }
  };
  shiftDownBtn.onclick = () => {
    if (shiftInput.value === "AM") {
      shiftInput.value = "PM";
    } else {
      shiftInput.value = "AM";
    }
  };
});
