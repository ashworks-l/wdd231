import { renderSections } from './output.mjs';

const byuiCourse = {
  title: "Web Frontend Development",
  sections: [
    { sectionNum: 1, enrolled: 25 },
    { sectionNum: 2, enrolled: 30 },
    { sectionNum: 3, enrolled: 28 }
  ],

  changeEnrollment(sectionNum, add = true) {
    this.sections.forEach(section => {
      if (section.sectionNum === sectionNum) {
        add ? section.enrolled++ : section.enrolled--;
      }
    });

    // ❗ IMPORTANTE: ya NO se llama renderSections aquí
  }
};

export default byuiCourse;