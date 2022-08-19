const taskBoxes = document.querySelectorAll('.today-task-box-content');

 for (let i = 0; i < taskBoxes.length; i++) {
     taskBoxes[i].addEventListener("click", () => {
       const taskCheckbox = taskBoxes[i].querySelector('.task-checkbox-container .task-checkbox');
       
       taskCheckbox.checked ? taskCheckbox.checked = false : taskCheckbox.checked = true;
       });
 }
