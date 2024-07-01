import Bat from "./img/Bat.png";
import football from "./img/football.png";
import Ball from "./img/Ball.png";
import hockey from "./img/hockey.png";
import shoes from"./img/shoes.png";
import Counter from "./Counter";
function Product_card(){

    return(
        <div class="container">
            <div class="row">
                <div class="col-sm-3 mt-2">
                    <div className="card shadow-lg border">
                         <img src={Bat} className="img-thumbnail card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Bat</h5>
                                 <p className="card-text">A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.</p>
                                <a href="#" className="btn btn-primary">Buy Now $100 </a>
                                <Counter></Counter>
                            </div>
                    </div>
                </div>
                <div class="col-sm-3 mt-2">
                    <div className="card shadow-lg border">
                         <img src={Ball} className="img-thumbnail card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Ball</h5>
                                 <p className="card-text">A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.</p>
                                <a href="#" className="btn btn-primary">Buy Now $50</a>
                                <Counter></Counter>
                            </div>
                    </div>
                </div>

                <div class="col-sm-3 mt-2">
                    <div className="card shadow-lg border">
                         <img src={hockey} className="img-thumbnail card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Hockey</h5>
                                 <p className="card-text">A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.</p>
                                <a href="#" className="btn btn-primary">Buy Now $200</a>
                                <Counter></Counter>
                            </div>
                    </div>
                </div>
                <div class="col-sm-3 mt-2">
                    <div className="card shadow-lg border">
                         <img src={football} className="img-thumbnail card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Football</h5>
                                 <p className="card-text">A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.</p>
                                <a href="#" className="btn btn-primary">Buy Now $150</a>
                                <Counter></Counter>
                            </div>
                    </div>
                </div>
                <div class="col-sm-3 mt-2">
                    <div className="card shadow-lg border">
                         <img src={shoes} className="img-thumbnail card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Shoes</h5>
                                 <p className="card-text">A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.</p>
                                <a href="#" className="btn btn-primary">Buy Now $300</a>
                                <Counter></Counter>
                            </div>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Product_card;