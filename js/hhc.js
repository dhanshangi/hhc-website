
// NAVBAR JS START

const showMenu = (toggleId, navId, heroId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        hero = document.getElementById(heroId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
        hero.classList.toggle('blur-active');
    });
}

showMenu('nav-toggle', 'nav-menu', 'h2');

// Mobile dropdown functionality
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.querySelector('.nav-link')?.addEventListener('click', (e) => {
        if (window.innerWidth > 768) return;
        e.preventDefault();
        
        document.querySelectorAll('.dropdown-item').forEach(other => {
            const isCurrentItem = other === item;
            ['dropdown-menu', 'dropdown__arrow', 'nav-link'].forEach((cls, i) => {
                other.querySelector(`.${cls}`)?.classList[isCurrentItem ? 'toggle' : 'remove'](
                    ['show-dropdown', 'rotate-arrow', 'active-dropdown'][i]
                );
            });
        });
    });
});

// NAVBAR JS END

// BUTTON ANIMATION JS START

document.querySelectorAll(".apply-button").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior (e.g., form submission)

        var rocket = this.closest(".cta").querySelector(".cta .n0-i2 img");
        rocket.classList.remove("rocket-fly");
        void rocket.offsetWidth;
        rocket.classList.add("rocket-fly");

        // Listen for the 'animationend' event to perform an action when the animation is done
        rocket.addEventListener("animationend", function () {
            window.open("https://bit.ly/HHCadm", "_blank");
        }, { once: true });
    });
});

document.querySelectorAll(".apply-button").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        if (window.innerWidth <= 599) {
            var rocketMobile = this.closest(".mb-cta").querySelector(".mb-rocket img");
            rocketMobile.classList.remove("rocket-fly-mobile");
            void rocketMobile.offsetWidth;
            rocketMobile.classList.add("rocket-fly-mobile");

            rocketMobile.addEventListener("animationend", function () {
                window.open("https://bit.ly/HHCadm", "_blank");
            }, { once: true });
        }
    });
});

// BUTTON ANIMATION  START

// CIRCLE JS START

document.addEventListener("DOMContentLoaded", () => {
    // Circle text code
    const degreeToRadian = (angle) => angle * (Math.PI / 180);
    const radius = 260;
    const diameter = radius * 2;
    const circle = document.querySelector("#circle");
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    const text = circle.dataset.text;
    const characters = text.split("");
    const deltaAngle = 360 / characters.length;
    const characterOffsetAngle = 8;
    let currentAngle = -90;

    characters.forEach((character, index) => {
        const span = document.createElement("span");
        span.innerText = character;
        const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
        const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
        span.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
        currentAngle += deltaAngle;
        circle.appendChild(span);
    });

    // Initialize Swiper AFTER the circular text code
    const swiper = new Swiper('.swiper-container', {
        // Swiper configurations
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

// CIRCLE JS END

// ACCORDIAN JS START

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', function () {
        const panelId = this.getAttribute('data-target');
        const panel = document.getElementById(panelId);
        const isPanelOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

        document.querySelectorAll('.accordion-panel').forEach(panel => {
            panel.style.maxHeight = null; // Collapse all panels
        });

        document.querySelectorAll('.accordion-header').forEach(button => {
            button.classList.remove('active'); // Deactivate all buttons
        });

        if (!isPanelOpen) {
            this.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// ACCORDIAN JS END

// FAQ START

document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const panel = header.nextElementSibling;
        const arrow = header.querySelector('.faq-arrow');

        // Close all other panels and reset their arrows to + and remove active class
        document.querySelectorAll('.faq-panel').forEach(item => {
            if (item !== panel) {
                item.style.maxHeight = null;
                const otherArrow = item.previousElementSibling.querySelector('.faq-arrow');
                otherArrow.textContent = '+';
                item.previousElementSibling.classList.remove('active');
            }
        });

        // Toggle the selected panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            arrow.textContent = '+';
            header.classList.remove('active');
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            arrow.textContent = '-';
            header.classList.add('active');
        }
    });
});

// FAQ JS END

// EARLY LOGIC ACCORDIAN START

