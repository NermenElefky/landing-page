//Start global vars 
// selctings all page sections
let sections = document.querySelectorAll("section");

// selecting the ul which we will add the links to
let ourList = document.querySelector("ul");

// select the main header (landing page)
let head = document.querySelector("header.main-heading")

// build the fragment
let fragment = document.createDocumentFragment();
// end global vars
// build the nav
for (let section of sections){
    // creating the li element
    const liElement = document.createElement("li")

    // set the innerHTML (i just added the a element inside the innerhtml AND USED the variable to define the href attr and content of a)
    liElement.innerHTML = `<a href = "#${section.getAttribute("id")}"class = "menu__link" id ="${section.getAttribute("id")}">${section.getAttribute("data-nav")}</a>`

    // add the li element to the fragment
    fragment.appendChild(liElement);
}

// add the fragment to the ul 
ourList.append(fragment)

// select all ul li 
let list_elements = document.querySelectorAll("ul li")

// start helper functions
function remove_section_class_active (){
    for (let section of sections){
        section.classList.remove("active")
    }
}
function remove_li_class_active (){
    for (let element of list_elements){
        element.classList.remove("active")
    }
}

// add the active class to section in viewport
window.onscroll = function(){
    for (let section of sections){
        let q =300;
        if (window.scrollY >= section.offsetTop - q&& window.scrollY <= section.offsetTop + section.offsetHeight){
                remove_section_class_active()
                section.classList.add("active");
                remove_li_class_active();
                // add active class to the nav item that refers to the section in viewport
                document.getElementById(`${section.getAttribute("id")}`).parentElement.classList.add("active");

        }
    }
    // make the button (top) appear after some height
    if (window.scrollY >= 600){
        btn.style.display ="block"
    }
    else {
        btn.style.display = "none"
    }
}

// Scroll to section on link click
ourList.addEventListener("click",function(e){
    if (e.target.nodeName === "A"){
        // prevent the default of anchor tag ===> to control the smooth behavior
        e.preventDefault();

        //make a loop over the sections to check the href with the id
        for (const section of sections){
            // i put # because the href has (#) and the id has no (#)
            if ("#"+section.getAttribute("id") === e.target.getAttribute("href")){
               
                section.scrollIntoView({behavior:"smooth", block : "center"})

            }
        }

    }
})

// hide the nav bar if there is no scroll
let _scroll = null;
window.addEventListener('scroll', function() {
    if(_scroll !== null) {
        clearTimeout(_scroll); 
        ourList.style.display = "block";    
    }
    _scroll = setTimeout(function() {
         ourList.style.display = "none"
    }, 3000);
});

// make the button scroll to top
btn.onclick = function (){
    head.scrollIntoView({behavior:"smooth"})
}
