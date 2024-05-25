const body = document.body;
const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon')

function store(value){
    localStorage.setItem('dark-mode',value);
}

function load(){
    const darkMode = localStorage.getItem('dark-mode');
    if(!darkMode){
        store(false);
        icon.classList.add('fa-sun')
    }else if(darkMode === 'true'){
        body.classList.add('dark-mode');
        icon.classList.add('fa-moon');
    }else if(darkMode === 'false'){
        icon.classList.add('fa-sun')
    }
}
load();

btn.addEventListener('click',() => {
    body.classList.toggle('dark-mode');
    store(body.classList.contains('dark-mode'));

    if(body.classList.contains('dark-mode')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');

    }else{
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
})