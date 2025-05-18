//Profile Details.
let username = "menapps";
let profilePicturePath = "assets/profile/pp.jpg";

const pinnedPostIds = ["117", "116", "115"]; // max 3 olacak şekilde buraya sabitlenmiş post ID'lerini yaz

//Posts Path.
const imageAssets = [
    "120.png","119.png","118.png",
    "117.png", "117_1.png", "117_2.png", "117_3.png", "117_4.png", "117_5.png",
    "116.png", "116_1.png", "116_2.png", "116_3.png", "116_4.png", "116_5.png", "116_6.png",
    "115.png", "115_1.png", "115_2.png", "115_3.png", "115_4.png",
    "114.jpg", "113.jpg", "112.jpg", "111.jpg", "110.jpg", "109.jpg",
    "108.png", "108_1.png", "108_2.png", "108_3.png", "108_4.png", "108_5.png", "108_6.png", "108_7.png", "108_8.png", "108_9.png",
    "107.png", "107_1.png", "107_2.png", "107_3.png", "107_4.png", "107_5.png",
    "106.png", "106_1.png", "106_2.png", "106_3.png", "106_4.png", "106_5.png", "106_6.png",
    "105.png", "105_1.png", "105_2.png", "105_3.png", "105_4.png", "105_5.png", "105_6.png", "105_7.png", "105_8.png", "105_9.png", "105_10.png", "105_11.png",
    "104.png", "104_1.png", "104_2.png", "104_3.png", "104_4.png", "104_5.png", "104_6.png",
    "103.png", "103_1.png", "103_2.png", "103_3.png", "103_4.png", "103_5.png", "103_6.png", "103_7.png", "103_8.png", "103_9.png",
    "102.jpg", "101.jpg", "100.jpg", "99.jpg",
    "98.jpg", "97.jpg", "96.jpg", "95.jpg", "94.jpg", "93.jpg", "92.jpg", "91.jpg", "90.jpg", "89.jpg", "88.jpg",
    "87.jpg", "87_1.jpg", "87_2.jpg", "87_3.jpg", "87_4.jpg", "87_5.jpg", "87_6.mp4",
    "86.jpg", "86_1.jpg", "86_2.jpg", "86_3.jpg", "86_4.mp4",
    "85.jpg", "85_1.jpg", "85_2.jpg", "85_3.jpg", "85_4.jpg", "85_5.mp4", "85_6.mp4", "85_7.jpg",
    "84.jpg", "84_1.jpg", "84_2.jpg", "84_3.jpg", "84_4.jpg", "84_5.jpg", "84_6.jpg", "84_7.jpg",
    "83.jpg", "83_1.jpg", "83_2.jpg", "83_3.jpg", "83_4.jpg", "83_5.jpg", "83_6.jpg", "83_7.jpg",
    "82.jpg", "82_1.jpg", "82_2.jpg", "82_3.jpg", "82_4.jpg", "82_5.jpg",
    "81.jpg", "81_1.jpg", "81_2.jpg", "81_3.jpg", "81_4.jpg", "81_5.jpg", "81_6.jpg", "81_7.jpg", "81_8.jpg", "81_9.jpg",
    "80.jpg", "80_1.jpg", "80_2.jpg", "80_3.jpg", "80_4.jpg", "80_5.jpg", "80_6.jpg",
    "79.jpg", "79_1.jpg", "79_2.jpg", "79_3.jpg", "79_4.jpg", "79_5.jpg", "79_6.jpg",
    "78.jpg", "78_1.jpg", "78_2.jpg", "78_3.jpg", "78_4.jpg", "78_5.jpg",
    "77.jpg", "77_1.jpg", "77_2.jpg", "77_3.jpg", "77_4.jpg", "77_5.jpg",
    "76.jpg", "76_1.jpg", "76_2.jpg", "76_3.jpg", "76_4.jpg", "76_5.jpg",
    "75.jpg", "74.jpg", "73.jpg", "72.jpg", "71.jpg", "70.jpg", "69.jpg", "68.jpg", "67.jpg", "66.jpg", "65.jpg", "64.jpg", "63.jpg", "62.jpg", "61.jpg",
    "60.jpg", "60_1.jpg", "60_2.jpg", "60_3.jpg", "60_4.jpg", "60_5.jpg", "60_6.jpg", "60_7.jpg", "60_8.jpg", "60_9.jpg",
    "59.jpg", "59_1.jpg", "59_2.jpg", "59_3.jpg", "59_4.jpg", "59_5.jpg",
    "58.jpg", "57.jpg", "57_1.jpg", "57_2.jpg", "57_3.jpg", "57_4.jpg", "57_5.jpg",
    "56.jpg", "55.jpg", "54.jpg", "53.jpg", "52.jpg", "51.jpg", "50.jpg", "50_1.jpg", "49.jpg", "49_1.jpg",
    "48.jpg", "47.jpg", "46.jpg", "45.jpg", "44.jpg", "43.jpg", "42.jpg", "41.jpg", "40.jpg", "39.jpg", "38.jpg", "37.jpg", "36.jpg", "36_1.jpg",
    "35.jpg", "34.jpg", "34_1.jpg", "34_2.jpg", "34_3.jpg", "34_4.jpg", "34_5.jpg", "34_6.jpg", "34_7.jpg",
    "33.jpg", "32.jpg", "31.jpg", "30.jpg", "29.jpg", "28.jpg", "27.jpg", "26.jpg", "25.jpg", "24.jpg", "23.jpg", "22.jpg", "21.jpg", "20.jpg",
    "19.jpg", "18.jpg", "17.jpg", "16.jpg", "15.jpg", "15_1.jpg", "15_3.jpg", "15_4.jpg", "15_5.jpg",
    "14.jpg", "14_1.jpg", "13.jpg", "13_1.jpg", "13_2.jpg", "12.jpg", "11.jpg", "10.jpg",
    "9.jpg", "8.jpg", "7.jpg", "6.jpg", "5.jpg", "4.jpg", "3.jpg", "2.jpg", "1.jpg"
];

