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
      navbar.classList.add('fixed');
      isNavbarFixed = true;
    } else if (!shouldFixNavbar && isNavbarFixed) {
      navbar.classList.remove('fixed');
      isNavbarFixed = false;
    }
  };

  // Add scroll event listener with smooth scrolling
  window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
  });

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
