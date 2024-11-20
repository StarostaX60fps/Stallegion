// Получаем элементы
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalWindow = document.getElementById('modalWindow');

// Открыть модальное окно
openModalBtn.addEventListener('click', () => {
    modalWindow.style.display = 'flex'; // Показываем модальное окно
});

// Закрыть модальное окно
closeModalBtn.addEventListener('click', () => {
    modalWindow.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне его содержимого
window.addEventListener('click', (event) => {
    if (event.target === modalWindow) {
        modalWindow.style.display = 'none';
    }
});

const myModalAlternative = new bootstrap.Modal('#myModal', options)


