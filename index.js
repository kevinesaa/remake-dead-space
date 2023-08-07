
const hideStyleClass = "none";
const BASE_RESOURCES_PATH = "./res/";
const TYPES = Object.freeze({VIDEO:0,IMAGEN:1});
const KEYBOARD_CODES = { LEFT_ARROW:"ArrowLeft", RIGHT_ARROW:"ArrowRight"};
const R = Object.freeze([
    {type:TYPES.IMAGEN, path:"black.svg"},
    {type:TYPES.VIDEO, path:"choke_on_em_day_of_dead.mp4"},
    {type:TYPES.VIDEO, path:"robocop.mp4"},
    {type:TYPES.VIDEO, path:"the-thing.mp4"},
    {type:TYPES.IMAGEN, path:"black.svg"},
    {type:TYPES.IMAGEN, path:"001.png"},
    {type:TYPES.IMAGEN, path:"002.png"},
    {type:TYPES.IMAGEN, path:"003.png"},
    {type:TYPES.IMAGEN, path:"004.png"},
    {type:TYPES.IMAGEN, path:"005.png"},
    {type:TYPES.IMAGEN, path:"006.png"},
    {type:TYPES.IMAGEN, path:"007.png"},
    {type:TYPES.IMAGEN, path:"008.png"},
    {type:TYPES.IMAGEN, path:"009.png"},
    {type:TYPES.IMAGEN, path:"010.png"},
    {type:TYPES.IMAGEN, path:"011.png"},
    {type:TYPES.IMAGEN, path:"012.png"},
    {type:TYPES.IMAGEN, path:"013.png"},
    {type:TYPES.IMAGEN, path:"014.png"},
    {type:TYPES.IMAGEN, path:"015.png"},
    {type:TYPES.IMAGEN, path:"016.png"},
    {type:TYPES.IMAGEN, path:"017.png"},
    {type:TYPES.IMAGEN, path:"018.png"},
    {type:TYPES.IMAGEN, path:"019.png"},
    {type:TYPES.IMAGEN, path:"020.png"},
    {type:TYPES.IMAGEN, path:"021.png"},
    {type:TYPES.IMAGEN, path:"022.png"},
    {type:TYPES.IMAGEN, path:"023.png"},
    {type:TYPES.IMAGEN, path:"024.png"},
    {type:TYPES.IMAGEN, path:"025.png"},
    {type:TYPES.IMAGEN, path:"026.png"},
    {type:TYPES.IMAGEN, path:"027.png"},
    {type:TYPES.IMAGEN, path:"028.png"},
    {type:TYPES.IMAGEN, path:"029.png"},
    {type:TYPES.IMAGEN, path:"030.png"},
    {type:TYPES.IMAGEN, path:"031.png"},
    
].map(item => {return {type:item.type, path:BASE_RESOURCES_PATH + item.path}}));

let currentItemIndex = 0;
let videoSection;
let videoPlayer;
let imageSection;
let imageView;
let videoSectionCcsStyle;
let imageSectionCssStyle;

function onLoadEventHandler() {
    videoSection = document.getElementById("video-section");
    videoPlayer = document.getElementById("my-video-player");
    imageSection = document.getElementById("image-section");
    imageView = document.getElementById("my-image-view");
    imageSectionCssStyle = imageSection.style.display;
    videoSectionCcsStyle = videoSection.style.display;
    videoSection.style.display = hideStyleClass;
    loadItem(currentItemIndex);
    window.addEventListener("keydown",onKeyButtonHandler);
}

function onKeyButtonHandler(event) {
    
    if(event.key == KEYBOARD_CODES.RIGHT_ARROW)
    {
        onKeyRigthButtonHandler();
    }

    if(event.key == KEYBOARD_CODES.LEFT_ARROW)
    {
        onKeyLeftButtonHandler();
    }
    
}

function onKeyLeftButtonHandler() {
    let temp = currentItemIndex - 1;
    if(temp >= 0)
    {
        currentItemIndex = temp;
    }
    loadItem(currentItemIndex);
}

function onKeyRigthButtonHandler() {
    
    let temp = currentItemIndex + 1;
    if(temp < R.length)
    {
        currentItemIndex = temp;
    }
    loadItem(currentItemIndex);
}

function loadItem(itemIndex) {
    console.log("aqui: "+itemIndex);
    const item = R[itemIndex];
    if(item.type == TYPES.IMAGEN)
    {
        videoSection.style.display = hideStyleClass;
        imageSection.style.display = imageSectionCssStyle;
        imageView.src = item.path;
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
    
    if(item.type == TYPES.VIDEO) 
    {
        imageSection.style.display = hideStyleClass;
        videoSection.style.display = videoSectionCcsStyle;
        videoPlayer.src = item.path;
        videoPlayer.play();
    }
    
}

window.onload = onLoadEventHandler;
