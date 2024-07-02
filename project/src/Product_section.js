import Product_card from "./Product_card";

function Product_section(){

    let title = ["Bat","Ball","Badminton","Hockey","Carrom","Football","Basketball","Shoes"];
    let Product_about = ["A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.",
        "A cricket ball is a hard, solid ball used to play cricket. A cricket ball consists of cork covered by four pieces of cow leather and Weight is 160 gm and Suitable for day and night matches.",
        "All Rounder, can be used by Batsman, Bowler, Fielder & Wicket keeper. High Resistant PVC Upper and Outsole Comfortable Eva Sock Liner."
    "Made up with Solid Wood material attractive and durable Attractive, durable and high grip to use for all One Hockey Stick One Ball hockey Stick for Practice and Beginner Level.",
    "The carrom board is a square board with 4 pockets on the 4 corners of the board.The game is played using wooden/acrylic discs like coins. There are 19 coins",
    "Football, any of a number of related games, all of which are characterized by two persons or teams attempting to kick, carry, throw, or otherwise propel a ball toward an opponents goal.",
     "A basketball is a spherical ball. Basketballs usually range in size from very small promotional items that are only a few inches in diameter to extra large balls nearly 2 feet used in training exercises.",
     "All Rounder, can be used by Batsman, Bowler, Fielder & Wicket keeper. High Resistant PVC Upper and Outsole Comfortable Eva Sock Liner."];
    let Price = ["100","200","300","400","500","600","700","800"];
    
    let Photo =["/workspaces/sport-shop/project/src/img/Bat.png","/workspaces/sport-shop/project/src/img/Ball.png","/workspaces/sport-shop/project/src/img/badminton.png","/workspaces/sport-shop/project/src/img/hockey.png","/workspaces/sport-shop/project/src/img/carrom.png",
        "/workspaces/sport-shop/project/src/img/football.png","/workspaces/sport-shop/project/src/img/basketball.png","/workspaces/sport-shop/project/src/img/shoes.png"];
   
    let size = title.length;
    return(
        <div>
            <div className="container">
                <div className="row">
                    {[...Array(size)].map((x,i) =>
                    <Product_card title={title[i]} Product_about={Product_about[i]} Price={Price[i]} Photo={Photo[i]}/>
                    )}

                </div>
            </div>
        </div>

    );
}
export default Product_section;