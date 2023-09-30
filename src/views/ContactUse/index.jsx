import React, { useRef, useState } from 'react';
import bg24 from '../../assets/images/background/bg24.jpg';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
    const { t } = useTranslation();
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("");
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
        if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "") {
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
        setMessage("")
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
        <>

            <div className="page-content bg-white" id='contactus'>

                <section className="content-inner-2 pt-0">
                    <div className="map-iframe">
                        <iframe title="contact" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3199.2138365644596!2d36.207738075833404!3d36.693399072277806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDQxJzM2LjIiTiAzNsKwMTInMzcuMSJF!5e0!3m2!1sen!2str!4v1695477191703!5m2!1sen!2str" style={{ border: '0', width: '100%', minHeight: '100%', marginBottom: '-8px' }} allowFullScreen></iframe>
                    </div>
                </section>
                <section className="contact-wraper1" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <div className="section-head text-white style-1">
                                        <h3 className="title text-white">{t('home.contact_us.info.title')}</h3>
                                        <p>{t('home.contact_us.info.subTitle')}</p>
                                    </div>
                                    <ul className="no-margin">
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell">
                                                    <i className="flaticon-placeholder-1"></i>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className=" dz-tilte text-white">{t('home.contact_us.info.address.title')}</h4>
                                                <p className="font-18">{t('home.contact_us.info.address.content')}</p>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell">
                                                    <i className="flaticon-smartphone"></i>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dz-tilte text-white">{t('home.contact_us.info.phone.title')}</h4>
                                                <p className="font-18">{t('home.contact_us.info.phone.content')}</p>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell">
                                                    <i className="flaticon-message"></i>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dz-tilte text-white">{t('home.contact_us.info.email.title')}</h4>
                                                <p className="font-18">{t('home.contact_us.info.email.content')}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 m-b40">
                                <div className="contact-area1 m-r20 m-md-r0">
                                    <div className="section-head style-1">
                                        <h6 className="sub-title text-primary">{t('home.contact_us.form.title')}</h6>
                                        <h3 className="title m-b20">{t('home.contact_us.form.subTitle')}</h3>
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
                                                placeholder={t('home.contact_us.form.fullName')}
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
                                                placeholder={t('home.contact_us.form.email')}
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
                                                placeholder={t('home.contact_us.form.phone')}
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
                                                defaultValue={t('home.contact_us.form.msg')}
                                            />
                                        </div>
                                        {/* <div className="input-group">
                                <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                <input className="form-control d-none" style={{display:'none'}} data-recaptcha="true" required data-error="Please complete the Captcha" />
                            </div> */}
                                        <div className="d-flex justify-content-around">
                                            {/* <button
                                                name="submit"
                                                type="submit"
                                                defaultValue="submit"
                                                className="btn btn-primary"
                                                onClick={handleClick}
                                            >
                                                SUBSCRIBE NOW
                                            </button> */}
                                            <Link
                                                to={"/contact-us"}
                                                className="btn btn-primary"
                                            >
                                                {t('home.contact_us.form.title')}
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>

        </>
    )
}