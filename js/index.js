feature_buttons = document.querySelectorAll(".feature-buttons");
feature_contents = document.querySelectorAll(".features-carousel-wrapper");
question_labels = document.querySelectorAll(".question-label");
navigators = document.querySelectorAll(".category-wrapper");
scroll_contents = document.querySelectorAll(".contents-header");
side_nav_buttons = document.querySelectorAll(".side-nav-toggle");
var current_feature_carousel = 0;


featureCarouselHandler();

feature_buttons.forEach((elem) => {
    elem.addEventListener("click", () => {
        var buttons_array = toArray(feature_buttons);
        for (i = 0; i < feature_buttons.length; i++) {
            if (elem == buttons_array[i]) {
                current_feature_carousel = i;
            }
        }
        featureCarouselHandler();
    })
});

function toArray(obj, elem) {
    var array = [];
    for (var i = 0; i < obj.length; i++) {
        array[i] = obj[i];
    }
    return array;
}

function featureCarouselHandler() {
    for (i = 0; i < feature_contents.length; i++) {
        feature_buttons[i].classList.remove("button-focused");
        feature_contents[i].style.display = "none";
    }
    feature_buttons[current_feature_carousel].classList.add("button-focused");
    feature_contents[current_feature_carousel].style.display = "flex";
}

question_labels.forEach((elem) => {
    elem.addEventListener("click", () => {
        var questionAnswer = elem.parentElement.querySelector(".answers");
        var questionArrow = elem.querySelector("img");
        if (questionAnswer.style.display == "block") {
            questionArrow.style.transform = "rotate(0deg)";
            questionAnswer.style.display = "none";
        } else {
            questionArrow.style.transform = "rotate(180deg)";
            questionAnswer.style.display = "block";
        }
    })
});

var elements = document.querySelector(".email");
elements.oninvalid = function (error) {
    email_wrapper = document.querySelector(".email-event-wrapper");
    error_msg = document.querySelector(".email-event-wrapper").querySelector("p");
    error_icon = document.querySelector(".email-error-icon").querySelector("img");
    if (!error.target.validity.valid) {
        error_msg.style.cssText = "opacity:1; display:block"
        email_wrapper.classList.add("email-error");
        error_icon.style.cssText = "opacity:1;"

    } else {
        error_msg.style.cssText = "opacity:0;display:none;";
        email_wrapper.classList.remove("email-error");
        error_icon.style.cssText = "opacity:0;"
    }
}

navigators.forEach((elem) => {
    var nav = elem.querySelectorAll("a")
    elem.querySelectorAll("a").forEach((elem) => {
        elem.addEventListener("click", () => {
            var scrollTo = 0;
            for (i = 0; i < nav.length; i++) {
                if (elem == nav[i]) {
                    scrollTo = i;
                }
            }
            scroll_contents[scrollTo].scrollIntoView({ behavior: "smooth" });
        })
    })
})

side_nav_buttons.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem.parentElement.className == "category-wrapper") {
            document.querySelector(".side-nav").style.display = "none";
            document.querySelector(".top-nav-wrapper").style.cssText = "opacity:1;"
        } else if (elem.querySelector("img").alt == "hamburger") {
            document.querySelector(".side-nav").style.display = "flex";
            document.querySelector(".top-nav-wrapper").style.cssText = "opacity:0;"
        } else {
            document.querySelector(".side-nav").style.display = "none";
            document.querySelector(".top-nav-wrapper").style.cssText = "opacity:1;"
        }

    })
})