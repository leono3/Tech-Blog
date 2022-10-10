// Edit modal HTML elements
const modalTitleInputEl = document.getElementById('blogTitle-input');
const modalTextInputEl = document.getElementById('blogText-input');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');

// Current blog HTML elements
let id;
const editBtn = document.getElementById('edit-btn');
const currentTitle = document.getElementById('currentTitle').textContent;
const currentText = document.getElementById('currentText').textContent;
if (editBtn) id = editBtn.dataset.blogid;

// Set Edit Modal's text to reflect current Blog text
modalTitleInputEl.value = currentTitle;
modalTextInputEl.value = currentText;

saveBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const title = modalTitleInputEl.value;
    const blog = modalTextInputEl.value;

    try {
        const response = await fetch(`/api/blog/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                blog
            }),
        });
        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
});

deleteBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) window.location.href = '/dashboard';
    } catch (error) {
        console.log(error);
    }
});
