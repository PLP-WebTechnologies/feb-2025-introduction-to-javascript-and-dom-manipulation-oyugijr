// Change the paragraph text dynamically
function changeText() {
  const desc = document.getElementById('description');
  desc.textContent = "✅ The paragraph text has been updated!";
}

// Toggle a CSS class
function toggleHighlight() {
  const title = document.getElementById('title');
  title.classList.toggle('highlight');
}

// Add a new list item
function addItem() {
  const list = document.getElementById('itemList');
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
}

// Remove the last list item
function removeItem() {
  const list = document.getElementById('itemList');
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}
