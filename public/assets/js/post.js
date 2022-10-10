// Post HTML Elements
const titleEl = document.getElementById('blogTitle-input');
const blogTextEl = document.getElementById('blogText-input');
const postBtn = document.getElementById('post-btn');

postBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    title = titleEl.value;
    blog = blogTextEl.value;
    if (title.trim() === 0) {
        alert('Blog must have a title.');
        return;
    };
    if (blog.trim() < 20) {
        alert('Blog must be at least 20 characters long.');
        return;
    }

    try {
        const response = await fetch('/api/blog/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                blog
            }),
        });
        await response.json();
        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
})