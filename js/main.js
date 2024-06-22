// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    if(toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (document.body.classList.contains('light-mode')) {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }


});


// Function to include HTML
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    // Loop through a collection of all HTML elements:
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        // Search for elements with a certain attribute:
        file = elmnt.getAttribute("include-html");
        if (file) {
            // Make an HTTP request using the attribute value as the file name:
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    // Remove the attribute, and call this function once more:
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            // Exit the function:
            return;
        }
    }
}

// Call the function to include HTML

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // // Testimonial carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 2000,
    //     center: false,
    //     dots: true,
    //     loop: true,
    //     margin: 25,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsiveClass: true,
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         576:{
    //             items:1
    //         },
    //         768:{
    //             items:1
    //         },
    //         992:{
    //             items:2
    //         },
    //         1200:{
    //             items:2
    //         }
    //     }
    // });
    //
    //
    // // vegetable carousel
    // $(".vegetable-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     center: false,
    //     dots: true,
    //     loop: true,
    //     margin: 25,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsiveClass: true,
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         576:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         },
    //         992:{
    //             items:3
    //         },
    //         1200:{
    //             items:4
    //         }
    //     }
    // });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

    //out team slide
    $("#out-team .owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            415:{
                items: 2
            },
            769:{
                items: 2
            },
            992: {
                items: 3
            },
            1200:{
                items: 4
            }
        }
    });

    //news slide
    $(".news .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992: {
                items: 3
            },
        }
    });

    //maxcom-edu
    $("#maxcom-edu .owl-carousel").owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        dots: true,
        navText: [
            "<button class='custom-nav-btn custom-prev-btn'><i class='fas fa-chevron-left'></i></button>",
            "<button class='custom-nav-btn custom-next-btn'><i class='fas fa-chevron-right'></i></button>"
        ],
        responsive:{
            0:{
                items: 1
            },
            415:{
                items: 1
            },
            769:{
                items: 2
            },
            992: {
                items: 3
            },
            1200:{
                margin: 35,
                items: 3
            }
        }
    });

    $("#training .owl-carousel").owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: true,
        navText: [
            "<button class='custom-nav-btn custom-prev-btn'><i class='fas fa-chevron-left'></i></button>",
            "<button class='custom-nav-btn custom-next-btn'><i class='fas fa-chevron-right'></i></button>"
        ],
        responsive:{
            0:{
                items: 1
            },
            769:{
                items: 2
            },
        }
    });

    $('.shared-by-student .owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            }
        }
    });

    $('.parner .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0: {
                items: 2
            },
            768:{
                items: 3
            },
            992: {
                items: 5
            },
            1200:{
                items: 7
            }
        }
    });

    //maxcom tech
    $('.chatbot-ai-content .owl-carousel').owlCarousel({
        nav: true,
        dots: true,
        navText: [
            "<button class='custom-nav-btn custom-prev-btn'><i class='fas fa-chevron-left'></i></button>",
            "<button class='custom-nav-btn custom-next-btn'><i class='fas fa-chevron-right'></i></button>"
        ],
        responsive:{
            0: {
                items: 1
            },
        }
    });


    $('.testimonials .review .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0: {
                items: 1
            },
            768:{
                items: 1
            },
            992: {
                items: 1
            },
            1200:{
                items: 1
            }
        }
    });

    $('#aigen-phone .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 20,
        dots: true,
        responsive:{
            0: {
                items: 1
            }
        }
    });

    // google map
    if ($("#mapBox").length) {
        var $lat = $("#mapBox").data("lat");
        var $lon = $("#mapBox").data("lon");
        var $zoom = $("#mapBox").data("zoom");
        var $marker = $("#mapBox").data("marker");
        var $info = $("#mapBox").data("info");
        var $markerLat = $("#mapBox").data("mlat");
        var $markerLon = $("#mapBox").data("mlon");
        var map = new GMaps({
            el: "#mapBox",
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
            styles: [
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#dcdfe6"
                        }
                    ]
                },
                {
                    featureType: "transit",
                    stylers: [
                        {
                            color: "#808080"
                        },
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#dcdfe6"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#ffffff"
                        },
                        {
                            weight: 1.8
                        }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d7d7d7"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#ebebeb"
                        }
                    ]
                },
                {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#a7a7a7"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#efefef"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#696969"
                        }
                    ]
                },
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#737373"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d6d6d6"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {},
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#dadada"
                        }
                    ]
                }
            ]
        });
    }

})(jQuery);

