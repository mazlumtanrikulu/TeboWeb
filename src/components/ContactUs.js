import React from "react";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


//images
import bg7png from "../assets/images/background/bg7.png";
import about28 from "../assets/images/about/about28.jpg";
import { useState } from "react";


const ContactUs = ({ splitEvent }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("Mesajınızı Giriniz")
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
    
  };
 const onChangeEmailHandler = (e) => {
    setEmail(e.target.value)

  }
  const onChangePhoneHandler = (e) => {
    setPhone(e.target.value)

  }
  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value)

  }
 
 

  const showSweetAlert = () => {
    Swal.fire({
        title: "İşlem tamamlandı",
        text: "Başarılı!",
        icon: "success",
        confirmButtonText: "Tamam",
      });
  };
  const showWrongSweetAlert = () => {
    Swal.fire({
        title: "Oops...!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Tamam",
      });
  }
  const handleClick = () => {
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "" ) {
      showWrongSweetAlert();
    } else {
      showSweetAlert();
    }
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("Mesajınızı Giriniz")
    // emailjs.sendForm(
    //   "YOUR_SERVICE_ID",
    //   "YOUR_TEMPLATE_ID",
    //   form.current,
    //   "YOUR_USER_ID"
    // );
    // emailjs
    //   .sendForm(
    //     "service_gfykn6i",
    //     "template_iy1pb0b",
    //     e.target,
    //     "HccoOtZS6GHw-N-m6"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },

    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    e.target.reset();
    
  };
  return (
    <section
      className="content-inner"
      style={{ backgroundImage: "url(" + bg7png + ")" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-b30">
            <div
              className="contact-area1 m-r20 m-md-r0 aos-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="section-head style-1">
                <h6 className="sub-title text-primary">CONTACT US</h6>
                <h3 className="title m-b20">Request A Quote</h3>
              </div>
              <form className="dz-form dzForm" ref={form} onSubmit={sendEmail}>
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  defaultValue="Contact"
                />
                <div className="dzFormMsg"></div>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={onChangeNameHandler}
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmailHandler}
                    placeholder="Email Adress"
                  />
                </div>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={onChangePhoneHandler}
                    name="dzOther[phone_number]"
                    placeholder="Phone No."
                  />
                </div>
                <div className="input-group">
                  <textarea
                    required
                    name="message"
                    value={message}
                    onChange={onChangeMessageHandler}
                    rows="5"
                    className="form-control"
                    defaultValue="Message"
                  />
                </div>
                {/* <div className="input-group">
                                <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                <input className="form-control d-none" style={{display:'none'}} data-recaptcha="true" required data-error="Please complete the Captcha" />
                            </div> */}
                <div className="d-flex justify-content-around">
                  <button
                    name="submit"
                    type="submit"
                    defaultValue="submit"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    SUBSCRIBE NOW
                  </button>
                  <Link
                    to={"/contact-us"}
                    className="btn btn-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 m-b30 align-self-center">
            <div
              className="section-head style-1 aos-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <h3 className="title m-b20">
                We Are Always Best For Industrial Solution
              </h3>
            </div>
            <ul
              className="list-check primary m-b40 aos-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <li>Think Positive, Think Always</li>
              <li>Everyone Loves Got An Incredible</li>
              <li>Our Professional Team Works</li>
              <li>We Are Laregest Independent</li>
            </ul>
            <div className={`split-box ${splitEvent ? "" : "split-active"}`}>
              <img
                src={about28}
                alt=""
                className="aos-item w-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
