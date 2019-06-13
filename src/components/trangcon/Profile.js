import React from 'react';  //, { useEffect, useState }
import './profile.css'
import firebase from '../../connectdb/firebase'
function Profile(props) {


    // if(!firebase.getCurrentUsername()) {
    // 	// not logged in
    // 	alert('Please login first')
    // 	props.history.replace('/login')
    // 	return null
    // }

    // const [quote, setQuote] = useState('')

    // useEffect(() => {
    // 	firebase.getCurrentUserQuote().then(setQuote)
    // })

    return (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://image.flaticon.com/icons/png/512/149/149071.png" alt="true" />
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                      <input type="file" name="file" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="profile-head">
                            <h5>
                                Hello {firebase.getCurrentUsername()}
                            </h5>
                            <h6>
                                Profile And Information
                    </h6>
                            {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">

                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                    </li> */}
                            </ul>

                            <div className="text-muted">
                                Your Quote:
                                {/* {quote ? `"${quote}"` : "loadload"} */}

                            </div>

                            <div className="text-danger welcome-profile">Chào Mừng Đến Với Trang Thông Tin Của Bạn..!!! Hãy Nhấn Nút About Để Biết Về Thông Tin Của Bạn</div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary">Edit Profile</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Thông Tin User</p>
                            <a href>Tin Nhắn: 10</a><br />
                            <a href>Thông Báo: 1</a><br />
                            <a href>Comment: 40</a>
                            <p>Thông Tin Sản Phẩm</p>
                            <a href>Sản Phẩm Đã Mua: *</a><br />
                            <a href>Sản Phẩm Đã Trả: *</a><br />
                            <a href>Sản Phẩm Đã Đánh Giá: *</a><br />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{firebase.getCurrentUsername()}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>kshitighelani@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>*</p>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Hourly Rate</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>10$/hr</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Total Projects</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>230</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>English Level</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Availability</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>6 months</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br />
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );

}

export default Profile;