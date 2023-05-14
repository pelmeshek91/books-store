const input = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const theme = {
    LIGHT:'light-theme',
    DARK:'dark-theme',
};

body.classList.add(theme.LIGHT);
input.addEventListener('change', switchTheme);

function switchTheme(){
    body.classList.toggle(theme.DARK);
    body.classList.toggle(theme.LIGHT);

    setThemeInfoToLocalStorage();
}

function setThemeInfoToLocalStorage(){
    if(body.classList.contains(theme.LIGHT)){
        input.setAttribute('checked',false);
        localStorage.setItem('active-theme',theme.LIGHT);
    }else if(body.classList.contains(theme.DARK)){
        input.setAttribute('checked',true);
        localStorage.setItem('active-theme',theme.DARK);
    }
}
getThemeInfoFromLocalStorage();

function getThemeInfoFromLocalStorage(){
    if(localStorage.getItem('active-theme') === theme.DARK){
        switchTheme();
    }
}