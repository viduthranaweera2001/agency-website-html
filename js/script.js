document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".con-2 > div");
  const sections = document.querySelectorAll(".con-1 > div:not(.con-2)");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      tab.classList.add("active");
      sections[index].classList.add("active");
    });
  });
});

document.querySelector('.image-container').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('uploadedAvatar').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
