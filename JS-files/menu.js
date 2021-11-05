burger = document.querySelector('.burger')
navigation = document.querySelector('.navigation')
ul = document.querySelector('.ul-content')
navright = document.querySelector('.nav-right')
v_ext = document.querySelector('.text-name')



burger.addEventListener('click',()=>{

    navright.classList.toggle('v-class');
    ul.classList.toggle('v-class');
    navigation.classList.toggle('h-nav');
    v_ext.classList.toggle('v-class');
})