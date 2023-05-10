import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function FooterSingUp(){
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	};	

    return(
        <>
            <div className="container">
                <div className="subscribe-inner row align-items-center">
                    <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="title-head">
                            <i className="fas fa-envelope-open-text"></i>
                            <h3 className="title text-white">Sign Up To Get Latest Updates</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                            <div className="dzSubscribeMsg"></div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address..." />
                                    <div className="input-group-addon">
                                        <button name="submit" value="Submit" type="submit" className="btn btn-primary"><i className="fas fa-envelope"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
    
}
export default FooterSingUp;