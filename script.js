const cropSelect = document.getElementById("crop");
  const landInput = document.getElementById("land");
  const fertilizerSelect = document.getElementById("fertilizer");
  const output = document.getElementById("output");

  // Recommended kg per acre (simplified)
  const RECOMMENDATIONS = {
    maize: { npk: 50, urea: 40, dap: 50 },
    beans: { npk: 25, urea: 20, dap: 25 },
    rice: { npk: 60, urea: 50, dap: 60 },
    vegetables: { npk: 40, urea: 30, dap: 40 }
  };

  function calculateFertilizer() {
    const crop = cropSelect.value;
    const land = parseFloat(landInput.value) || 0;
    const fertilizer = fertilizerSelect.value;

    if (land <= 0) {
      output.textContent = "Please enter a valid land size.";
      return;
    }

    const rate = RECOMMENDATIONS[crop][fertilizer];
    const total = rate * land;

    output.textContent = `You need approximately ${total.toFixed(1)} kg of fertilizer.`;
  }

  cropSelect.addEventListener("change", calculateFertilizer);
  landInput.addEventListener("input", calculateFertilizer);
  fertilizerSelect.addEventListener("change", calculateFertilizer);