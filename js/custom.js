// side menu started here-->>>

let d = document.getElementById("HideSideMenu");
document.getElementById("close").addEventListener('click', () => {
    if (d.style.display == "none") {
        d.style.display = "block";
    } else {
        d.style.display = "none";
    }
})

document.getElementById("open-sidemenu").addEventListener("click", () => {
    if (d.style.display == "block") {
        d.style.display = "none";
    } else {
        d.style.display = "block";
    }
})

document.getElementById("sidemenu").addEventListener("click", () => {
    if (d.style.display == "block") {
        d.style.display = "none";
    } else {
        d.style.display = "block";
    }
})

//side menu ends here -->>>

// progress bar started here -->>>

const progress = document.querySelector(".article-progress");
document.addEventListener("scroll", () => {
    const totalScroll = document.documentElement.offsetHeight;
    const scrolledPosition = document.documentElement.scrollTop;
    const finalScroll = totalScroll - window.innerHeight - 2;
    const scrollPercent = scrolledPosition / finalScroll;
    progress.style.transform = `scalex(${scrollPercent})`;
})

// progress bar ends here -->>>

// preview button js is here -->>>
document.getElementById('btnpreview').addEventListener('click' , ()=>{
    window.open('./projects-assets/vikas singh.pdf' , '' , width="40vw" ,height="40vh" , scroolbar='no');
})

// blog preview is here -->>>
document.getElementById('first-blog').addEventListener('click' , ()=>{
    window.open('./projects-assets/course.html' , '' , width="40vw" ,height="40vh" , scroolbar="false");
})

document.getElementById('second-blog').addEventListener('click' , ()=>{
    window.open('./projects-assets/hobby.html' , '' , width="40vw" ,height="40vh" , scroolbar="false");
})
document.getElementById('third-blog').addEventListener('click' , ()=>{
    window.open('./projects-assets/bootstrapcard.html' , '' , width="40vw" ,height="40vh" , scroolbar="false");
})

// projects preview is here -->>>
document.getElementById('first-project').addEventListener('click' , ()=>{
    window.open('./projects-assets/index.html' , '' , width="40vw" ,height="40vh" , scroolbar="false");
})

document.getElementById('second-project').addEventListener('click' , ()=>{
    window.open('./projects-assets/book.html' , '' , width="40vw" ,height="40vh" , scroolbar="false");
})