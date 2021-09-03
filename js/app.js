var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function(){
    darkMode.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme")=="light") {
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme")=="light"){
    darkMode.classList.remove("dark-theme-on");
    document.body.classList.remove("dark-theme");
}else if(localStorage.getItem("theme")=="dark"){
    darkMode.classList.add("dark-theme-on");
    document.body.classList.add("dark-theme");
}else{
    localStorage.setItem("theme","light");
}

const image = document.getElementById("image");
image.addEventListener('change',function(){
    const file = this.files[0];
    const img = document.getElementById("imagePreview");
    if (file) {
        const render = new FileReader();
        render.onload = function () {
            const result = render.result;
            img.src = result;
            img.style.display = 'block';
        }
        render.readAsDataURL(file);
    }
});

const addPost = document.getElementById("add-post");
const wrapper = document.getElementById("post-form");

addPost.addEventListener("click",function(){
    const title = document.getElementById('btn-title').innerHTML;
    wrapper.classList.toggle('open');
    if (this.innerHTML==title) {
        this.innerHTML = 'close form';
    }else{
        this.innerHTML = title;
    }
});

function switchOnOff(item,id,status) {
    var clicked = document.getElementById(item);
    clicked.classList.toggle('on');
}