//Links Tab Details.
const linksData = [
    {
        title: "Github",
        description: "My open source projects",
        icon: "G",
        bgColor: "#2dba4e",
        url: "https://github.com/menaca"
    },
    {
        title: "Linkedin",
        description: "My Linkedin account",
        icon: "L",
        bgColor: "#0077B5",
        url: "https://linkedin.com/in/menacacf"
    },
    {
        title: "Instagram Personal",
        description: "My personal instagram account",
        icon: "I",
        bgColor: "#E4405F",
        url: "https://instagram.com/realmenaca"
    },
    {
        title: "Instagram Blog",
        description: "My work instagram account",
        icon: "I",
        bgColor: "#E4405F",
        url: "https://instagram.com/menapps"
    },
    {
        title: "Medium",
        description: "My Medium account",
        icon: "M",
        bgColor: "#000000",
        url: "https://medium.com/@menaca"
    },
    {
        title: "Spotify",
        description: "My Spotify account",
        icon: "S",
        bgColor: "#1DB954",
        url: "https://open.spotify.com/user/7dadei0rrda1pbpvjfxkzqda4"
    },
    {
        title: "YouTube",
        description: "My YouTube account",
        icon: "Y",
        bgColor: "#FF0000",
        url: "https://www.youtube.com/@realmenaca"
    },
    {
        title: "Twitter",
        description: "My Twitter account",
        icon: "T",
        bgColor: "#1DA1F2",
        url: "https://x.com/realmenaca"
    },
    {
        title: "Steam",
        description: "My Steam account",
        icon: "S",
        bgColor: "#171a21",
        url: "https://steamcommunity.com/id/mena_ca"
    },
];

