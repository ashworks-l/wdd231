export function setSectionSelection(sections) {
  const input = document.querySelector("#sectionNumber");

  input.innerHTML = "";

  sections.forEach(section => {
    const option = document.createElement("option");
    option.value = section.sectionNum;
    option.textContent = `Section ${section.sectionNum}`;
    input.appendChild(option);
  });
}