function showContent(moduleId, clickedElement) {
    // Deactivate all category items
    document.querySelectorAll('.coding-category-item').forEach(item => {
        item.classList.remove('category-active');
    });

    // Activate the clicked category item
    clickedElement.classList.add('category-active');

    // Hide all content modules
    document.querySelectorAll('.coding-content').forEach(content => {
        content.classList.remove('content-active');
    });

    // Show the corresponding content module
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
        targetModule.classList.add('content-active');
    }
}

// EARLY LOGIC ACCORDIAN END

// CONTACT JS - START

document.addEventListener('DOMContentLoaded', () => {
    const studentBtn = document.getElementById('student-btn');
    const generalBtn = document.getElementById('general-btn');
    const studentForm = document.querySelector('.student-form');
    const generalForm = document.querySelector('.general-form');

    if (studentBtn && generalBtn && studentForm && generalForm) {
        // Toggle function
        function toggleForms() {
            studentBtn.classList.toggle('active');
            generalBtn.classList.toggle('active');
            studentForm.classList.toggle('active');
            generalForm.classList.toggle('active');
        }

        // Event listeners
        studentBtn.addEventListener('click', () => {
            if (!studentBtn.classList.contains('active')) toggleForms();
        });

        generalBtn.addEventListener('click', () => {
            if (!generalBtn.classList.contains('active')) toggleForms();
        });
    } else {
        console.error('One or more elements are missing from the DOM.');
    }
});

// CONTACT JS - END

// CONTACT FORM JS - START
const scriptURL = 'https://script.google.com/macros/s/AKfycbyjHOCF3XtvUg9G562w9_lL_E9HZ0gfh9fhAgUC06G5Ge3KOrD0jgJGujTPibN1tlMY/exec';

const forms = document.querySelectorAll('form[name="student-contact-form"]');

if (forms.length > 0) {
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => alert("Thank you! Form is submitted"))
        .then(() => {
          window.location.reload();
        })
        .catch((error) => console.error('Error!', error.message));
    });
  });
} else {
  console.error('No forms found with the name "student-contact-form".');
}

// CONTACT FORM JS - END

//   ANIMATION LOGIC START

let lastScrollY = window.scrollY; // Track the last scroll position

const s1 = document.querySelectorAll('.animate');
const options = {};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Check if scrolling down
            if (window.scrollY > lastScrollY) {
                entry.target.classList.add('active'); // Trigger animation
            }
        } else {
            // Remove the class when the element is not visible
            entry.target.classList.remove('active');
        }
    });
    // Update lastScrollY after processing
    lastScrollY = window.scrollY;
}, options);

s1.forEach(s1 => {
    observer.observe(s1);
});

//   ANIMATION LOGIC END


// SCROLL BEHAVIOUR JS START

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // SCROLL BEHAVIOUR JS END


// SCROLL TOP BUTTON JS - START

let mybutton = document.getElementById("scrollButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// SCROLL TOP BUTTON JS - END

// TIME LINE JS START

document.addEventListener('DOMContentLoaded', function () {
    const timelineLinks = document.querySelectorAll('.timeline-link');
    const timelineItems = document.querySelectorAll('#issues li');
    const datesList = document.querySelector('#dates ul');
    let currentIndex = 0;
    
    const years = [
        'nineteen', 'twenty', 'twentyonea', 'twentyoneb', 
        'twentytwoa', 'twentytwob', 'twentythree', 
        'twentyfoura', 'twentyfourb'
    ];

    function hideAllItems() {
        timelineItems.forEach(item => {
            item.classList.remove('visible');
        });
    }
    
    function showItem(id, isNextDirection = true) {
        const items = document.querySelectorAll('#issues li');
        const oldItem = document.querySelector('#issues li.visible');
        const newItem = document.querySelector(`#${id}`);
    
        if (!newItem) return;
    
        // Determine direction based on button click
        const direction = isNextDirection ? '100%' : '-100%';
    
        // Hide all items first
        items.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('visible');
            item.style.transition = 'none'; // Reset transition
            item.style.transform = `translateX(${direction})`; // Move off-screen
        });
    
        // Force reflow to restart animation
        newItem.offsetHeight;
    
        // Show the new item and reapply animation
        newItem.style.display = 'block';
        newItem.style.transition = 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out';
        requestAnimationFrame(() => {
            newItem.classList.add('visible');
            newItem.style.transform = 'translateX(0)';
        });
    }
    

    function setActiveLink(id) {
        timelineLinks.forEach(link => {
            link.classList.remove('active');
        });

        const link = document.querySelector(`a[href="#${id}"]`);
        if (link) {
            link.classList.add('active');
            const linkPosition = link.offsetLeft;
            const containerWidth = datesList.parentElement.offsetWidth;
            const linkWidth = link.offsetWidth;
            const centerOffset = (containerWidth / 2) - (linkWidth / 2);
            datesList.style.transform = `translateX(${-linkPosition + centerOffset}px)`;
        }
    }

    hideAllItems();
    showItem('nineteen');
    setActiveLink('nineteen');

    timelineLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            currentIndex = years.indexOf(targetId);
            hideAllItems();
            showItem(targetId);
            setActiveLink(targetId);
        });
    });

    document.getElementById('nextbtn').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex < years.length - 1) {
            currentIndex++;
            const nextId = years[currentIndex];
            hideAllItems();
            showItem(nextId);
            setActiveLink(nextId);
        }
    });

    document.getElementById('prev').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            const prevId = years[currentIndex];
            hideAllItems();
            showItem(prevId);
            setActiveLink(prevId);
        }
    });
});

