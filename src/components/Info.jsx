import portraitFoto from '/src/assets/portrait-photo.png';

function Info() {
    return (
        <div className="info">
            <img src={portraitFoto} alt="portrait photo" className="profile-photo" />
            <div className="details">
                <h3 className="info__fullname">Laura Smith</h3>
                <p className="info__position">Frontend Developer</p>
                <a href="https://www.laurasmith.website" className="website-link">laurasmith.website</a>
                <div className="contact-buttons">
                    <a href="emailto:laura@laurasmith.website" className="email-btn btn"><i className="fa fa-envelope"></i>Email</a>
                    <a href="https://www.linkedin.com/in/laurasmith" className="linkedin-btn btn"><i className="fa fa-linkedin-square"></i>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Info;