/**
 * Utility function to update the button state and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
    const logoLinks = document.querySelectorAll('.logo-link');
    const btnViews = document.querySelectorAll('.custom-view-more');
    const newCta = isDark ? "Change to light theme" : "Change to dark theme";
    const iconSearch = document.getElementById('search-icon');

    buttonEl.setAttribute("aria-label", newCta);
    if (isDark) {
        buttonEl.classList.add("active");
    } else {
        buttonEl.classList.remove("active");
    }
    logoLinks.forEach(link => {
        const img = link.querySelector('img');
        if (isDark) {
            img.src = '/img/logo-maxcom-normal.svg';
        } else {
            img.src = '/img/logo-maxcom-light.svg';
        }
    });
    const img = iconSearch?.querySelector('img');
    if(img) {
        if (!isDark) {
            img.src = '/img/search-icon-black.svg';
        } else {
            img.src = '/img/search-icon-white.svg';
        }
    }
    btnViews?.forEach(link => {
        const img = link.querySelector('img');
        if (isDark) {
            img.src = '/img/view-more.svg';
        } else {
            img.src = '/img/view-more-dark.svg';
            link.addEventListener('mouseenter', function () {
                img.src = '/img/view-more.svg';
            });
            link.addEventListener('mouseleave', function () {
                img.src = '/img/view-more-dark.svg';
            });
        }
    });

}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML();
    // Fetch and include footer.html content
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            updateLogoLinks();
        })
        .catch(error => console.error('Error loading HTML:', error));
});

function updateLogoLinks() {
    const logoLinks = document.querySelectorAll('.logo-link');
    const localStorageTheme = localStorage.getItem("theme");
    logoLinks.forEach(link => {
        const img = link.querySelector('img');
        if (localStorageTheme === "dark") {
            img.src = '/img/logo-maxcom-normal.svg';
        } else {
            img.src = '/img/logo-maxcom-light.svg';
        }
    });
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (theme === "dark") {
        sunIcon.style.backgroundColor = 'transparent';
        sunIcon.style.color = 'white';
        moonIcon.style.backgroundColor = 'white';
        moonIcon.style.color = 'blue';
    } else {
        sunIcon.style.backgroundColor = 'white';
        sunIcon.style.color = 'blue';
        moonIcon.style.backgroundColor = 'transparent';
        moonIcon.style.color = 'black';
    }
}

/**
 * Calculate the current theme setting
 */
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme) {
        return localStorageTheme;
    }
    return systemSettingDark.matches ? "dark" : "light";
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

/**
 * 3. Update the theme setting and button text according to current settings
 */
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });

    currentThemeSetting = newTheme;
});

const tabButtons = document.querySelectorAll('.tablinks');
const contentDivs = document.querySelectorAll('.content');

// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tab buttons and content divs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentDivs.forEach(div => div.classList.remove('active'));

        // Add active class to the clicked tab button and its content div
        button.classList.add('active');
        const tabIndex = button.getAttribute('data-tab');
        document.querySelector(`.content[data-content="${tabIndex}"]`).classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const countdowns = document.querySelectorAll('.countdown');

    countdowns.forEach(countdown => {
        let hours = parseInt(countdown.querySelector('.hours span').textContent);
        let minutes = parseInt(countdown.querySelector('.minutes span').textContent);
        let seconds = parseInt(countdown.querySelector('.seconds span').textContent);

        function updateDisplay() {
            countdown.querySelector('.hours span').textContent = String(hours).padStart(2, '0');
            countdown.querySelector('.minutes span').textContent = String(minutes).padStart(2, '0');
            countdown.querySelector('.seconds span').textContent = String(seconds).padStart(2, '0');
        }

        function countdownTimer() {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                seconds = 59;
                minutes--;
            } else if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                clearInterval(timer);
            }
            updateDisplay();
        }

        updateDisplay();
        const timer = setInterval(countdownTimer, 1000);
    });
});

// social block

document.addEventListener('DOMContentLoaded', function () {
    const mainButton = document.getElementById('mainButton');
    const socialList = document.getElementById('socialList');
    const socialListBlock = document.getElementById('social-list-block');

    // Set initial state to visible
    const socialListHeight = socialList.scrollHeight;
    socialList.style.height = `${socialListHeight}px`;
    socialListBlock.classList.add('active');

    mainButton.addEventListener('click', function () {
        if (socialList.style.height === '0px') {
            // Lấy chiều cao tổng của nội dung socialList
            const socialListHeight = socialList.scrollHeight;
            socialList.style.height = `${socialListHeight}px`;
            socialListBlock.classList.add('active');
        } else {
            socialListBlock.classList.remove('active');
            socialList.style.height = '0px';
        }
    });
});
// JavaScript
// window.addEventListener('scroll', () => {
//     const cards = document.querySelectorAll('.shared-by-student .list-content .item');
//     const triggerBottom = window.innerHeight / 5 * 4;
//
//     cards.forEach(card => {
//         const cardTop = card.getBoundingClientRect().top;
//         if(cardTop < triggerBottom) {
//             card.style.animation = 'fadeIn 1s ease-in-out forwards';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in-out forwards';
                observer.unobserve(entry.target);  // Stop observing the current target
            }
        });
    }, {
        threshold: 0.1
    });

    const items = document.querySelectorAll('.list-content .item');
    iteMs. forEach(item => {
        observer.observe(item);
    });
});
