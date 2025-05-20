function calculateEqn101() {
  const T = parseFloat(document.getElementById('tempVisc').value);
  const C1 = parseFloat(document.getElementById('c1Visc').value);
  const C2 = parseFloat(document.getElementById('c2Visc').value);
  const C3 = parseFloat(document.getElementById('c3Visc').value);
  const C4 = parseFloat(document.getElementById('c4Visc').value);
  const C5 = parseFloat(document.getElementById('c5Visc').value);

  const viscosity_Pa_s = Math.exp(C1 + (C2 / T) + C3 * Math.log(T) + C4 * Math.pow(T, C5));
  const viscosity_lbfts = viscosity_Pa_s * 0.6719689948133;

  document.getElementById('viscosityResult').innerHTML = `
    Viscosity:<br>
    ${viscosity_Pa_s.toExponential(5)} Pa·s<br>
    ${viscosity_lbfts.toExponential(5)} lb/ft·s
  `;
}

function calculateEqn100() {
  const T = parseFloat(document.getElementById('tempVisc').value);
  const C1 = parseFloat(document.getElementById('c1Visc').value);
  const C2 = parseFloat(document.getElementById('c2Visc').value);
  const C3 = parseFloat(document.getElementById('c3Visc').value);
  const C4 = parseFloat(document.getElementById('c4Visc').value);
  const C5 = parseFloat(document.getElementById('c5Visc').value);

  const viscosity_Pa_s = C1 + C2 * T + C3 * T ** 2 + C4 * T ** 3 + C5 * T ** 4;
  const viscosity_lbfts = viscosity_Pa_s * 0.02088543;

  document.getElementById('viscosityResult').innerHTML = `
    Viscosity:<br>
    ${viscosity_Pa_s.toExponential(5)} Pa·s<br>
    ${viscosity_lbfts.toExponential(5)} lb/ft·s
  `;
}
