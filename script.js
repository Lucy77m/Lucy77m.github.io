const ToggleDarkmode = () => {
    const body = document.body;
    const mode = document.querySelector('.mode');
    const icon = mode.querySelector('i');

    if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', "false");
    }

    checkStatus();

    function checkStatus() {
        if (localStorage.getItem('darkMode') === "true") {
            mode.checked = true;
            icon.classList.remove('icon-light-mode');
            icon.classList.add('icon-dark-mode');
            body.classList.add('dark-mode');
        } else {
            mode.checked = false;
            icon.classList.remove('icon-dark-mode');
            icon.classList.add('icon-light-mode');
            body.classList.remove('dark-mode');
        }
    }

    function changeStatus() {
        if (localStorage.getItem('darkMode') === "true") {
            localStorage.setItem('darkMode', "false");
            icon.classList.remove('icon-dark-mode');
            icon.classList.add('icon-light-mode');
            body.classList.remove('dark-mode');
        } else {
            localStorage.setItem('darkMode', "true");
            icon.classList.remove('icon-light-mode');
            icon.classList.add('icon-dark-mode');
            body.classList.add('dark-mode');
        }
    }

    mode.addEventListener('click', () => { changeStatus(); });
};

ToggleDarkmode();
