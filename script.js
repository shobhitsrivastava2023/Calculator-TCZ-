const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.textContent;

    if (btnValue === "C") {
      display.value = "";
    } else if (btnValue === "←") {
      display.value = display.value.slice(0, -1);
    } else if (btnValue === "=") {
      try {
        const result = math.evaluate(display.value);
        display.value = Number.isInteger(result)
          ? result
          : Number.parseFloat(result.toFixed(8)).toString();
      } catch {
        display.value = "Error";
        console.error("Calculation error:", error);
      }
    } else {
      display.value += btnValue;
    }
  });
});
