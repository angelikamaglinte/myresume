// function for Main Tab
function showSelectedWork() {
    // Get references to the selected work and projects sections
    var selectedWorkSection = document.getElementById("selectedWorkSection");
    var projectsSection = document.getElementById("projectsSection");
    var aboutSection = document.getElementById("aboutMeSection");

    // Show the selected work section and hide the projects and about sections
    selectedWorkSection.style.display = "block";
    projectsSection.style.display = "none";
    aboutSection.style.display = "none";
}

// function for Project Tab
function showProjects() {
    // Get references to the selected work and projects sections
    var selectedWorkSection = document.getElementById("selectedWorkSection");
    var projectsSection = document.getElementById("projectsSection");
    var aboutSection = document.getElementById("aboutMeSection");

    // Show the projects section and hide the selected work and about sections
    selectedWorkSection.style.display = "none";
    projectsSection.style.display = "block";
    aboutSection.style.display = "none";
}

// function for About Tab
function showAbout() {
    // Get references to the selected work and projects sections
    var selectedWorkSection = document.getElementById("selectedWorkSection");
    var projectsSection = document.getElementById("projectsSection");
    var aboutSection = document.getElementById("aboutMeSection");

    // Show the about section and hide the selected work and projects sections
    selectedWorkSection.style.display = "none";
    projectsSection.style.display = "none";
    aboutSection.style.display = "block";
}

// send email upon clicking email buttons
function sendEmail() {
    var email = 'maglinteangelika@gmail.com';
    var subject = 'Subject of the email';
    var body = 'Body of the email';

    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Create a temporary link element and trigger a click
    var tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none'; // Hide the link
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}