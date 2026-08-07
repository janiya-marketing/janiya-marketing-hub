 // =====================================
// JANIYA Customer Marketing System
// app.js
// PART 1 - Navigation
// =====================================


// ----------------------------
// Page Navigation
// ----------------------------

const menuButtons = document.querySelectorAll(".menu-btn");
const pages = document.querySelectorAll(".page");


menuButtons.forEach(button => {

    button.addEventListener("click", () => {


        // remove active button
        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        // add active button
        button.classList.add("active");



        // hide all pages
        pages.forEach(page => {

            page.classList.remove("active-page");

        });



        // show selected page
        const pageName = button.dataset.page;

        const selectedPage = document.getElementById(pageName);


        if(selectedPage){

            selectedPage.classList.add("active-page");

        }


    });


});
