$(function () {
  $("#applyDateFrom").datepicker({
    defaultDate: new Date(),
  });
});
$(function () {
  $("#applyDateTo").datepicker({
    defaultDate: new Date(),
  });
});

firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();
var ref = database.ref("Company");

function postJob() {
  const postJobForm = document.querySelector("#postJob_form");
  const jobTitle = postJobForm["jobTitle"].value;
  const jobDescription = postJobForm["jobDescription"].value;
  const jobResponsibility = postJobForm["jobResponsibility"].value;
  const requiredSkills = postJobForm["requiredSkills"].value;
  const elegibilityCriteria = postJobForm["elegibilityCriteria"].value;
  const elegibleBranch = postJobForm["elegibleBranch"].value;
  const jobCtc = postJobForm["jobCtc"].value;
  const link = postJobForm["link"].value;
  const linkLogo = postJobForm["linkLogo"].value;
  const applyDateFrom = postJobForm["applyDateFrom"].value;
  const applyDateTo = postJobForm["applyDateTo"].value;

  var data = {
    jobTitle: jobTitle,
    jobDescription: jobDescription,
    jobResponsibility: jobResponsibility,
    requiredSkills: requiredSkills,
    elegibilityCriteria: elegibilityCriteria,
    elegibleBranch: elegibleBranch,
    jobCtc: jobCtc,
    applyDateFrom: applyDateFrom,
    applyDateTo: applyDateTo,
    linkLogo: linkLogo,
    link: link,
  };
  ref.push(data);
  window.location.replace("postjob.html");
}