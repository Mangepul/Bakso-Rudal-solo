// responsive.js
$(document).ready(function () {
  handleResponsiveLayout();

  // Panggil fungsi saat ukuran layar berubah
  $(window).resize(function () {
    handleResponsiveLayout();
  });
});

function handleResponsiveLayout() {
  if (window.innerWidth <= 768) {
    // Atur tata letak untuk layar lebar kurang dari atau sama dengan 768px
    $(".menu-item").addClass("mobile-layout");
  } else {
    $(".menu-item").removeClass("mobile-layout");
  }
}
