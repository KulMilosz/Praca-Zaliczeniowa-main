import { homeSite, renderSkills } from "./homeSite.js";
import { aboutSite } from "./aboutSite.js";
import { projectsSite } from "./projectsSite.js";
import { contactSite, setValidationEnabled } from "./contactSite.js";
import { messagesSite } from "./messagesSite.js";
import { validateForm } from "./contactSite.js";
import { addNewMessage } from "./messagesSite.js";
import { addNewProject } from "./projectsSite.js";

const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

const heroText1 = document.getElementById("hero-t1");
const heroText2 = document.getElementById("hero-t2");
const projects = [];

const personalInfo = {
  name: "Jan",
  surname: "Kowalski",
  phoneNumber: "+123 456 789",
  email: "jan_kowalski@gmail.com",
};

function renderPage(site) {
  const main = document.getElementById("main");
  main.innerHTML = "";

  site.elements.forEach((el) => {
    const newElement = createElement(el);
    if (newElement) {
      main.appendChild(newElement);
    }
  });

  const contactButton = document.getElementById("contact-button");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");

  if (nameField) {
    nameField.addEventListener("input", function () {
      validateForm(nameField);
    });
  }

  if (emailField) {
    emailField.addEventListener("input", function () {
      validateForm(emailField);
    });
  }

  if (messageField) {
    messageField.addEventListener("input", function () {
      validateForm(messageField);
    });
  }

  if (contactButton) {
    contactButton.addEventListener("click", function () {
      setValidationEnabled(true);

      if (nameField && emailField && messageField) {
        const isNameValid = validateForm(nameField);
        const isEmailValid = validateForm(emailField);
        const isMessageValid = validateForm(messageField);

        if (isNameValid && isEmailValid && isMessageValid) {
          const newName = nameField.value;
          const newEmail = emailField.value;
          const newMessage = messageField.value;
          nameField.value = "";
          emailField.value = "";
          messageField.value = "";
          setValidationEnabled(false);
          const nameError = document.getElementById("nameError");
          const emailError = document.getElementById("emailError");
          const messageError = document.getElementById("messageError");
          if (nameError) nameError.textContent = "";
          if (emailError) emailError.textContent = "";
          if (messageError) messageError.textContent = "";
          const newMessageDiv = addNewMessage(newName, newEmail, newMessage);
          messagesSite.elements[0].children.push(newMessageDiv);
        }
      }
    });
  }

  const projectsOverlay = document.getElementById("overlay");
  const addProjectsButton = document.getElementById("projects-button");
  const closeOverlayButton = document.getElementById("close-button");
  const noProjectsMessage = document.getElementById("noProjects-message");

  if (addProjectsButton) {
    addProjectsButton.addEventListener("click", () => {
      projectsOverlay.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", disableZoom, { passive: false });
      document.addEventListener("keydown", disableZoom);
      document.body.style.touchAction = "none";
      noProjectsMessage.style.display = "none";
    });
  }

  if (closeOverlayButton) {
    closeOverlayButton.addEventListener("click", () => {
      const inputElements = document.querySelectorAll("input");
      inputElements.forEach((input) => {
        input.style.borderBottom = "";
      });
      projectsOverlay.style.display = "none";
      document.body.style.overflow = "";
      document.removeEventListener("wheel", disableZoom, { passive: false });
      document.removeEventListener("keydown", disableZoom);
      document.body.style.touchAction = "";

      const titleField = document.getElementById("project-title");
      const technologiesField = document.getElementById("project-technologies");

      if (titleField) titleField.value = "";
      if (technologiesField) technologiesField.value = "";

      const titleError = document.getElementById("project-titleError");
      const technologiesError = document.getElementById(
        "project-technologiesError"
      );

      if (titleError) titleError.textContent = "";
      if (technologiesError) technologiesError.textContent = "";
    });
  }
}

function disableZoom(e) {
  if (e.type === "wheel" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
  }

  if (
    e.type === "keydown" &&
    (e.ctrlKey || e.metaKey) &&
    (e.key === "+" || e.key === "-" || e.key === "=")
  ) {
    e.preventDefault();
  }
}

