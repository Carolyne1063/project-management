const createNewButton = document.querySelector('.create-new');
const createProjectForm = document.querySelector('.create-project-form');

const viewAll = document.querySelector('.view-all');
const displayProjectsTable = document.getElementById('displayProjects');

createProjectForm.style.display='none';
createNewButton.addEventListener('click', function() {
    event.preventDefault();


    if (createProjectForm.style.display === 'none' || createProjectForm.style.display === '') {
        createProjectForm.style.display = 'block';
    } else {
        createProjectForm.style.display = 'none';
    }
});
displayProjectsTable.style.display='none';
viewAll.addEventListener('click', function() {
    event.preventDefault();


    if (displayProjectsTable.style.display === 'none' || displayProjectsTable.style.display === '') {
        displayProjectsTable.style.display = 'block';
    } else {
        displayProjectsTable.style.display = 'none';
    }
});

createProjectForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get input values
    const projectName = document.getElementById('project-name').value;
    const description = document.getElementById('description').value;
    
    // Create new table row
    const newRow = displayProjectsTable.insertRow(-1); // Append row to the end of the table
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    // Add input values to the new row
    cell1.textContent = projectName;
    cell2.textContent = description;
    // Reset form fields
    createProjectForm.reset();
    
    let deleteProjectbtn = document.createElement('button')
    deleteProjectbtn.textContent = 'Delete'
    deleteUserbtn.addEventListener('click', ()=>{
        
        remainingProjectList = displayProjectsTable.splice(insertCell(), 1)
        
        displayProjectsTable()
    })
});


