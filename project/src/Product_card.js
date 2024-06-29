import Bat from "./img/Bat.png";
function Product_card(){

    return(
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div className="card shadow-lg border">
                         <img src={Bat} className="img-thumbnail card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Bat</h5>
                                 <p className="card-text">A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default Product_card;