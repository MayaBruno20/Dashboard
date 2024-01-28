function openFolder(element) {
    // Find the corresponding folder links
    const folderLinks = element.nextElementSibling;
  
    // Toggle the visibility of the folder links
    if (folderLinks.style.display === 'block') {
      folderLinks.style.display = 'none';
    } else {
      // Close any open folders before opening the new one
      closeAllFolders();
      folderLinks.style.display = 'block';
    }
  }
  
  function closeAllFolders() {
    // Get all elements with the class 'folder-links'
    const allFolderLinks = document.querySelectorAll('.folder-links');
  
    // Close each folder link
    allFolderLinks.forEach(folderLinks => {
      folderLinks.style.display = 'none';
    });
  }
  
  // Close open folders if the user clicks outside of them
  document.addEventListener('click', function (event) {
    const isClickInsideFolder = event.target.matches('.folders h2, .folder-links, .folder-links *');
    if (!isClickInsideFolder) {
      closeAllFolders();
    }
  });
  