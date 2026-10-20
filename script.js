document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cyberForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');

            if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
                alert('Будь ласка, заповніть усі поля!');
                return;
            }

            alert(`Дякуємо, ${nameInput.value}! Вашу заявку успішно відправлено. Наш спеціаліст зв'яжеться з вами за адресою ${emailInput.value}.`);

            form.reset();
        });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease, border-color 0.3s ease';
        });
    });
});
