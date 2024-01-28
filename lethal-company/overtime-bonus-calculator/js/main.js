const earningsInput = document.getElementById("earnings");
const quotaInput = document.getElementById("quota");
const bonusResultText = document.getElementById("overtimeBonusText");
const messageText = document.getElementById("messageText");

earningsInput.addEventListener("input", () => {
  showResult();
});

quotaInput.addEventListener("input", () => {
  showResult();
});

function showResult() {
  const earnings = earningsInput.value;
  const quota = quotaInput.value;

  if (earnings === "" || quota === "") {
    updateResult("");
    return;
  }

  const result = calculateOvertimeBonus(earningsInput.value, quotaInput.value);

  if (result < 0) {
    updateResult("");
    return;
  }

  if (result > 90 && quota.length > 2) {
    updateResult(result, "Overselling for Rend, huh? 🤪");
  } else {
    updateResult(result);
  }
}

function calculateOvertimeBonus(earnings, quota) {
  const leftover = earnings - quota;
  const result = leftover / 5 - 15;
  return Math.floor(result);
}

function updateResult(result, additionalText = null) {
  messageText.innerHTML = additionalText ? additionalText : "";
  bonusResultText.innerHTML = result;
}
