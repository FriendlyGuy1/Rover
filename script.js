const mainDiv = document.querySelector("#main_div")


const FetchRover = async () => {
    try{
        const curiosity = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2JsMw0QQvLJTVHllm9RX9bn5cGWUpcIuJLUmhBRM")
        const Spirit = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=2JsMw0QQvLJTVHllm9RX9bn5cGWUpcIuJLUmhBRM")
        const Opportunity = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=2JsMw0QQvLJTVHllm9RX9bn5cGWUpcIuJLUmhBRM")
        const OppRover = await Opportunity.json();
        const SpiRover = await Spirit.json();
        const CurRover = await curiosity.json();

        CurRover.photos.forEach(element =>{

            const my_img = document.createElement("img");
            my_img.src = element.img_src;
            my_img.addEventListener("click", function(){
                const NewWindow = window.open()
                NewWindow.document.body.innerHTML = `<img src="${my_img.src}">`;
            })

            mainDiv.appendChild(my_img);

            const my_p = document.createElement("p");
            my_p.innerText = `nusileidimas marse: ${element.rover.landing_date}`;
            mainDiv.appendChild(my_p);
})
        OppRover.photos.forEach(element =>{

            const my_img = document.createElement("img");
            my_img.src = element.img_src;
            mainDiv.appendChild(my_img);


            const my_p = document.createElement("p");
            my_p.innerText = `nusileidimas marse: ${element.rover.landing_date}`;
            mainDiv.appendChild(my_p);
})
        SpiRover.photos.forEach(element =>{

            const my_img = document.createElement("img");
            my_img.src = element.img_src;
            mainDiv.appendChild(my_img);


            const my_p = document.createElement("p");
            my_p.innerText = `nusileidimas marse: ${element.rover.landing_date}`;
            mainDiv.appendChild(my_p);
})

    }
    catch(error){
        console.log(error)
    }
}

FetchRover();





// 2JsMw0QQvLJTVHllm9RX9bn5cGWUpcIuJLUmhBRM