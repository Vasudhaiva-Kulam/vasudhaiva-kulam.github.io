// Drawer Logic
const menuBtn = document.getElementById('menuBtn');
const closeDrawer = document.getElementById('closeDrawer');
const navDrawer = document.getElementById('navDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');

function toggleDrawer() {
    const isClosed = navDrawer.classList.contains('-translate-x-full');
    if (isClosed) {
        navDrawer.classList.remove('-translate-x-full');
        drawerOverlay.classList.remove('hidden');
        // slight delay to allow display block to apply before opacity transition
        setTimeout(() => drawerOverlay.classList.remove('opacity-0'), 10);
    } else {
        navDrawer.classList.add('-translate-x-full');
        drawerOverlay.classList.add('opacity-0');
        setTimeout(() => drawerOverlay.classList.add('hidden'), 300); // match transition duration
    }
}

menuBtn.addEventListener('click', toggleDrawer);
closeDrawer.addEventListener('click', toggleDrawer);
drawerOverlay.addEventListener('click', toggleDrawer);

// Sticky Nav Shadow Logic (Throttled with requestAnimationFrame)
const topNav = document.getElementById('topNav');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 10) {
                topNav.classList.add('shadow-md');
                topNav.classList.remove('shadow-sm');
            } else {
                topNav.classList.remove('shadow-md');
                topNav.classList.add('shadow-sm');
            }
            ticking = false;
        });
        ticking = true;
    }
});