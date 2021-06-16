import img_mockups from './images/image-mockups.png';
import logo from './images/logo.svg';

import './App.css';


function App() {

  const box2Text = [
    {
      topTex: 'Online Banking',
      bottomText: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
      icon: ''
    },
    {
      topTex: 'Simple Budgeting',
      bottomText: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
      icon: ''
    },
    {
      topTex: 'Fast Onboarding',
      bottomText: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
      icon: ''
    },
    {
      topTex: 'Open API',
      bottomText: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
      icon: ''
    }
  ];

  const articleData = [
    {
      img: 'By Claire Robinson',
      authorName: '',
      title: 'Receive money in any currency with no fees',
      previewText: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    },
    {
      img: '',
      authorName: 'By Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      previewText: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    },
    {
      img: '',
      authorName: 'By Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      previewText: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    },
    {
      img: '',
      authorName: 'By Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      previewText: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    }
  ];

  return (
    <div className="App">

      <div className="navBar">
        <img src={logo} alt='' />
        <div className="navBtns">
          <input className="navBtn" type="button" value="Home" />
          <input className="navBtn" type="button" value="About" />
          <input className="navBtn" type="button" value="Contact" />
          <input className="navBtn" type="button" value="Blog" />
          <input className="navBtn" type="button" value="Careers" />
        </div>
        <input type="button" className="button" value="Request Invite" />
      </div>

      <div className="middleBox1">
        <div className="left">
          <p className="text1">
            Next generation digital banking

          </p>
          <p className="text2">
            Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.
          </p>
          <input className="button" type="button" value="Request Invite" />
        </div>

        <div className="box1imagebox">
          <img src={img_mockups} alt="Mockups of mobile online banking interface" />
        </div>


      </div>

      <div className="middleBox2">
        <p className="text1">
          Why choose Easybank?
        </p>
        <p className="text2">
          We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.
        </p>
        <div className="box2Row">
          <div className="box2Container">
            {box2Text.map((box2Data) =>
              <>
                <img src={box2Data.icon} alt="" />
                <p className="text3">{box2Data.topTex}</p>
                <p className="text2">{box2Data.bottomText}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="articleRow">
        <p className="text1">Latest Articles</p>

        <div className="articleContainer">
          {articleData.map((articleObj) =>
            <>
              <img src={articleObj.img} alt="" />
              <p className="text4">{articleObj.authorName}</p>
              <p className="text5">{articleObj.title}</p>
              <p className="text6">{articleObj.previewText}</p>
            </>
          )}
        </div>
      </div>

      <div className="footer">
        <div className="iconsAndLogo">
          <img src={logo} alt='' />
          <div className="icons">
            <img src={""} alt=""></img>
            <img src={""} alt=""></img>
            <img src={""} alt=""></img>
            <img src={""} alt=""></img>
            <img src={""} alt=""></img>
          </div>
        </div>

        <div className="footerButtons">
          <div className="footerLeft">
            <input type="button" value="About Us" />
            <input type="button" value="Contact" />
            <input type="button" value="Blog" />
          </div>
          <div className="footerRight">
            <input type="button" value="Careers" />
            <input type="button" value="Support" />
            <input type="button" value="Privacy Policy" />
          </div>
        </div>

        <div className="footerRight">
          <input className="button" type="button" value="Request Invite" />
          <p className="text2">© Easybank. All Rights Reserved</p>
        </div>

      </div>





    </div >
  );
}

export default App;
