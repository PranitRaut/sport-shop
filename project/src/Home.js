import wallpaper from "./img/wallpaper.jpg";


function Home(){

    return(
        <div class="container mt-5">
        <div class="row">
            <div class="col text-center">
                
                 <img src={wallpaper} height="400" width="100%"></img>
                    </div>
            </div>
        <div class= "row">
            <div class="col-sm-10 p-2">
                
                <p class="text-start text-black">"Welcome to our online sports shop! Discover a wide range of high-quality sports gear and equipment to elevate your game. From top brands to exclusive deals, we've got everything you need to stay active and perform at your best. Start shopping now and gear up for success!"
                </p>
             
                <button type="button" class="btn btn-warning">Order Now</button>
            </div>
        </div>
    </div>
  

    

    

    );

}
export default Home;