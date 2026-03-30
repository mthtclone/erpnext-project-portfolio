document.querySelectorAll('.member a').forEach(link => {
    let tapped = false;

    link.addEventListener('touchstart', e => {
        const tooltip = link.parentElement.querySelector('.tooltip-mobile');

        if (!tapped) {
            e.preventDefault(); 
            tapped = true;

            // Show tooltip
            tooltip.style.display = 'block';

            // Hide after 1.5s
            setTimeout(() => {
                tooltip.style.display = 'none';
                tapped = false;
            }, 1500);
        }
    });
});