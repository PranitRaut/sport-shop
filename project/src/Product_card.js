
import Counter from "./Counter";
function Product_card(props){

    return(
        <>
        <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3 mt-2">
                    <div className="card shadow-lg border">
                        <img src={props.Photo} className="img-thumbnail card-img-top"></img>
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.Product_about}</p>
                            <a href="#" class="btn btn-primary">Buy Now{props.Price}</a>
                            <Counter></Counter>
                        </div>
                    </div>
               
                </div>
                    
            </div>

        </div>
        </div>
    </>

    );
}
export default Product_card;