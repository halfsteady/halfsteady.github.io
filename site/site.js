const dialog = document.querySelector('#film-dialog');
const player = document.querySelector('#film-player');

// The link still opens the standalone film when JavaScript is unavailable.
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelector('[data-film]').addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const frame = document.createElement('iframe');
    frame.title = 'Mind the back — a Half Steady short film';
    frame.src = event.currentTarget.href;
    player.replaceChildren(frame);
    dialog.showModal();
  });
  dialog.addEventListener('close', () => player.replaceChildren());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
}
