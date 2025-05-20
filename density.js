function calculateEqn105() {
  const T = parseFloat(document.getElementById('tempDensity').value);
  const MW = parseFloat(document.getElementById('mwDensity').value);
  const C1 = parseFloat(document.getElementById('c1Density').value);
  const C2 = parseFloat(document.getElementById('c2Density').value);
  const C3 = parseFloat(document.getElementById('c3Density').value);
  const C4 = parseFloat(document.getElementById('c4Density').value);

  const molPerDm3 = C1 / Math.pow(C2, 1 + Math.pow((1 - (T / C3)), C4));
  const kgPerM3 = molPerDm3 * MW;
  const lbPerFt3 = kgPerM3 * 0.06242796;

  document.getElementById('densityResult').innerHTML = `
    Density:<br>
    ${kgPerM3.toFixed(3)} kg/m³<br>
    ${lbPerFt3.toFixed(3)} lb/ft³
  `;
}

function calculateEqn2100() {
  const T = parseFloat(document.getElementById('tempDensity').value);
  const MW = parseFloat(document.getElementById('mwDensity').value);
  const C1 = parseFloat(document.getElementById('c1Density').value);
  const C2 = parseFloat(document.getElementById('c2Density').value);
  const C3 = parseFloat(document.getElementById('c3Density').value);
  const C4 = parseFloat(document.getElementById('c4Density').value);

  const molPerDm3 = C1 + C2 * T + C3 * T ** 2 + C4 * T ** 3;
  const kgPerM3 = molPerDm3 * MW;
  const lbPerFt3 = kgPerM3 * 0.06242796;

  document.getElementById('densityResult').innerHTML = `
    Density:<br>
    ${kgPerM3.toFixed(3)} kg/m³<br>
    ${lbPerFt3.toFixed(3)} lb/ft³
  `;
}
