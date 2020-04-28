/* Global */
const teamColor = ["redBorder", "blueBorder"];

/* imgur Image ID */
const NoModMap = "2YrYs5A";
const HardRockMap = "HZT3fjO";
const HiddenMap = "TzTI6Pb";
const DoubleTimeMap = "QSsOfjr";
const FreeModMap = "fbIu0rj";
const TieBreakerMap = "y4K5wlJ";
/* ---------------------- */

function isInputEmpty(input) {
  // Checks wether the input is empty or not
  let bool = false;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === "") {
      bool = true;
    }
  }
  return bool;
}

function countInput(input) {
  // Checks if input is less than / equal to 60
  let bool = false;
  let count = 0;
  for (let i = 0; i < input.length - 1; i += 1) {
    count += parseInt(input[i].value);
  }
  if (count > 60) {
    bool = true;
  }
  return bool;
}
/* ------------------------------------------------------ */
