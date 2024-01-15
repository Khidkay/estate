
    const selectButtons = document.querySelectorAll('.select-btn');
    const listItems = document.querySelectorAll('.list-items');

    selectButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            // Check if the clicked element or its parent is a checkbox
            const isCheckbox = event.target.closest('.checkbox');
            
            if (!isCheckbox) {
                listItems[index].style.display = (listItems[index].style.display === 'block') ? 'none' : 'block';
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.select-btn')) {
            listItems.forEach((list) => {
                list.style.display = 'none';
            });
        }
    });

    // Function to update the hidden input field value when an item is selected
    function updateHiddenInput(target, value) {
        const hiddenInput = document.getElementById(`${target}-input`);
        hiddenInput.value = value;
    }

    // Add click event listener to each list item
    const listItemsArray = Array.from(listItems);
    listItemsArray.forEach((list) => {
        list.addEventListener('click', (event) => {
            const target = list.dataset.dropdown;
            const selectedValue = event.target.textContent.trim();
            updateHiddenInput(target, selectedValue);
        });
    });
