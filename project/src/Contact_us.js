import phone from "./img/phone.png";
import email from "./img/email.png";
import location from "./img/location.png";
import contactbanner from "./img/contactbanner.jpg";

function Contact_us(){
        return(
       
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                       <img src={contactbanner}  height="400" width="100%"></img>
                    </div>
                </div>

                <div className ="row">
                    <div className ="col-sm-6">
                        <h1>Contact Us</h1>
                        <form class="m-2">
                <div class="mb-3">
                  <label for="name" class="form-label text-black">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name"></input>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label text-black">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
                  </div>
                  <div class="mb-3">
                    <label for="phone-no" class="form-label text-black">phone-no</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your phone-no"></input>
                  </div>
                  
                  <div class="mb-3">
                    <label for="message" class="form-label text-black">Message</label>
                    <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>         
           
                    </div>
                    <div className ="col-sm-6">
                        <h1>Map</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1720451524312!5m2!1sen!2sin" width="600" height="400"></iframe>
                    </div>
                 </div>

                <div className="row">
                <div className = "col-sm-4 border border-2">
                     <img src={phone} height="80" width="80"></img>
                        <h3 class="text-center">Phone_No</h3>
                        <h4 class="text-center">234-9876-5487</h4>
                        <h4 class="text-center">888-0123-5687(Toll-free)</h4>

                    </div>
                    <div className="col-sm-4 border border-2">
                    <img src={location} height="80" width="80"></img>
                        <h3 class="text-center">Our Main Office</h3>
                        <p class="text-center"> Central park, High street 95, Broadway st New York, NY 1001</p>
                    </div>
                    <div className="col-sm-4 border border-2">
                    <img src={email} height="80" width="80"></img>
                        <h3 class="text-center">Email</h3>
                        <h5 class="text-center">EAsports99@gamil.com</h5>

                    </div>


                </div>

            </div>
        </div>

    );
}
export default Contact_us;