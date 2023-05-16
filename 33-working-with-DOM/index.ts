const box = document.querySelector('.box') as HTMLElement;
// box.textContent = 'asdad'
const input = document.querySelector('input');
input?.value;

const link = document.querySelector('a');
if (link) {
    link.href = 'asdsa';
}

const p = document.querySelector('.paragraph') as HTMLParagraphElement;

const links = document.querySelectorAll('a');

const elem = document.createElement('a');

link?.addEventListener('click', (e) => {
    e.preventDefault();
});
