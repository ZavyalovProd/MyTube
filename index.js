function toggleMoreVideo() {
    let morevideo = document.querySelector('.morevideo');

    if (morevideo.style.display === '' || morevideo.style.display === 'none') {
        morevideo.style.display = 'flex';
    } else {
        morevideo.style.display = 'none';
    }
}

document.querySelector('.input_button').addEventListener('click', function() {
    const inputValue = document.querySelector('.search-input').value.trim().toLowerCase();
    
    if (inputValue === 'грустные песни' || inputValue === 'грустная музыка') {
        window.location.href = 'index_input_page.html';
    } else if (inputValue === 'песни без слов для погружения в себя') {
        window.location.href = 'index_input_page.html'; 
    } else if (inputValue === 'релакс музыка' || inputValue === 'музыка для медитации') {
        window.location.href = 'index_input_page.html';
    } else {
        alert("Ничего не найдено. Попробуйте другой запрос.");
    }
});
