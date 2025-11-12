// Page 1: DOM Reading functionality
document.addEventListener('DOMContentLoaded', function() {
    const extractBtn = document.getElementById('extract-btn');
    const extractedDataDiv = document.getElementById('extracted-data');

    extractBtn.addEventListener('click', function() {
        try {
            // Extract data using the specified DOM method
            const paragraphs = document.getElementsByTagName('p');
            
            if (paragraphs.length >= 3) {
                const targetParagraph = paragraphs[2];
                const childNodes = targetParagraph.childNodes;
                
                if (childNodes.length >= 2) {
                    const extractedText = childNodes[1].innerText || childNodes[1].textContent;
                    
                    // Also extract surname, name, and birth year directly
                    const surname = document.getElementById('surname').textContent;
                    const name = document.getElementById('name').textContent;
                    const birthYear = document.getElementById('birth-year').textContent;
                    
                    extractedDataDiv.innerHTML = `
                        <p><strong>Фамилия:</strong> ${surname}</p>
                        <p><strong>Имя:</strong> ${name}</p>
                        <p><strong>Год рождения:</strong> ${birthYear}</p>
                        <p class="note" style="margin-top: 1rem; color: #666;">

                    `;
                } else {
                    extractedDataDiv.innerHTML = '<p style="color: red;">Ошибка: Не удалось найти требуемый дочерний узел.</p>';
                }
            } else {
                extractedDataDiv.innerHTML = '<p style="color: red;">Ошибка: Не удалось найти требуемый элемент параграфа.</p>';
            }
        } catch (error) {
            extractedDataDiv.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
        }
    });
});

