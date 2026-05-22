export function setTitle(course) {
  const titleElement = document.querySelector("#courseTitle");
  titleElement.textContent = course.title;
}

export function renderSections(sections) {
  const container = document.querySelector("#sectionList");
  container.innerHTML = "";

  sections.forEach(section => {
    const div = document.createElement("div");
    div.textContent = `Section ${section.sectionNum} - Enrolled: ${section.enrolled}`;
    container.appendChild(div);
  });
}