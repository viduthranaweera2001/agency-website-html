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
