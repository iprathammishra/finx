"use strict";
// Estimate reading time from prose; tables and figures require extra inspection.
const reading = document.querySelector('#reading-time');
if (reading) {
  const copy = document.querySelector('main').cloneNode(true);
  copy.querySelectorAll('form,.controls,.meta,figure,table').forEach(node => node.remove());
  const words = copy.textContent.trim().split(/\s+/).length;
  reading.textContent = `${Math.max(1, Math.ceil(words / 220))} min read`;
}
