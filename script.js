function display(sectionId) { 
  // hide all sections
  const sections = document.querySelectorAll('[id^="sectionFoodies"]');
  sections.forEach(sec => sec.classList.add("d-none"));

  // show only the one we clicked
  document.getElementById(sectionId).classList.remove("d-none");
}

window.onload = function() {
  // default: show home, hide others
  display("sectionFoodies-home-page");

  // attach event listeners
  document.getElementById("btnGetStarted").addEventListener("click", function() {
    display("sectionFoodies-menu-section");
  });

  document.getElementById("btnBreakfastMenu").addEventListener("click", function() {
    display("sectionFoodies-breakfast-section");
  });

  document.getElementById("btnMainCourseMenu").addEventListener("click", function() {
    display("sectionFoodies-main-course-section");
  });

  document.getElementById("btnSnacksMenu").addEventListener("click", function() {
    display("sectionFoodies-snacks-section");
  });

  document.getElementById("btnDessertsMenu").addEventListener("click", function() {
    display("sectionFoodies-desserts-section");
  });

  document.getElementById("btnBackToTop").addEventListener("click", function() {
    display("sectionFoodies-home-page");
  });

  document.getElementById("btnNext").addEventListener("click", function() {
    display("sectionFoodies-about-us");
  });

  document.getElementById("btnPrevious").addEventListener("click", function() {
    display("sectionFoodies-menu-section");
    document.getElementById("sectionFoodies-about-us").scrollIntoView(); 
  });

  // Back button
  document.getElementById("btnBack").addEventListener("click", function() {
    display("sectionFoodies-home-page");
  });

  // Next button
  document.getElementById("btnPrevious").addEventListener("click", function() {
    display("sectionFoodies-menu-section");
  });

};
