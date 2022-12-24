// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
var language = {
  en: {
    download1: "Download CV",
    download2: "Download CV",
    aboutLink: "About",
    cvLink: "Resume",
    contactLink: "Contact",
    name1: "George Tsagiannis",
    landing: "Full-Stack Web Development",
    descriptionAbout: "Get to know me",
    titleAbout: "About Me",
    subtitleInfo: "Who am I?",
    titleInfo: "I'm George Tsagiannis, <br>a Full-Stack Web Developer <br><em><small>(with a thing for data)</small></em>",
    decriptionInfo: "I am a <em>Le Wagon</em>  Web Development graduate, " +
    "with a strong scientific background in Mathematics, " +
    "Algorithms and Scientific Programming and a constant " +
    "drive to learn, create, and make things better. " +
    "With extensive experience teaching and tutoring " +
    "Physics and Maths, and a wide range of interests and soft skills, " +
    "I'd be an asset with unlimited potential for any development team. So, let's get in touch...",
    name2: "George Tsagiannis",
    based: "Based in:",
    cityBased: "London, UK",
    from: "From:",
    cityOrigin: "Athens, Greece",
    sectionDescription: "Check out my Resume",
    sectionTitle: "Resume",
    education: "Education",
    education1Degree: "Computer Programming Bootcamp",
    education1Title: "Full-Stack Web Development",
    education1Description: "10-week intensive coding bootcamp learning HTML, " +
    "CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails. " +
    "Designed, implemented and shipped to production a clone of AirBnB and a " +
    "Rails prototype of 'Beats Club', a music communities' social media project",
    education2Degree: "MRes (Master Recherche)",
    education2Title: "Computational Social Sciences",
    education2aDescription: "- Advanced Technology in the Humanities and Social Sciences, " +
    "Topic Modeling, Machine Learning, NLP, Text Mining & Analytics",
    education2bDescription: "- M.Res. Thesis : \"Computational & traditional source analysis",
    education3Degree: "BA (Licence)",
    education3Title:"Science-Technology-Society",
    education3Description: "Special Interests: Innovation, Alternative Modernity, AI, " +
    "Decision Making Limits, Technoscience, Technosocial process, Deliberative democracy, " +
    "Social constructions, Measurement, Metrics & System's Control",
    education4Degree: "Integrated MEng (5-year, Díploma)",
    education4Title: "Applied Mathematics and Physics",
    education4School: "National Technical University of Athens (NTUA) / 2001 - 2009",
    education4Description: "MEng Thesis: \"Evaluation and modelling of Greek industry and natural resources during 19th century",
    experience: "Experience",
    experience1Title: "Data GUI Developer",
    experience1Description: "In collaboration with:" +
    "<br>- Université Paris Lumières (Paris Nanterre) and" +
    "<br>- National and Kapodistrian University of Athens." +
    "<br>Implementation of automated scientific computational and data visualisation algorithms " +
    "and development of their Graphic User Interface (cross-plarform and web) apps using Python, Tcl/Tk, R",
    experience2Title: "Jr ML Engineer",
    experience2Description: "- Worked on various ML models with large-scale datasets assuring workflow and processes of " +
    "scalable and accurate forecasting systems (wind/solar power, load demand, marginal pricing)" +
    "<br>- Analyse live and historical data to provide insights and KPIs, working closely with product, engineering, and business units." +
    "<br>- Graphic User Interface development for I/U of earthquake data/risk",
    experience3Title: "Statistical Text Data Analyst",
    experience3Description: "- Manipulate, analyse and interpret demographic and market datasets" +
    "<br>- Data modelling, exploratory analysis and definition of model ingestion rules" +
    "<br>- Worked with NLP techniques (Topic Modeling, Text classification, Entity " +
    "Recognition) applied to raw text datasets (contact with IDHES research team)",
    languages: "Languages, Technologies and Tools",
    mySkills: "My Skills"
  },
  fr : {
    download1: "Téléchargez mon CV",
    download2: "Téléchargez mon CV",
    aboutLink : "À propos",
    cvLink : "CV",
    contactLink: "Contacter",
    name1: "Yorgos Tsagiannis",
    landing: "Full-Stack Web Development",
    descriptionAbout: "Apprenez à me connaître",
    titleAbout : "À propos de moi",
    subtitleInfo : "Qui suis-je ?",
    titleInfo : "Je suis Yorgos Tsagiannis, <br>un développeur Web Full-Stack <br><em><small>(avec un faible pour les données)</small></em>",
    descriptionInfo: "Je suis diplômé du bootcamp <em>Le Wagon</em> en Développement Web, " +
    "avec une solide formation scientifique en Mathématiques, " +
    "en Algorithmes et en Programmation Scientifique et une constante " +
    "envie d'apprendre, de créer et d'améliorer les choses." +
    "Avec une vaste expérience dans l'enseignement et le tutorat" +
    "en Physique et mathématiques, et un large éventail d'intérêts et de compétences relationnelles, " +
    "je serais un atout avec un potentiel illimité pour toute équipe de développement de logiciel et d’applications web. Alors, prenons contact...",
    name2: "Yorgos Tsagiannis",
    based : "Basé à :",
    cityBased : "Londres, Royaume-Uni",
    from : "De :",
    cityOrigin : "Athènes, Grèce",
    sectionDescription : "Consulter mon CV",
    sectionTitle : "CV",
    education : "Formation",
    education1Degree : "Bootcamp de programmation informatique",
    education1Title : "Développement Web Full-Stack",
    education1Description : "bootcamp de codage (10 semaines intensives) d'apprentissage HTML, " +
    "CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku et Ruby on Rails. " +
    "Conçeption, implémentation et mise en production un clone d'AirBnB et un " +
    "Prototype Rails de 'Beats Club', un projet de médias sociaux des communautés musicales",
    education2Degree : "Master Recherche",
    education2Title : "Sciences sociales computationnelles",
    education2aDescription : "- Technologie avancée en sciences humaines et sociales, " +
    "Topic Modeling, Machine Learning, NLP, Text Mining & Analytics",
    education2bDescription : "- Mémoire: \"Analyse de sources informatiques et traditionnelles\"",
    education3Degree: "Licence",
    education3Title : "Science-Technologie-Société",
    education3Description : "Intérêts particuliers : innovation, modernité alternative, IA, " +
    "Limites de la prise de décision, Technoscience, Processus technosocial, Démocratie délibérative, " +
    "Constructions sociales, Mesure, Métrique & Contrôle des Systèmes",
    education4Degree : "Diplome (BAC+5)",
    education4Title : "Mathématiques et Physique Appliquées",
    education4School : "Ecole Polytechnique d'Athènes (NTUA) / 2001 - 2009",
    education4Description : "Mémoire: \"Évaluation et modélisation de l'industrie et des ressources naturelles grecques au XIXe siècle\"",
    experience : "Expérience",
    experience1Title : "Développeur d'interface graphique de données",
    experience1Description : "En collaboration avec :" +
    "<br>- l'Université Paris Lumières (Paris Nanterre) et" +
    "<br>- l'Université nationale et kapodistrienne d'Athènes (UoA)." +
    "<br>Mise en place d'algorithmes automatisés de calcul scientifique et de visualisation de données" +
    "et le développement de leurs applications d'interface utilisateur graphique (multiplateforme et Web) en utilisant Python, Tcl/Tk, R",
    experience2Title : "Jr ML Engineer",
    experience2Description : "- Travailler sur divers modèles ML avec des ensembles de données à grande échelle assurant le flux de travail et les processus de " +
    "systèmes de prévision évolutifs et précis (énergie éolienne/solaire, demande de charge, tarification marginale)" +
    "<br>- Analyser les données en temps réel et historiques pour fournir des informations et des indicateurs de performance clés, en étroite collaboration avec les unités produit, d'ingénierie et commerciales." +
    "<br>- Développement d'une interface utilisateur graphique pour l'I/U des données/risques sismiques",
    experience3Title : "Analyste de données textuelles statistiques",
    experience3Description : "- Manipuler, analyser et interpréter des ensembles de données démographiques et de marché" +
    "<br>- Modélisation des données, analyse exploratoire et définition des règles d'ingestion des modèles" +
    "<br>- A travaillé avec les techniques NLP (Topic Modeling, Text classification, Entity " +
    "Reconnaissance) appliquée aux jeux de données texte brut (contact avec l'équipe de recherche de l'IDHES)",
    languages : "Langages, Technologies et Outils",
    mySkills : "Mes compétences"
  },
  el: {
    download1: "Λήψη CV",
    download2: "Λήψη CV",
    aboutLink: "Σχετικά",
    cvLink: "Βιογραφικό",
    contactLink: "Επικοινωνία",
    name1: "Γιώργος Τσαγιάννης",
    landing: "Full-Stack Web Development",
    descriptionAbout: "Γνωρίστε με",
    titleAbout: "Σχετικά με εμένα",
    subtitleInfo: "Ποιος είμαι;",
    titleInfo: "Με λένε Γιώργο Τσαγιάννη, κι ειμαι <br>Web Full-Stack Developer<br><em><small>(με μία αδυναμία στα Δεδομένα)</small></em>",
    descriptionInfo: "Είμαι απόφοιτος του bootcamp Web Development της <em>Le Wagon</em>," +
    "με στέρεο επιστημονικό υπόβαθρο στα Μαθηματικά, " +
    "στους Αλγορίθμους και στον Επιστημονικό Προγραμματισμό και μια σταθερά" +
    "επιθυμία κι ορεξη για μάθηση, δημιουργία και το να κάνω τα πράγματα όλο και καλύτερα." +
    "Με μεγάλη εμπειρία διδασκαλίας σε Φυσική και Μαθηματικά, και ένα ευρύ φάσμα ενδιαφερόντων και τεχνικών και διαπροσωπικών δεξιοτήτων, " +
    "Θα ήμουν ένα πλεονέκτημα με απεριόριστες δυνατότητες για οποιαδήποτε ομάδα ανάπτυξης. Ας έρθουμε λοιπόν σε επαφή...",
    name2: "Γιώργος Τσαγιάννης",
    based: "Με βάση:",
    cityBased: "Λονδίνο, Ηνωμένο Βασίλειο",
    from: "Από:",
    cityOrigin: "Αθήνα",
    sectionDescription: "Δείτε το βιογραφικό μου",
    sectionTitle: "Βιογραφικό",
    education: "Εκπαίδευση",
    education1Degree: "Προγραμματισμός Υπολογιστών Bootcamp",
    education1Title: "Full-Stack Web Development",
    education1Description: "Bootcamp προγραμματισμού. Εκμάθηση" +
    "CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku και Ruby on Rails. " +
    "Σχεδιασμός, υλοποίηση και παραγωγή ένος κλώνου AirBnB και ενός " +
    "Rails prototype του \"Beats Club\", ενός project κοινωνικής δικτύωσης μουσικών κοινοτήτων",
    education2Degree: "MRes (Master Recherche)",
    education2Title: "Υπολογιστικές Κοινωνικές Επιστήμες",
    education2aDescription: "- Προηγμένη Τεχνολογία στις Ανθρωπιστικές και Κοινωνικές Επιστήμες, " +
    "Machine Learning, Topic Modeling, NLP, εξόρυξη κι ανάλυση κειμένου",
    education2bDescription: "- Διπλωματική : \"Υπολογιστική & παραδοσιακή ανάλυση πηγών\"",
    education3Degree: "BA (Licence)",
    education3Title:"Επιστήμη-Τεχνολογία-Κοινωνία (STS)",
    education3Description: "Ειδικά Ενδιαφέροντα: Καινοτομία, Εναλλακτική Νεωτερικότητα, Τεχνητή Νοημοσύνη, " +
    "Όρια λήψης αποφάσεων, Τεχνοεπιστήμη, Τεχνοκοινωνική Διαδικασία, Διαβουλευτική Δημοκρατία, " +
    "Κοινωνικές κατασκευές, Μέτρηση, Μετρήσεις & Έλεγχος Συστήματος",
    education4Degree: "Δίπλωμα ΕΜΠ",
    education4Title: "Εφαρμοσμένα Μαθηματικά και Φυσικές Επιστήμες",
    education4School: "Εθνικό Μετσόβιο Πολυτεχνείο (ΕΜΠ) / 2001 - 2009",
    education4Description: "Διπλωματική: \"Αξιολόγηση και μοντελοποίηση της ελληνικής βιομηχανίας και των φυσικών πόρων κατά τον 19ο αιώνα\"",
    experience: "Εμπειρία",
    experience1Title: "Data GUI Developer",
    experience1Description: "Σε συνεργασία με τα πανεπιστημια:" +
    "<br>- Université Paris Lumières (Paris Nanterre) και" +
    "<br>- Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών." +
    "<br>Εφαρμογή αυτοματοποιημένων επιστημονικών υπολογιστικών αλγορίθμων και οπτικοποίησης δεδομένων " +
    "και ανάπτυξη των εφαρμογών γραφικων διεπαφών χρήστη (cross-plarform και web) χρησιμοποιώντας Python, Tcl/Tk, R",
    experience2Title: "Jr ML Engineer",
    experience2Description: "- Εργάστηκα σε διάφορα μοντέλα ML με σύνολα δεδομένων μεγάλης κλίμακας διασφαλίζοντας τη ροή εργασίας και τις διαδικασίες της " +
    "κλιμακούμενων και συστημάτων ακριβείας πρόβλεψης (αιολική/ηλιακή ενέργεια, ζήτηση φορτίου, οριακή τιμολόγηση)" +
    "<br>- Ανάλυση συγχρονων και ιστορικών δεδομένων για παροχή insights και KPI, σε στενή συνεργασία με μονάδες προϊόντων, μηχανικών και επιχειρήσεων." +
    "<br>- Ανάπτυξη γραφικής διεπαφής χρήστη για I/U δεδομένων/κινδύνου σεισμού",
    experience3Title: "Statistical Text Data Analyst",
    experience3Description: "- Χειρισμός, ανάλυση και ερμηνεία δημογραφικών δεδομένων και συνόλων δεδομένων αγοράς" +
    "<br>- Μοντελοποίηση δεδομένων, διερευνητική ανάλυση και ορισμός κανόνων απορρόφησης μοντέλων" +
    "<br>- Ρεχνικές NLP (Μοντελοποίηση θεμάτων, ταξινόμηση κειμένου, οντότητα " +
    "Αναγνώριση) σε σύνολα δεδομένων ακατέργαστου κειμένου (συνεργασάα με την ερευνητική ομάδα IDHES)",
    languages: "Γλώσσες, Τεχνολογίες και Εργαλεία",
    mySkills: "Δεξιότητες"
  },
};

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
