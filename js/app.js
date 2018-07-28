//status bar
document.addEventListener("DOMContentLoaded", function () {
    const status = document.querySelector('.status');
    const statusBar = () => {
        currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);

        status.style.width = currentScroll + "%";
    }

    window.addEventListener("scroll", statusBar);

// recipes
    const recipe = document.querySelector('.recipe-box');
    const recipeBtn = document.querySelector('.recipe-button');
    const closeBtn = document.querySelector('.close-button');

    recipeBtn.addEventListener('click', function(){
        recipe.classList.toggle('show-recipe');
    })

    closeBtn.addEventListener('click', function() {
        recipe.classList.toggle('show-recipe');
    })

});









