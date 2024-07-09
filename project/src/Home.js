import wallpaper from "./img/wallpaper.jpg";
function Home(){

    return(
        <div className="container">
            <div className="row">
                <div className="col border border-dark">
                    <img src={wallpaper} height="400" width="100%"></img>
                    <h1> Online Shopping For</h1>
                    <h1>Sports, Fitnesss, And</h1>
                    <h1>Outdoor Sports</h1>
                    <h1>Events</h1>

                </div>
            </div> 

        </div>


    );

}
export default Home;