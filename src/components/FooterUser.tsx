import React from 'react'
import subbanner from '../assets/image/sub-banner.png';
import boCongThuong from "../assets/image/boCongThuong.png"
import '../js/backtop.js'
type Props = {}

const FooterUser = (props: Props) => {
    return (
        <><footer className="footer">
            <div className="sub-banner">
                <img src={subbanner} alt="Sub Banner" />
            </div>
            <div className="infoFooter">
                <div className="contact-phone">
                    <h4>CALL TO PURCHASE ( 08:30-22:00 )</h4>
                    <div className="infoContent">
                        <span className="iconFooter">
                            <i className="fa fa-phone" />
                        </span>
                        <span className="titleHotline">
                            0982022969
                        </span>
                        <span className="moreInfoFooter">
                            Every day of the week
                        </span>
                    </div>
                </div>
                {/* end phone 1 */}
                <div className="contact-phone">
                    <h4>COMMENTS, COMPLAINTS ( 08:30-22:00 )</h4>
                    <div className="infoContent">
                        <span className="iconFooter">
                            <i className="fa fa-phone" />
                        </span>
                        <span className="titleHotline">
                            0915988888
                        </span>
                        <span className="moreInfoFooter">
                            Every day of the week
                        </span>
                    </div>
                </div>
                {/* end phone 2 */}
                <div className="form-email">
                    <h4>SIGN UP FOR NEW INFORMATION</h4>
                    <div className="register">
                        <input type="text" className="input_regBot" placeholder="Enter your email here..." />
                        <button className="btn__register" type="button">REGISTER</button>
                    </div>
                </div>
                {/* form-email */}
                <div className="follow-us">
                    <h4>FOLLOW US</h4>
                    <div className="icon-social">
                        <ul className="navbar-social">
                            <li className="social">
                                <a href="#" className="navbar-icon__links"><span><i className="fab fa-facebook-f" /></span></a>
                            </li>
                            <li className="social">
                                <a href="#" className="navbar-icon__links"><span><i className="fab fa-instagram" /></span></a>
                            </li>
                            <li className="social">
                                <a href="#" className="navbar-icon__links"><span><i className="fab fa-twitter" /></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*end follow us */}
            </div>
            {/* Contact */}
            {/* Begin : footerBottom  */}
            <div className="footerBottom">
                <div className="policies">
                    <h5>POLICIES &amp; REGULATIONS</h5>
                    <ul className="policise-item">
                        <li><a href="#">How to order</a></li>
                        <li><a href="#">Membership Policy</a></li>
                        <li><a href="#">Delivery policy</a></li>
                        <li><a href="#">Terms of return</a></li>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Complaint handling policy</a></li>
                    </ul>
                </div>
                {/* end policies */}
                <div className="system">
                    <h5>SHOP SYSTEM</h5>
                    <ul className="system">
                        <p>►344 Cau Giay</p>
                        <p>►23 Chua Boc, Dong Da</p>
                        <p>►338 Nguyen Trai, Ha Dong</p>
                        <p>►209 Bach Mai</p>
                        <p>►189 Pho Nhon</p>
                        <p>►183 Tran Cung</p>
                    </ul>
                </div>
                {/* end system */}
                <div className="about-us">
                    <h5>ABOUT US</h5>
                    <p>
                        <strong>LIMITED LIABILITY COMPANY TIME MAN</strong>
                    </p>
                    <p>
                        <strong>Address:</strong>
                        344 Cau Giay Street, Dich Vong Ward, <br />
                        Cau Giay District, Hanoi City
                    </p>
                    <p>
                        <strong>
                            Business code:
                        </strong>
                        0108901419 issued by Hanoi Department of Planning and Investment
                        on September 17, 2019
                    </p>
                    <p>
                        <strong>Phone:</strong>
                        0982.022.969
                    </p>
                    <p>
                        <strong>Email:</strong>
                        timeman.vn@gmail.com
                    </p>
                    <p>
                        <a href="http://online.gov.vn/Home/WebDetails/69075"><img src={boCongThuong} alt="boCongThuong" height="57px" /></a>
                    </p>
                </div>
                {/* end about us */}
                <div className="our_fanpage">
                    <h5>OUR FANPAGE</h5>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTony4men%2F&tabs=timeline&width=304&height=215&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" width={304} height={215} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                </div>
            </div>
        </footer><div className="bttop" id="bttop">
                <span className="text-bttop">Back to top</span>
                <i className="fa fa-arrow-right-long" />
            </div></>

    )
}

export default FooterUser