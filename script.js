document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    
    const addTask = (taskText) => {
        if (taskText.trim() === '') return;

        const li = document.createElement('li');
        li.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '✕';
        deleteBtn.addEventListener('click', () => {
            li.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => taskList.removeChild(li), 300);
        });
4
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        
        li.style.opacity = '0';
        setTimeout(() => li.style.opacity = '1', 10);
    };

    
    addTaskBtn.addEventListener('click', () => {
        addTask(taskInput.value);
        taskInput.value = '';
        taskInput.focus();
    });

    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });
});