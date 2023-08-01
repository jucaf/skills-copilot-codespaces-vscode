function skillsMember() {
    const skills = document.querySelector('.skills');
    const skillsMember = document.querySelector('.skills-member');
    const skillsMemberClose = document.querySelector('.skills-member-close');
    
    skills.addEventListener('click', () => {
        skillsMember.classList.add('skills-member-active');
    });
    
    skillsMemberClose.addEventListener('click', () => {
        skillsMember.classList.remove('skills-member-active');
    });
    }