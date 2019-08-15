/* Global */
const teamColor = ["redBorder", "blueBorder"];

/* Puush Image ID */
const NoModMap = "E5t6i";
const HardRockMap = "E5t5X";
const HiddenMap = "E5t65";
const DoubleTimeMap = "E5t0o";
const FreeModMap = "E5t5G";
const TieBreakerMap = "E5t6t";
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
