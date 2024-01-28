function openFolder(element) {
    const folderLinks = element.nextElementSibling;

    if (folderLinks.style.display === 'block') {
      folderLinks.style.display = 'none';
    } else {
      closeAllFolders();
      folderLinks.style.display = 'block';
    }
  }
  
  function closeAllFolders() {
    const allFolderLinks = document.querySelectorAll('.folder-links');

    allFolderLinks.forEach(folderLinks => {
      folderLinks.style.display = 'none';
    });
  }

  document.addEventListener('click', function (event) {
    const isClickInsideFolder = event.target.matches('.folders h2, .folder-links, .folder-links *');
    if (!isClickInsideFolder) {
      closeAllFolders();
    }
  });
  