//You can add a description if you want.
const postDescriptions = {
    "117": "",
    "116": "",
    "115": "",
    "114": "",
    "113": "",
    "112": "",
    "111": "",
    "110": "",
    "109": "",
    "108": "",
    "107": "",
    "106": "",
    "105": "",
    "104": "",
    "103": "",
    "102": "",
    "101": "",
    "100": "",
    "99": "",
    "98": "",
    "97": "",
    "96": "",
    "95": "",
    "94": "",
    "93": "",
    "92": "",
    "91": "",
    "90": "",
    "89": "",
    "88": "",
    "87": "",
    "86": "",
    "85": "",
    "84": "",
    "83": "",
    "82": "",
    "81": "",
    "80": "",
    "79": "",
    "78": "",
    "77": "",
    "76": "",
    "75": "",
    "74": "",
    "73": "",
    "72": "",
    "71": "",
    "70": "",
    "69": "",
    "68": "",
    "67": "",
    "66": "",
    "65": "",
    "64": "",
    "63": "",
    "62": "",
    "61": "",
    "60": "",
    "59": "",
    "58": "",
    "57": "",
    "56": "",
    "55": "",
    "54": "",
    "53": "",
    "52": "",
    "51": "",
    "50": "",
    "49": "",
    "48": "",
    "47": "",
    "46": "",
    "45": "",
    "44": "",
    "43": "",
    "42": "",
    "41": "",
    "40": "",
    "39": "",
    "38": "",
    "37": "",
    "36": "",
    "35": "",
    "34": "",
    "33": "",
    "32": "",
    "31": "",
    "30": "",
    "29": "",
    "28": "",
    "27": "",
    "26": "",
    "25": "",
    "24": "",
    "23": "",
    "22": "",
    "21": "",
    "20": "",
    "19": "",
    "18": "",
    "17": "",
    "16": "",
    "15": "",
    "14": "",
    "13": "",
    "12": "",
    "11": "",
    "10": "",
    "9": "",
    "8": "",
    "7": "",
    "6": "",
    "5": "",
    "4": "",
    "3": "",
    "2": "",
    "1": ""
};


document.getElementById("profile-image").src = profilePicturePath;

const imageGrid = document.getElementById('imageGrid');
const modal = document.getElementById('modal');
const modalImages = document.getElementById('modalImages');
const modalUsername = document.getElementById('modalUsername');
const modalDescription = document.getElementById('modalDescription');
const imageIndicator = document.getElementById('imageIndicator');
const toggleBtn = document.getElementById("themeToggle");
const tabsContent = document.getElementById('tabsContent');
const tabIndicator = document.querySelector('.tab-indicator');
const tabs = document.querySelectorAll('.tab');

let currentTab = 'photos';
let startX = 0;
let currentTranslate = 0;
let isDraggingTab = false;

let posts = [];
let currentPostId = -1;
let currentImageList = [];
let currentPost = null;
let currentImageIndex = 0;

imageAssets.forEach((file) => {
    const postId = file.split('_')[0].replace(/\D/g, '');

    if (currentPostId !== postId) {
        if (currentPostId !== -1) {
            posts.push({
                username: username,
                description: postDescriptions[currentPostId] || `Post ${currentPostId}`,
                images: currentImageList
            });
        }
        currentPostId = postId;
        currentImageList = [file];
    } else {
        currentImageList.push(file);
    }
});

if (currentImageList.length > 0) {
    posts.push({
        username: username,
        description: `Post ${currentPostId}`,
        images: currentImageList
    });
}

function sortPosts() {
    const pinned = [];
    const normal = [];

    posts.forEach(post => {
        const postId = post.images[0].split('_')[0].replace(/\D/g, '');
        if (pinnedPostIds.includes(postId)) {
            pinned.push(post);
        } else {
            normal.push(post);
        }
    });

    return [...pinned, ...normal];
}

