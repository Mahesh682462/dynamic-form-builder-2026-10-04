document.addEventListener('DOMContentLoaded', () => {
    const addFieldBtn = document.getElementById('addFieldBtn');
    const fieldTypeSelect = document.getElementById('fieldType');
    const formFieldsContainer = document.getElementById('formFieldsContainer');
    let fieldCount = 0;

    addFieldBtn.addEventListener('click', () => {
        const selectedType = fieldTypeSelect.value;
        fieldCount++;
        const fieldName = `dynamicField_${fieldCount}`;
        const fieldLabel = `${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Field ${fieldCount}`;

        const fieldWrapper = document.createElement('div');
        fieldWrapper.className = 'form-field-wrapper';
        fieldWrapper.id = `wrapper_${fieldName}`;

        const label = document.createElement('label');
        label.setAttribute('for', fieldName);
        label.textContent = fieldLabel + ':';

        let inputElement;
        switch (selectedType) {
            case 'text':
            case 'number':
            case 'date':
                inputElement = document.createElement('input');
                inputElement.type = selectedType;
                inputElement.id = fieldName;
                inputElement.name = fieldName;
                break;
            case 'checkbox':
                inputElement = document.createElement('input');
                inputElement.type = 'checkbox';
                inputElement.id = fieldName;
                inputElement.name = fieldName;
                fieldWrapper.appendChild(inputElement);
                break;
        }

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', () => {
            fieldWrapper.remove();
        });

        if (selectedType !== 'checkbox') {
            fieldWrapper.appendChild(label);
            fieldWrapper.appendChild(inputElement);
        } else {
            label.textContent = fieldLabel; // Checkbox label usually comes after
            fieldWrapper.appendChild(label);
        }
        fieldWrapper.appendChild(removeButton);

        formFieldsContainer.appendChild(fieldWrapper);
    });

    document.getElementById('dynamicForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (In a real app, data would be gathered and processed)');
    });
});
