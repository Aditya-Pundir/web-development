const taskbar = document.getElementsByClassName("taskbar")[0];
const startMenu = document.getElementById("startMenu");
const notepad = document.getElementById("notepad");
const notepadArea = document.getElementsByClassName("notepad")[0];
const windowsBtn = document.getElementById("logoBtn");
const explorer = document.getElementById("explorer");
const explorerWindow = document.getElementsByClassName("explorerWindow")[0];

explorer.addEventListener("click", () => {
  if (explorerWindow.style.top == "95%") {
    explorerWindow.style.top = "-8%";
  } else {
    explorerWindow.style.top = "95%";
  }
});
windowsBtn.addEventListener("click", () => {
  if (startMenu.style.bottom == "8%") {
    startMenu.style.bottom = "-76%";
  } else {
    startMenu.style.bottom = "8%";
  }
});
notepad.addEventListener("click", () => {
  if (notepadArea.style.top == "95%") {
    notepadArea.style.top = "18%";
  } else {
    notepadArea.style.top = "95%";
  }
});
