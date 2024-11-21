window.onload = () => {
  // Initialize Masonry after everything is fully loaded
  const $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
  });

  // Array of image filenames are written in uiImages.js


  // Path to the UI folder
  const uiFolderPath = "/images/ui/";

  // Dynamically create grid items
  uiImages.forEach(image => {
      // Create grid-item element
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      // Create anchor element for Fancybox
      const anchor = document.createElement('a');
      anchor.href = `${uiFolderPath}${image}`;
      anchor.setAttribute('data-fancybox', 'gallery-ui');

      // Create img element
      const img = document.createElement('img');
      img.src = `${uiFolderPath}${image}`;
      img.alt = "UI Design";

      // Append img to anchor, then anchor to grid item
      anchor.appendChild(img);
      gridItem.appendChild(anchor);

      // Append grid item to the grid container
      $grid.append(gridItem).masonry('appended', gridItem);
  });

  // Reinitialize Masonry after images are loaded
  $grid.imagesLoaded().progress(() => $grid.masonry());

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  }); 
};