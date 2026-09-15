/**
 * Monkey Business Tree Care LLC - Main Interactive Script
 * Vanilla JavaScript (No external libraries, 100% lightweight & fast)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Drawer & Toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('mobile-drawer-backdrop');

  function openMobileMenu() {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.classList.add('is-active');
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('is-open');
      drawerBackdrop.setAttribute('aria-hidden', 'false');
    }
  }

  function closeMobileMenu() {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('is-active');
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('is-open');
      drawerBackdrop.setAttribute('aria-hidden', 'true');
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking any navigation link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close drawer when estimate button inside drawer is clicked
    const drawerEstimateBtn = mobileDrawer.querySelector('.js-open-estimate-drawer');
    if (drawerEstimateBtn) {
      drawerEstimateBtn.addEventListener('click', () => {
        closeMobileMenu();
      });
    }

    // Close drawer on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  }

  // Header scroll appearance
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 3. Estimate Modal Open / Close Handlers
  const modal = document.getElementById('estimate-modal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="estimate"]');
  const closeModalBtns = document.querySelectorAll('.js-close-modal');

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input, select, textarea, button');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // 4. Estimate Form Submissions (Main & Modal)
  function setupForm(formId, successMsgId) {
    const form = document.getElementById(formId);
    const successMsg = document.getElementById(successMsgId);

    if (form && successMsg) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple validation & client-side feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending Request...';
        }

        setTimeout(() => {
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Request Sent!';
          }
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 600);
      });
    }
  }

  setupForm('main-estimate-form', 'main-form-success');
  setupForm('modal-estimate-form', 'modal-form-success');

  // 5. Pre-select service in form when clicked from Services list
  const serviceQuoteButtons = document.querySelectorAll('[data-service-name]');
  serviceQuoteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service-name');
      const selectElements = document.querySelectorAll('select[name="service_type"]');
      selectElements.forEach(select => {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
            select.selectedIndex = i;
            break;
          }
        }
      });
    });
  });

  // 6. Image Fallback Handling: if custom user uploaded files are added, use them
  const mascotImages = document.querySelectorAll('.js-mascot-img');
  mascotImages.forEach(img => {
    img.addEventListener('error', () => {
      if (!img.src.includes('mascot-logo.svg')) {
        img.src = 'images/mascot-logo.svg';
      }
    });
  });
});
