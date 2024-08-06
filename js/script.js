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


const skillsDropdown = document.getElementById('skills');
  const selectedSkillsContainer = document.getElementById('selectedSkillsContainer');
  const selectedSkills = new Set();

  skillsDropdown.addEventListener('change', function() {
    const selectedSkill = skillsDropdown.value;

    if (selectedSkill && !selectedSkills.has(selectedSkill)) {
      selectedSkills.add(selectedSkill);

      const skillDiv = document.createElement('div');
      skillDiv.className = 'selected-skill';
      skillDiv.style.display = 'flex';
      skillDiv.style.alignItems = 'center';
      skillDiv.style.marginRight = '10px';
      skillDiv.style.padding = '5px 10px';
      skillDiv.style.border = '1px solid #ccc';
      skillDiv.style.borderRadius = '5px';
      skillDiv.style.marginBottom = '10px';

      const skillName = document.createElement('span');
      skillName.textContent = selectedSkill;

      const closeIcon = document.createElement('i');
      closeIcon.className = 'ri-close-line';
      closeIcon.style.marginLeft = '10px';
      closeIcon.style.cursor = 'pointer';

      closeIcon.addEventListener('click', function() {
        selectedSkills.delete(selectedSkill);
        selectedSkillsContainer.removeChild(skillDiv);
      });

      skillDiv.appendChild(skillName);
      skillDiv.appendChild(closeIcon);

      selectedSkillsContainer.appendChild(skillDiv);
    }

    skillsDropdown.value = "";
  });

  function displayContent1() {
    const educationContent = document.getElementById('educationContent');
    const skillsContent = document.getElementById('skillsContent');
    const con3a = document.querySelector('.sq-con-3-a');
    const con3b = document.querySelector('.sq-con-3-b');
    
    if (document.querySelector('.opt1').checked) {
      educationContent.style.display = 'block';
      skillsContent.style.display = 'none';
      
      con3a.style.border = '2px solid #007bff';
      con3b.style.border = '1px solid rgb(207, 205, 234)';
    } else if (document.querySelector('.opt2').checked) {
      educationContent.style.display = 'none';
      skillsContent.style.display = 'block';
      
      con3a.style.border = '1px solid rgb(207, 205, 234)';
      con3b.style.border = '2px solid #007bff';
    }
  }
  
  document.querySelector('.sq-con-3-a').addEventListener('click', function() {
    document.querySelector('.opt1').checked = true;
    displayContent1();
  });
  
  document.querySelector('.sq-con-3-b').addEventListener('click', function() {
    document.querySelector('.opt2').checked = true;
    displayContent1();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.opt1').checked = true;
    displayContent1();
  });
  
  function displayContent2() {
    const educationContent = document.getElementById('visarej');
    const skillsContent = document.getElementById('visagra');
    const con6a = document.querySelector('.sq-con-6-a');
    const con6b = document.querySelector('.sq-con-6-b');
    
    if (document.querySelector('.opt3').checked) {
      educationContent.style.display = 'block';
      skillsContent.style.display = 'none';
      
      con6a.style.border = '2px solid #007bff';
      con6b.style.border = '1px solid rgb(207, 205, 234)';
    } else if (document.querySelector('.opt4').checked) {
      educationContent.style.display = 'none';
      skillsContent.style.display = 'block';
      
      con6a.style.border = '1px solid rgb(207, 205, 234)';
      con6b.style.border = '2px solid #007bff';
    }
  }
  
  document.querySelector('.sq-con-6-a').addEventListener('click', function() {
    document.querySelector('.opt3').checked = true;
    displayContent2();
  });
  
  document.querySelector('.sq-con-6-b').addEventListener('click', function() {
    document.querySelector('.opt4').checked = true;
    displayContent2();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.opt3').checked = true;
    displayContent2();
  });
  