import phone from "./img/phone.png";
import email from "./img/email.png";
import location from "./img/location.png";

function Contact_us(){

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col border border-dark border-2">
                        <h1>ggvcudgcudv</h1>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 border border-2">
                   
                        <img src={phone} class="img-thumbnail"></img>
                        <h3 class="text-center">Phone_No</h3>
                        <h4 class="text-center">234-9876-5487</h4>
                        <h4 class="text-center">888-0123-5687(Toll-free)</h4>

                    </div>
                    <div className="col-sm-4 border border-2">
                    <img src={location} class="img-thumbnail"></img>
                        <h3 class="text-center">Our Main Office</h3>
                        <p class="text-center">High street 95, Broadway st New York, NY 1001</p>


                    </div>
                    <div className="col-sm-4 border border-2">
                    <img src={email} class="img-thumbnail"></img>
                        <h3 class="text-center">Email</h3>
                        <h5 class="text-center">EAsports99@gamil.com</h5>

                    </div>


                </div>

            </div>
        </div>

    );
}
export default Contact_us;