let date = "";
let searchButton = document.querySelector("button");
let url = "https://api.nasa.gov/planetary/apod/?api_key=s6O0YbtWTILcUnzg8MnjjtmKQksaEDrh3D8zYL0l";
let image = document.querySelector("img");
let h2 = document.querySelector("h2");
let description = document.querySelector("#desc");
let copyright = document.querySelector("#copyright");
let video = document.querySelector("iframe");

searchButton.addEventListener("click", getPicture);


function getPicture() {
    
    h2.innerText = "";
    image.src = "";
    image.alt = "";
    copyright.innerText = "";
    description.innerText = "";
    url = "https://api.nasa.gov/planetary/apod/?api_key=s6O0YbtWTILcUnzg8MnjjtmKQksaEDrh3D8zYL0l";
    video.src = "";
    video.classList.add("hidden");

    if (document.querySelector("input").value !== "") {
        date = document.querySelector("input").value;
        
        url += `&date=${date}`;
    
        fetch(url)
        .then(res => res.json())
        .then(data => {

            if(data.copyright) {
                copyright.innerText = `Copyright: ${data.copyright}`;
            }
            
            if (data.media_type === "video") {
                video.src = data.url;
                video.classList.toggle("hidden")
                h2.innerText = data.title;
                description.innerText = data.explanation;

            } else {
                image.src = data.hdurl;
                image.alt = "An image from space, courtesy of NASA";
                h2.innerText = data.title;
                description.innerText = data.explanation;
            }
        })
        .catch(error => console.log(error));
    }
    
}
