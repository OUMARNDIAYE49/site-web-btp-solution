
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Add event listeners to all sections
document.getElementById('contact').addEventListener('click', function() {
    hideSidebar();
    window.location.hash = '#contact';
});