
// add the event listener for the first link and add the class active to it
document.querySelector("#first-link").addEventListener("click", function() {

    document.querySelector("#first-link").classList.add("active");
    document.querySelector("#second-link").classList.remove("active");
    document.querySelector("#third-link").classList.remove("active");

});

// add the event listener for the second link and add the class active to it
document.querySelector("#second-link").addEventListener("click", function() {

    document.querySelector("#second-link").classList.add("active");
    document.querySelector("#first-link").classList.remove("active");
    document.querySelector("#third-link").classList.remove("active");
});

// add the event listener for the third link and add the class active to it
document.querySelector("#third-link").addEventListener("click", function() {
    
        document.querySelector("#third-link").classList.add("active");
        document.querySelector("#first-link").classList.remove("active");
        document.querySelector("#second-link").classList.remove("active");
    });