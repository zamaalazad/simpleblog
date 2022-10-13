
// Add script for menu open

const target = document.getElementById('navigation-target');
const navigation = document.querySelector('.navigation');
const singleTarget = document.getElementById('sidebar__target');
const singleSidebar = document.querySelector('.single__sidebar');

target.addEventListener('click', function(){
    navigation.classList.toggle('navigation-open-add-class');
});

singleTarget.addEventListener('click', function(){
    singleSidebar.classList.toggle('single__sidebar-open');
});