// TIME LINE JS END

// EARLY LOGIC - SWIPER START

var bandSwiper = new Swiper('.band-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed:'1000',
    effect: 'slide',
    pagination: {
        el: '.band-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: { slidesPerView: 1.5, spaceBetween: 15 },
        620: { slidesPerView: 2, spaceBetween: 25 },
        1024: { slidesPerView: 3, spaceBetween: 25 },
        1440: { slidesPerView: 3, spaceBetween: 25 },
    }
});

// EARLY LOGIC - SWIPER END


// SWIPER LEARN JS START

const courseSwiper = new Swiper(".course-swiper", {
    allowTouchMove: false,
    spaceBetween: 20,
    speed: "1000",
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".course-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      599: {
        autoplay: false,
        spaceBetween: 100,
      },
    },
  });
  
// SWIPER LEARN JS END


// SWIPER FUTURE CODERS JS START

let futureCodersSwiper;

function initializeSwiper() {
    futureCodersSwiper = new Swiper('.swiper-container-future', {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        effect: 'slide',
        pagination: {
            el: '.future-coders-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 2, spaceBetween: 15 },
            1044: { slidesPerView: 3, spaceBetween: 30 },
        }
    });
}

function destroySwiper() {
    if (futureCodersSwiper) {
        futureCodersSwiper.destroy(true, true); // Destroy the instance and clean DOM
        futureCodersSwiper = null;
    }
}

function handleResponsiveSwiper() {
    if (window.innerWidth <= 599) { // Hide Swiper functionality on mobile
        destroySwiper();
        document.querySelector('.swiper-container-future').classList.add('hide-swiper'); // Add hide class
    } else {
        if (!futureCodersSwiper) {
            initializeSwiper(); // Initialize Swiper for larger screens
        }
        document.querySelector('.swiper-container-future').classList.remove('hide-swiper'); // Remove hide class
    }
}

// Initial check and event listener
handleResponsiveSwiper();
window.addEventListener('resize', handleResponsiveSwiper);

// SWIPER FUTURE CODERS JS END

// SWIPER FOR COURSE JS START

const swiper = new Swiper('.swiper-container-course', {
    loop: true,
    grabCursor: true,
    spaceBetween: 0,  // Remove space between slides for full-width view
    effect: 'slide',
    autoplay: {
        delay: 3000,  // Delay between each slide
        disableOnInteraction: false,
    },
    speed: 1500,  // Transition speed between slides in milliseconds (1000ms = 1 second)
    slidesPerView: 1,  // Ensure only one slide is visible at a time
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: { 
            slidesPerView: 1,  // Ensure one slide is shown at all breakpoints
            spaceBetween: 20,  // No space between slides
        },
    }
});

// Variable to track autoplay state
let isAutoplayRunning = true;

// Add a click event listener to the slides
swiper.slides.forEach(slide => {
    slide.addEventListener('click', () => {
        if (isAutoplayRunning) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
        isAutoplayRunning = !isAutoplayRunning;
    });
});

// SWIPER FOR COURSE JS START