function renderPosts() {
    imageGrid.innerHTML = '';
    const sortedPosts = sortPosts();

    sortedPosts.forEach((post, index) => {
        const container = document.createElement('div');
        container.classList.add('post-container');
        container.style.position = 'relative';

        const img = document.createElement('img');
        img.src = 'assets/posts/' + post.images[0];
        img.loading = 'lazy';
        img.addEventListener('click', () => openModal(index));
        container.appendChild(img);

        const postId = post.images[0].split('_')[0].replace(/\D/g, '');

        if (pinnedPostIds.includes(postId)) {
            const pinIcon = document.createElement('div');
            pinIcon.innerHTML = `<svg width="15" height="15" id="Capa_1" fill="#fff" xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 489.493 489.493" xml:space="preserve"> <path d="M485.322,117.705c12.204-12.238-3.274-47.577-34.636-78.93c-30.99-30.99-65.76-46.396-78.401-34.941l-0.246-0.236
 l-173.715,156.02c-32.117-27.993-80.684-27.038-111.278,3.534c-5.149,5.157-8.051,12.146-8.051,19.437
 c0,7.292,2.901,14.283,8.051,19.431l78.808,78.801L3.902,463.627c-5.148,5.799-5.262,14.655,0.015,20.601
 c5.689,6.403,15.497,6.992,21.916,1.294l182.575-162.137l7.84,7.829l40.601,40.603l0,0l30.336,30.329
 c5.15,5.147,12.139,8.039,19.424,8.039c7.278,0,14.272-2.898,19.419-8.056c30.561-30.573,31.524-79.158,3.539-111.27L484.771,118.03
 C484.927,117.892,485.177,117.861,485.322,117.705z"/> </svg>`;
            pinIcon.style.position = 'absolute';
            pinIcon.style.top = '10px';
            pinIcon.style.right = '10px';
            pinIcon.style.filter = 'drop-shadow(0 0 2px rgba(0,0,0,0.5))';
            container.appendChild(pinIcon);
        }
        
        else if (post.images.length > 1) {
            const multiIcon = document.createElement('div');
            multiIcon.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 13.5V14.37C17 15.82 15.82 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7H10.5V10.5C10.5 12.16 11.84 13.5 13.5 13.5H17Z"/>
                <path d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"/>
            </svg>`;
            multiIcon.style.position = 'absolute';
            multiIcon.style.top = '10px';
            multiIcon.style.right = '10px';
            multiIcon.style.filter = 'drop-shadow(0 0 2px rgba(0,0,0,0.5))';
            container.appendChild(multiIcon);
        }

        imageGrid.appendChild(container);
    });
}


function openModal(postIndex) {
    const sorted = sortPosts();
    currentPost = sorted[postIndex];
    currentImageIndex = 0;
    renderModalImages();
    updateModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalImages.scrollTo(0, 0);
}

function renderModalImages() {
    modalImages.innerHTML = '';
    currentPost.images.forEach((imageSrc, index) => {
        const item = document.createElement('div');
        item.className = 'modal-image-item';

        if (imageSrc.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.src = 'assets/posts/' + imageSrc;
            video.controls = false;
            video.autoplay = true;
            video.loop = true;
            video.muted = true; 
            video.playsInline = true;
            video.loop = false;
            item.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = 'assets/posts/' + imageSrc;
            img.alt = `Post image ${index + 1}`;
            item.appendChild(img);
        }

        modalImages.appendChild(item);
    });
}

function updateModal() {
    modalUsername.textContent = currentPost.username;
    modalDescription.textContent = currentPost.description;
    imageIndicator.textContent = `${currentImageIndex + 1}/${currentPost.images.length}`;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentPost.images.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }

    modalImages.scrollTo({
        left: currentImageIndex * modalImages.offsetWidth,
        behavior: 'smooth'
    });
}

document.getElementById('closeBtn').addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.getElementById('prevBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModal();
    }
});

document.getElementById('nextBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentImageIndex < currentPost.images.length - 1) {
        currentImageIndex++;
        updateModal();
    }
});

modalImages.addEventListener('scroll', () => {
    const imageWidth = modalImages.offsetWidth;
    const newIndex = Math.round(modalImages.scrollLeft / imageWidth);

    if (newIndex !== currentImageIndex) {
        currentImageIndex = newIndex;
        imageIndicator.textContent = `${currentImageIndex + 1}/${currentPost.images.length}`;
    }
});

modalImages.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = modalImages.scrollLeft;
}, { passive: true });

modalImages.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 1.5;
    modalImages.scrollLeft = scrollLeft - walk;
}, { passive: true });

modalImages.addEventListener('touchend', () => {
    startX = null;
}, { passive: true });

function setActiveTab(tabName) {
    currentTab = tabName;

    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const targetIndex = Array.from(tabs).findIndex(tab => tab.dataset.tab === tabName);

    tabIndicator.style.transform = `translateX(${targetIndex * 50}%)`;

    tabsContent.style.transform = `translateX(-${targetIndex * 50}%)`;
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        setActiveTab(tab.dataset.tab);
    });
});



toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.textContent = '☀️';
    }

    renderPosts();

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addListener((e) => {
        if (localStorage.getItem('theme') === null) {
            document.body.classList.toggle('light-mode', !e.matches);
            toggleBtn.textContent = e.matches ? '🌙' : '☀️';
        }
    });
});



function renderLinks() {
    const container = document.getElementById("links-list");
    container.innerHTML = "";
    linksData.forEach(link => {
        const card = document.createElement("a");
        card.className = "link-card";
        card.href = link.url;
        card.target = "_blank";
        card.innerHTML = `
    <div class="link-icon" style="background: ${link.bgColor}">${link.icon}</div>
    <div class="link-content">
        <div class="link-title">${link.title}</div>
        <div class="link-description">${link.description}</div>
    </div>
    `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderLinks);
