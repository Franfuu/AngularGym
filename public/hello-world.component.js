function scrollGallery(direction) {
  const gallery = document.querySelector('.gallery');
  const scrollAmount = gallery.clientWidth;
  gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