function createElement(el) {
  if (!el.type) {
    return "brak elementu";
  }

  let newElement;

  if (el.type === "photo") {
    newElement = document.createElement("img");
    if (el.src) newElement.src = el.src;
    if (el.alt) newElement.alt = el.alt;
  } else {
    newElement = document.createElement(el.type);
    if (el.content) newElement.textContent = el.content;
  }

  if (el.id) newElement.id = el.id;
  if (el.class) newElement.classList.add(...el.class.split(" "));
  if (el.attributes) {
    for (let [key, value] of Object.entries(el.attributes)) {
      newElement.setAttribute(key, value);
    }
  }

  if (el.children) {
    el.children.forEach((child) => {
      const childElement = createElement(child);
      if (childElement) newElement.appendChild(childElement);
    });
  }

  return newElement;
}

function resetLinkColors() {
  const links = document.querySelectorAll(
    ".home-link, .about-link, .projects-link, .contact-link, .messages-link"
  );
  links.forEach((link) => {
    link.style.color = "";
  });
}
function setActiveLink(link) {
  if (link) {
    link.style.color = "#ADB6C4";
  }
}

function setupMenuLinks() {
  const links = document.querySelectorAll(
    ".home-link, .about-link, .projects-link, .contact-link, .messages-link"
  );

  links.forEach((link) => {
    link.addEventListener("click", function () {
      const clickedClass = link.classList[0];
      resetLinkColors();
      const matchingLinks = document.querySelectorAll(`.${clickedClass}`);
      matchingLinks.forEach((matchedLink) => {
        setActiveLink(matchedLink);
      });
      if (link.classList.contains("home-link")) {
        heroText1.textContent =
          personalInfo.name.toUpperCase() +
          " " +
          personalInfo.surname.toUpperCase();
        heroText2.textContent = "WEB-DESIGNER";
        renderPage(homeSite);
        renderSkills();
        const projectsHome = document.getElementById("home-projects");
        renderProjects(projectsHome, projects, "home");
        const leftArrow = document.getElementById("home-left");
        const rightArrow = document.getElementById("home-right");

        if (leftArrow && rightArrow) {
          leftArrow.addEventListener("click", () => {
            shiftProjects("left", projectsHome, projects, "home");
          });

          rightArrow.addEventListener("click", () => {
            shiftProjects("right", projectsHome, projects, "home");
          });
        }
      } else if (link.classList.contains("projects-link")) {
        heroText1.textContent = "MY PROJECTS";
        heroText2.textContent = "MADE WITH LOVE";
        menu.classList.toggle("active");
        renderPage(projectsSite);
        const addProjectButton = document.getElementById("addProjects-button");
        const projectsWrapper = document.getElementById("projects-wrapper");
        renderProjects(projectsWrapper, projects, "projects");
        setupDeleteProjectButtons();
        addProjectsToSite(addProjectButton, projectsWrapper);
      } else if (link.classList.contains("about-link")) {
        heroText1.textContent = "ABOUT ME";
        heroText2.textContent =
          "IT’S A-ME, " + personalInfo.name.toUpperCase() + "!";
        renderPage(aboutSite);
        const aboutButton = document.getElementById("about-button");
        if (aboutButton) {
          aboutButton.addEventListener("click", function () {
            resetLinkColors();
            const contactLinks = document.querySelectorAll(".contact-link");
            contactLinks.forEach((contactLink) => {
              setActiveLink(contactLink);
            });
            heroText1.textContent = "CONTACT ME";
            heroText2.textContent = "SAY HELLO TO ME";
            renderPage(contactSite);
          });
        }
      } else if (link.classList.contains("contact-link")) {
        heroText1.textContent = "CONTACT ME";
        heroText2.textContent = "SAY HELLO TO ME";
        renderPage(contactSite);
      } else if (link.classList.contains("messages-link")) {
        heroText1.textContent = "MESSAGES";
        heroText2.textContent = "MESSAGE FROM THE INTERESTED PERSON";
        renderPage(messagesSite);

      }
      menu.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    });
  });
  const homeLinks = document.querySelectorAll(".home-link");
  homeLinks.forEach((homeLink) => {
    setActiveLink(homeLink);
  });
}


