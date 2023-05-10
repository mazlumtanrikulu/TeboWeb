import {Link} from 'react-router-dom';

//Images
import large1 from './../assets/images/blog/large/pic1.jpg';
import grid2 from './../assets/images/blog/blog-grid/pic2.jpg';
import grid1 from './../assets/images/blog/blog-grid/pic1.jpg';
import test1 from './../assets/images/testimonials/pic1.jpg';
import test2 from './../assets/images/testimonials/pic2.jpg';
import test3 from './../assets/images/testimonials/pic3.jpg';

function CommentBlog({image, title}){
    return(
        <>
            <div className="comment-author vcard"> 
                <img  className="avatar photo" src={image} alt="" /> 
                <cite className="fn">{title}</cite>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="reply"> 
                <Link to={'#'} className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
            </div>
        </>
    )
}

export default function BlogDetailsWideSection(){
    return(
        <>
        
            <div className="dz-card style-1 blog-single">
                <div className="dz-media">
                    <img src={large1} alt="" />
                </div>
                <div className="dz-info">
                    <div className="dz-meta">
                        <ul>
                            <li className="post-date"><i className="las la-calendar"></i> 7 March, 2022</li>
                            <li className="post-author"><Link to={"#"}><i className="las la-user"></i> By Johne Doe</Link></li>
                        </ul>
                    </div>
                    <h2 className="dz-title">When Professionals Run Into Problems With AGENCY, This Is What They Do</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, tortor in varius lobortis, sapien arcu ornare nisi, ut volutpat ante augue quis arcu. Phasellus lacinia magna elit, at maximus leo tristique non. Phasellus laoreet, nisi quis fermentum blandit, leo dolor bibendum arcu, vel dignissim diam odio a elit. In dapibus congue urna vitae porta. Quisque tincidunt velit sed ullamcorper pretium. Nullam vitae luctus libero.</p>
                    <ul className="wp-block-gallery columns-3">
                        <li className="blocks-gallery-item"><img alt="" src={grid2} /></li>
                        <li className="blocks-gallery-item"><img alt="" src={grid1} /></li>
                    </ul>
                    <p>Vestibulum porttitor purus commodo sagittis molestie. Fusce facilisis ipsum ut tincidunt suscipit. Vivamus tristique lectus quis dignissim convallis. Cras eget ipsum bibendum, feugiat libero in, scelerisque erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <blockquote className="block-quote style-1">
                        <p>“You can make anything look good. Only a quarter of young adults are financially literate. You don’t want to overwhelm them with terrible advice.”</p>
                        <cite> Indiro </cite>
                    </blockquote>
                    <p className="m-b40">Aliquam in laoreet dui. Aliquam blandit nisl lacus, sed suscipit massa pulvinar vitae. Proin non dui eros. Mauris lobortis arcu a quam tincidunt, at consectetur urna dapibus. Curabitur sagittis nisl vel dolor porta, eu fringilla est accumsan. Donec eleifend dignissim risus a tempor. Sed suscipit ultrices viverra.</p>
                    <h4 className="m-b15">Aliquam pretium neque vel condimentum sodales.</h4>
                    <div className="row m-b40">
                        <div className="col-md-6">
                            <ul className="list-check-1">
                                <li>Mauris molestie ex non ante sceleris</li>
                                <li>Nullam vel mi sed quam venenatis bibendum</li>
                                <li>Aliquam at iaculis purus, eget aliquam erat</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-check-1">
                                <li>Mauris molestie ex non ante sceleris</li>
                                <li>Nullam vel mi sed quam venenatis bibendum</li>
                                <li>Aliquam at iaculis purus, eget aliquam erat</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="dz-share-post">
                    <div className="dz-social-icon">
                        <h6 className="title">Share:</h6>
                        <ul>
                            <li><Link to={'#'} className="fab fa-facebook-f"></Link></li>
                            <li><Link to={'#'} className="fab fa-instagram" ></Link></li>
                            <li><Link to={'#'} className="fab fa-twitter" ></Link></li>
                        </ul>
                    </div>
                    <div className="post-tags">
                        <Link to={'#'}>#Mobile</Link>
                        <Link to={'#'}>#Software</Link>
                        <Link to={'#'}>#Technology</Link>
                    </div>
                </div>
            </div>
            
            {/* <!-- Author Profile --> */}
            <div className="author-box blog-user m-b60">
                <div className="author-profile-info">
                    <div className="author-profile-pic">
                        <img src={test2} alt="Profile Pic" />
                    </div>
                    <div className="author-profile-content">
                        <h4>Jake Johnson</h4>
                        <p>We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed.</p>
                        <ul className="list-inline m-b0">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" className="btn-link">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" className="btn-link">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com" target="_blank" className="btn-link">
                                    <i className="fab fa-google-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank" className="btn-link">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* <!-- Comments --> */}
            <div className="clear" id="comment-list">
                <div className="comments-area" id="comments">
                    <div className="widget-title">
                        <h4 className="title">8 Comments</h4>
                        <div className="dz-separator style-1 bg-primary mb-0"></div>
                    </div>
                    <div className="clearfix">
                        {/* <!-- comment list END --> */}
                        <ol className="comment-list">
                            <li className="comment">
                                <div className="comment-body">
                                    <CommentBlog  image={test1} title='Celesto Anderson'/>
                                </div>
                                <ol className="children">
                                    <li className="comment odd parent">
                                        <div className="comment-body">
                                            <CommentBlog  image={test2} title='Jake Johnson'/>   
                                        </div>
                                        {/* <!-- list END --> */}
                                    </li>
                                </ol>
                                {/* <!-- list END --> */}
                            </li>
                            <li className="comment">
                                <div className="comment-body">
                                    <CommentBlog  image={test3} title='John Doe'/>
                                </div>
                            </li>
                        </ol>
                        {/* <!-- comment list END -->*/}
                        {/* <!-- Form -->  */}
                        <div className="comment-respond" id="respond">
                            <div className="widget-title">
                                <h4 className="title" id="reply-title">Leave Your Comment
                                    <small><Link to={'#'} style={{display:'none'}}  id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link></small>
                                </h4>
                                <div className="dz-separator style-1 bg-primary mb-0"></div>
                            </div>
                            <form className="comment-form" id="commentform" method="post">
                                <p className="comment-form-author">
                                    <label for="author">Name <span className="required">*</span></label>
                                    <input type="text" name="Author"  placeholder="Author" id="author" />
                                </p>
                                <p className="comment-form-email">
                                    <label for="email">Email <span className="required">*</span></label>
                                    <input type="text" placeholder="Email" name="email" id="email" />
                                </p>
                                <p className="comment-form-url">
                                    <label for="url">Website</label>
                                    <input type="text"  value="url"  placeholder="Website"  name="url" id="url" />
                                </p>
                                <p className="comment-form-comment">
                                    <label for="comment">Comment</label>
                                    <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                </p>
                                <p className="form-submit">
                                    <button type="submit" className="btn btn-border shadow-primary btn-primary" id="submit">SUBMIT</button>
                                </p>
                            </form>
                        </div>
                        {/* <!-- Form --> */}
                    </div>
                </div>
            </div>
                        
                    
        </>
    )
}