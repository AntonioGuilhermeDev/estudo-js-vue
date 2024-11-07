document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        event.preventDefault();
        loadPage(el);
    }
});


async function loadPage(el) {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    const html = await response.text();
    loadResult(html);
}

function loadResult(response){
    const result = document.querySelector('.result');
    result.innerHTML = response;
}