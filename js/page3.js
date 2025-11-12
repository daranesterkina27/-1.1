// Page 3: Algorithmic problem solution
document.addEventListener('DOMContentLoaded', function() {
    const solveBtn = document.getElementById('solve-btn');
    const clearBtn = document.getElementById('clear-btn');
    const arrayInput = document.getElementById('array-input');
    const outputDiv = document.getElementById('output');
    const solutionStepsDiv = document.getElementById('solution-steps');

    // Kadane's Algorithm: Maximum Subarray Sum
    function maxSubArray(nums) {
        if (nums.length === 0) return 0;
        
        let maxSum = nums[0];
        let currentSum = nums[0];
        let start = 0;
        let end = 0;
        let tempStart = 0;
        
        const steps = [];
        steps.push(`Начало: maxSum = ${maxSum}, currentSum = ${currentSum}`);
        
        for (let i = 1; i < nums.length; i++) {
            if (currentSum < 0) {
                currentSum = nums[i];
                tempStart = i;
                steps.push(`Шаг ${i}: currentSum < 0, сброс currentSum = ${nums[i]}, начальный индекс = ${i}`);
            } else {
                currentSum += nums[i];
                steps.push(`Шаг ${i}: currentSum = ${currentSum} (добавлено ${nums[i]})`);
            }
            
            if (currentSum > maxSum) {
                maxSum = currentSum;
                start = tempStart;
                end = i;
                steps.push(`  → Найден новый максимум! maxSum = ${maxSum}, подмассив с индекса ${start} до ${end}`);
            }
        }
        
        return { maxSum, start, end, steps };
    }

    solveBtn.addEventListener('click', function() {
        try {
            const inputText = arrayInput.value.trim();
            
            if (!inputText) {
                outputDiv.innerHTML = '<p style="color: red;">Пожалуйста, введите элементы массива.</p>';
                return;
            }
            
            // Parse input array
            const nums = inputText.split(',')
                .map(item => item.trim())
                .map(item => {
                    const num = parseInt(item);
                    if (isNaN(num)) {
                        throw new Error(`Неверное число: ${item}`);
                    }
                    return num;
                });
            
            if (nums.length === 0) {
                outputDiv.innerHTML = '<p style="color: red;">Массив не может быть пустым.</p>';
                return;
            }
            
            // Solve the problem
            const result = maxSubArray(nums);
            const subarray = nums.slice(result.start, result.end + 1);
            
            // Display output
            outputDiv.innerHTML = `
                <p><strong>Входной массив:</strong> [${nums.join(', ')}]</p>
                <p><strong>Максимальная сумма подмассива:</strong> <span style="color: #667eea; font-size: 1.2rem; font-weight: bold;">${result.maxSum}</span></p>
                <p><strong>Подмассив:</strong> [${subarray.join(', ')}]</p>
                <p><strong>Индексы:</strong> ${result.start} до ${result.end}</p>
            `;
            
            // Display solution steps
            solutionStepsDiv.innerHTML = `
                <h4>Шаги решения:</h4>
                <ol style="margin-left: 1.5rem;">
                    ${result.steps.map(step => `<li style="margin-bottom: 0.5rem;">${step}</li>`).join('')}
                </ol>
                <p style="margin-top: 1rem;"><strong>Временная сложность:</strong> O(n)</p>
                <p><strong>Пространственная сложность:</strong> O(1)</p>
            `;
            
        } catch (error) {
            outputDiv.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
            solutionStepsDiv.innerHTML = '';
        }
    });

    clearBtn.addEventListener('click', function() {
        arrayInput.value = '';
        outputDiv.innerHTML = '<p>Нажмите "Решить" для просмотра результата.</p>';
        solutionStepsDiv.innerHTML = '';
    });

    // Allow Enter key to solve
    arrayInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            solveBtn.click();
        }
    });
});

