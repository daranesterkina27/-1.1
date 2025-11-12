// Page 2: Cyrillic to Latin conversion
document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convert-btn');
    const resetBtn = document.getElementById('reset-btn');
    const surnameSpan = document.getElementById('surname');
    const nameSpan = document.getElementById('name');
    const statusText = document.getElementById('status-text');
    
    let isLatin = false;

    // Cyrillic to Latin transliteration mapping
    const transliterationMap = {
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
        'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
        'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
        'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch',
        'Ш': 'Sh', 'Щ': 'Shch', 'Ъ': '', 'Ы': 'Y', 'Ь': '',
        'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
        'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    function transliterateCyrillicToLatin(text) {
        return text.split('').map(char => {
            return transliterationMap[char] || char;
        }).join('');
    }

    convertBtn.addEventListener('click', function() {
        if (!isLatin) {
            // Convert to Latin
            const surnameCyrillic = surnameSpan.getAttribute('data-cyrillic') || surnameSpan.textContent;
            const nameCyrillic = nameSpan.getAttribute('data-cyrillic') || nameSpan.textContent;
            
            const surnameLatin = surnameSpan.getAttribute('data-latin') || transliterateCyrillicToLatin(surnameCyrillic);
            const nameLatin = nameSpan.getAttribute('data-latin') || transliterateCyrillicToLatin(nameCyrillic);
            
            surnameSpan.textContent = surnameLatin;
            nameSpan.textContent = nameLatin;
            
            isLatin = true;
            statusText.innerHTML = 'Текущий режим: <strong style="color: #667eea;">Латиница</strong>';
            convertBtn.textContent = 'Преобразовать в кириллицу';
        } else {
            // Convert back to Cyrillic
            const surnameCyrillic = surnameSpan.getAttribute('data-cyrillic');
            const nameCyrillic = nameSpan.getAttribute('data-cyrillic');
            
            surnameSpan.textContent = surnameCyrillic;
            nameSpan.textContent = nameCyrillic;
            
            isLatin = false;
            statusText.innerHTML = 'Текущий режим: <strong style="color: #667eea;">Кириллица</strong>';
            convertBtn.textContent = 'Преобразовать в латиницу';
        }
    });

    resetBtn.addEventListener('click', function() {
        const surnameCyrillic = surnameSpan.getAttribute('data-cyrillic');
        const nameCyrillic = nameSpan.getAttribute('data-cyrillic');
        
        surnameSpan.textContent = surnameCyrillic;
        nameSpan.textContent = nameCyrillic;
        
        isLatin = false;
        statusText.innerHTML = 'Текущий режим: <strong style="color: #667eea;">Кириллица</strong>';
        convertBtn.textContent = 'Преобразовать в латиницу';
    });
});

