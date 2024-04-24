document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const faqContainer = document.querySelector('.faq-content');
  const scrollOffset = 100; // Adjust this value as needed
  let isNavbarFixed = false;

// Function to handle scroll event
const handleScroll = () => {
  const offset = window.scrollY;
  const shouldFixNavbar = offset > scrollOffset;

  if (shouldFixNavbar && !isNavbarFixed) {
    setTimeout(() => {
      navbar.classList.add('fixed');
      isNavbarFixed = true;
    }, 100); // Adjust the delay time as needed
  } else if (!shouldFixNavbar && isNavbarFixed) {
    navbar.classList.remove('fixed');
    isNavbarFixed = false;
  }

  // Add a condition to remove the fixed class when scrolling back to the top
  if (offset <= scrollOffset && isNavbarFixed) {
    navbar.classList.remove('fixed');
    isNavbarFixed = false;
  }
};


// // Add scroll event listener with smooth scrolling
// let lastScrollY = 0;

// window.addEventListener('scroll', () => {
//   const currentScrollY = window.scrollY;
//   if (currentScrollY < lastScrollY) {
//     // Scrolling up
//     requestAnimationFrame(() => {
//       handleScrollUp();
//     });
//   } else {
//     // Scrolling down
//     requestAnimationFrame(() => {
//       handleScrollDown();
//     });
//   }
//   lastScrollY = currentScrollY;
// });

// Function to handle scroll up with animation
const handleScrollUp = () => {
  const offset = window.scrollY;
  const shouldFixNavbar = offset > scrollOffset;

  if (shouldFixNavbar && !isNavbarFixed) {
    navbar.classList.add('fixed', 'show');
    setTimeout(() => {
      navbar.classList.add('animate');
    }, 10);
    isNavbarFixed = true;
  } else if (!shouldFixNavbar && isNavbarFixed) {
    navbar.classList.remove('animate');
    setTimeout(() => {
      navbar.classList.remove('show');
    }, 300); // Adjust the delay based on your animation duration
    setTimeout(() => {
      navbar.classList.remove('fixed');
    }, 300); // Adjust the delay based on your animation duration
    isNavbarFixed = false;
  }
};



// Function to handle scroll down
const handleScrollDown = () => {
  const offset = window.scrollY;
  const shouldFixNavbar = offset > scrollOffset;

  if (!shouldFixNavbar && isNavbarFixed) {
    navbar.classList.remove('fixed');
    isNavbarFixed = false;
  }
};

  // FAQ Accordion
  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });

  // Mobile Menu
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});
