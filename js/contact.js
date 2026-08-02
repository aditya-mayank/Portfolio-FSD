document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const popup = document.getElementById('popup');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const allFilled = Array.from(this.querySelectorAll('[required]'))
            .every(f => f.value.trim() !== '');
        if (!allFilled) {
            showPopup('Please fill all required fields.', true);
            return;
        }

        fetch(this.action, {
            method: 'POST',
            mode: 'no-cors',
            body: new FormData(this)
        }).catch(err => console.warn('Form POST failed:', err));

        this.reset();
        showPopup('Thank you for reaching out. I’ll get back to you soon.');
    });

    function showPopup(message, isError = false) {
        popup.textContent = message;
        popup.classList.toggle('error', isError);
        popup.classList.toggle('success', !isError);

        popup.style.setProperty('display', 'block', 'important');

        setTimeout(() => {
            popup.style.setProperty('display', 'none', 'important');
        }, 3000);
    }
});
