// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

import contentmou from './content.json';

// Define the language reload anchors
// Define the language reload anchors
// var language = require('./content.json');

// Check if a hash value exists in the URL
if (window.location.hash) {

  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#el") {
    download1.textContent = language.el.download1;
    download2.textContent = language.el.download2;
    aboutLink.textContent = language.el.aboutLink;
    cvLink.textContent = language.el.cvLink;
    name1.textContent = language.el.name1;
    landing.textContent = language.el.landing;
    descriptionAbout.textContent = language.el.descriptionAbout;
    titleAbout.textContent = language.el.titleAbout;
    subtitleInfo.textContent = language.el.subtitleInfo;
    titleInfo.innerHTML = language.el.titleInfo;
    descriptionInfo.innerHTML = language.el.descriptionInfo;
    name2.textContent = language.el.name2;
    based.textContent = language.el.based;
    cityBased.textContent = language.el.cityBased;
    from.textContent = language.el.from;
    cityOrigin.textContent = language.el.cityOrigin;
    sectionDescription.textContent = language.el.sectionDescription;
    sectionTitle.textContent = language.el.sectionTitle;
    education.textContent = language.el.education;
    education1Degree.textContent = language.el.education2Degree;
    education1Title.textContent = language.el.education1Title;
    education1Description.textContent = language.el.education1Description;
    education2Degree.textContent = language.el.education2Degree;
    education2Title.textContent = language.el.education2Title;
    education2aDescription.textContent = language.el.education2aDescription;
    education2bDescription.textContent = language.el.education2bDescription;
    education3Degree.textContent = language.el.education3Degree;
    education3Title.textContent = language.el.education3Title;
    education3Description.textContent = language.el.education3Description;
    education4Degree.textContent = language.el.education4Degree;
    education4Title.textContent = language.el.education4Title;
    education4School.textContent = language.el.education4School;
    education4Description.textContent = language.el.education4Description;
    experience.textContent = language.el.experience;
    experience1Title.textContent = language.el.experience1Title;
    experience1Description.innerHTML = language.el.experience1Description;
    experience2Title.textContent = language.el.experience2Title;
    experience2Description.innerHTML = language.el.experience2Description;
    experience3Title.textContent = language.el.experience3Title;
    experience3Description.innerHTML = language.el.experience3Description;
    languages.textContent = language.el.languages;
    mySkills.textContent = language.el.mySkills;
  }
  if (window.location.hash == "#fr") {
    download1.textContent = language.fr.download1;
    download2.textContent = language.fr.download2;
    aboutLink.textContent = language.fr.aboutLink;
    cvLink.textContent = language.fr.cvLink;
    name1.textContent = language.fr.name1;
    landing.textContent = language.fr.landing;
    descriptionAbout.textContent = language.fr.descriptionAbout;
    titleAbout.textContent = language.fr.titleAbout;
    subtitleInfo.textContent = language.fr.subtitleInfo;
    titleInfo.innerHTML = language.fr.titleInfo;
    descriptionInfo.innerHTML = language.fr.descriptionInfo;
    name2.textContent = language.fr.name2;
    based.textContent = language.fr.based;
    cityBased.textContent = language.fr.cityBased;
    from.textContent = language.fr.from;
    cityOrigin.textContent = language.fr.cityOrigin;
    sectionDescription.textContent = language.fr.sectionDescription;
    sectionTitle.textContent = language.fr.sectionTitle;
    education.textContent = language.fr.education;
    education1Degree.textContent = language.fr.education2Degree;
    education1Title.textContent = language.fr.education1Title;
    education1Description.textContent = language.fr.education1Description;
    education2Degree.textContent = language.fr.education2Degree;
    education2Title.textContent = language.fr.education2Title;
    education2aDescription.textContent = language.fr.education2aDescription;
    education2bDescription.textContent = language.fr.education2bDescription;
    education3Degree.textContent = language.fr.education3Degree;
    education3Title.textContent = language.fr.education3Title;
    education3Description.textContent = language.fr.education3Description;
    education4Degree.textContent = language.fr.education4Degree;
    education4Title.textContent = language.fr.education4Title;
    education4School.textContent = language.fr.education4School;
    education4Description.textContent = language.fr.education4Description;
    experience.textContent = language.fr.experience;
    experience1Title.textContent = language.fr.experience1Title;
    experience1Description.innerHTML = language.fr.experience1Description;
    experience2Title.textContent = language.fr.experience2Title;
    experience2Description.innerHTML = language.fr.experience2Description;
    experience3Title.textContent = language.fr.experience3Title;
    experience3Description.innerHTML = language.fr.experience3Description;
    languages.textContent = language.fr.languages;
    mySkills.textContent = language.fr.mySkills;
  }
}
