// Find the button, then show an alert whenever it is clicked
const partsButton = document.getElementById("parts-btn");

partsButton.addEventListener("click", function () {
  alert(
    "Parts checklist:\n\n" +
    "- CPU\n" +
    "- Motherboard\n" +
    "- RAM\n" +
    "- Storage (SSD or hard drive)\n" +
    "- GPU\n" +
    "- Power supply\n" +
    "- Case"
  );
});
