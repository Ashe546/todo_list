let dragSrcEl = '';

// Drag and drop functionality
const drag = document.addEventListener('DOMContentLoaded', () => {
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    return dragSrcEl;
  }

  function handleDragEnd() {
    this.style.opacity = '1';
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter() {
    this.classList.add('over');
  }

  function handleDragLeave() {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');

      const cd = document.querySelectorAll('.check');
      const todoDes = document.querySelectorAll('.todo_description');

      cd.forEach((n, i) => n.addEventListener('click', () => {
        if (n.checked === true) {
          todoDes[i].classList.add('checked');
        } else { todoDes[i].classList.remove('checked'); }
      }));
    }

    return false;
  }

  const items = document.querySelectorAll('.main-container .task');
  items.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
});

export default drag;