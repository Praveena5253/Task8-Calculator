document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.getElementById('calculator');
    const buttons = [
        '7', '8', '9', '/', 
        '4', '5', '6', '*', 
        '1', '2', '3', '-', 
        '0', '%', '=', '+'
    ];
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('readonly', true);
    input.classList.add('form-control', 'mb-3');
    calculator.appendChild(input);

    buttons.forEach(function(button) {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'btn-primary');
        btn.textContent = button;
        btn.addEventListener('click', function() {
            if (button === '=') {
                try {
                    input.value = eval(input.value);
                } catch {
                    alert('Invalid Input');
                }
            } else if (['/', '*', '-', '+', '%'].includes(button) && input.value === '') {
                alert('Please enter a number first.');
            } else {
                input.value += button;
            }
        });
        calculator.appendChild(btn);
    });

    // Add clear button
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    clearBtn.classList.add('btn', 'clear-btn');
    clearBtn.addEventListener('click', function() {
        input.value = '';
    });
    calculator.appendChild(clearBtn);

    document.addEventListener('keypress', function(event) {
        if (isNaN(event.key) && !['/', '*', '-', '+', '%', 'Enter'].includes(event.key)) {
            alert('Only numbers and basic operations are allowed.');
        } else if (event.key === 'Enter') {
            try {
                input.value = eval(input.value);
            } catch {
                alert('Invalid Input');
            }
        } else if (!isNaN(event.key) || ['/', '*', '-', '+', '%'].includes(event.key)) {
            input.value += event.key;
        }
    });
});
