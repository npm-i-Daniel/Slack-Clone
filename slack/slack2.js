document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.d72').forEach((item) => {
        item.addEventListener('click', () => {
            // Toggle the active class
            item.classList.toggle('active');
  
            // Toggle the panel visibility
            const panel = item.querySelector('.pannel');
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
  });