function addProjectsToSite(button, projectsWrapper) {
  const titleField = document.getElementById("project-title");
  const technologiesField = document.getElementById("project-technologies");

  if (titleField) {
    titleField.addEventListener("input", function () {
      validateForm(titleField);
    });
  }

  if (technologiesField) {
    technologiesField.addEventListener("input", function () {
      validateForm(technologiesField);
    });
  }

  if (button) {
    button.addEventListener("click", function () {
      setValidationEnabled(true);
      if (titleField && technologiesField) {
        const isTitleValid = validateForm(titleField);
        const isTechnologiesValid = validateForm(technologiesField);
        if (isTitleValid && isTechnologiesValid) {
          const title = titleField.value;
          const technologies = technologiesField.value;
          titleField.value = "";
          technologiesField.value = "";
          setValidationEnabled(false);

          const titleError = document.getElementById("project-titleError");
          const technologiesError = document.getElementById(
            "project-technologiesError"
          );
          if (titleError) titleError.textContent = "";
          if (technologiesError) technologiesError.textContent = "";

          const newProjectDiv = addNewProject(title, technologies);
          newProjectDiv.dataset.projectId = `project-${Date.now()}`;
          projects.push(newProjectDiv);

          const projectsOverlay = document.getElementById("overlay");
          projectsOverlay.style.display = "none";
          document.body.style.overflow = "";
          document.removeEventListener("wheel", disableZoom, {
            passive: false,
          });
          document.removeEventListener("keydown", disableZoom);
          document.body.style.touchAction = "";
          renderProjects(projectsWrapper, projects, "projects");
          setupDeleteProjectButtons();
        }
      }
    });
  }
}

let projectsIndex = 0;

function renderProjects(projectsWrapper, projects, projectType) {
  projectsWrapper.innerHTML = "";

  const noProjectsMessage = document.getElementById("noProjects-message");

  if (projectType === "projects" && projects.length === 0) {
    noProjectsMessage.style.display = "flex";
    return;
  }

  if (projectType == -"projects" && projects.length > 0) {
    noProjectsMessage.style.display = "none";
  }

  let projectsToRender = [];

  if (projectType === "home") {
    const totalProjects = projects.length;
    const projectsDiv = document.getElementById("home-projects");

    if (totalProjects === 0) {
      projectsDiv.style.display = "none";
      return;
    }

    for (let i = 0; i < Math.min(3, totalProjects); i++) {
      const currentIndex = (projectsIndex + i) % totalProjects;
      projectsToRender.push(projects[currentIndex]);
    }
  } else {
    projectsToRender = projects;
  }

  projectsToRender.forEach((project) => {
    if (projectType === "home") {
      const deleteButtons = project.querySelectorAll(".deleteProject");
      deleteButtons.forEach((button) => {
        button.style.display = "none";
      });
    } else if (projectType === "projects") {
      const deleteButtons = project.querySelectorAll(".deleteProject");
      deleteButtons.forEach((button) => {
        button.style.display = "flex";
      });
    }
    projectsWrapper.appendChild(project);
  });

  if (projectType === "home") {
    const arrowButtonsDiv = document.getElementById("arrows-div");

    if (arrowButtonsDiv) {
      arrowButtonsDiv.style.display = projects.length > 3 ? "flex" : "none";
    }
  }
}

function shiftProjects(direction, projectsWrapper, projects, projectType) {
  if (projectType !== "home") return;

  const totalProjects = projects.length;

  if (direction === "left") {
    projectsIndex = (projectsIndex - 1 + totalProjects) % totalProjects;
  } else if (direction === "right") {
    projectsIndex = (projectsIndex + 1) % totalProjects;
  }

  renderProjects(projectsWrapper, projects, projectType);
}

function setupDeleteProjectButtons() {
  const deleteButtons = document.querySelectorAll(".deleteProject");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectElement = button.closest(".newProject");
      if (projectElement) {
        const projectId = projectElement.dataset.projectId;
        const projectIndex = projects.findIndex(
          (project) => project.dataset.projectId === projectId
        );

        if (projectIndex !== -1) {
          projects.splice(projectIndex, 1);
        }

        projectElement.remove();

        const projectsWrapper = document.getElementById("projects-wrapper");
        const noProjectsMessage = document.getElementById("noProjects-message");

        if (projects.length === 0) {
          noProjectsMessage.style.display = "flex";
        } else {
          renderProjects(projectsWrapper, projects, "projects");
          setupDeleteProjectButtons();
        }
      }
    });
  });
}

setupMenuLinks();
renderPage(homeSite);
const projectsDiv = document.getElementById("home-projects");
if (projects.length === 0) {
  projectsDiv.style.display = "none";
}
renderSkills();
