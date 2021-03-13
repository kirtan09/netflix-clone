import React, { useRef, useState } from "react";
import Logo from "../../assets/NetflixLogo.png";
import Background from "../../assets/NetflixLoginBackground.jpg";
import SignInScreen from "../SignInScreen/SignInScreen";
import landinginfo from "../../informationData/landingInfo.json";
import * as Style from "./LandingPageStyle";
import Footer from "../Footer/Footer";

function LandingPage() {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);

  const getStarted = () => {
    setSignUp(true);
  };

  return (
    <Style.Container>
      <Style.Background background={Background}>
        <Style.Logo src={Logo} alt="Netflix Logo" />
        <Style.SignInBtn alt="Sign In" onClick={() => setSignUp(true)}>
          Sign In
        </Style.SignInBtn>
        <Style.Gradient></Style.Gradient>
      </Style.Background>
      <Style.Body>
        {!signUp ? (
          <>
            <Style.Header>
              Unlimited films, TV programmes and more.
            </Style.Header>
            <Style.SubTitle>Watch anywhere. Cancel at any time.</Style.SubTitle>
            <Style.BodyText>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Style.BodyText>
            <Style.Container>
              <Style.Form>
                <Style.Input
                  type="email"
                  placeholder="Email Address"
                  ref={emailRef}
                />
                <Style.GetStartedBtn onClick={() => getStarted()}>
                  Get Started
                </Style.GetStartedBtn>
              </Style.Form>
            </Style.Container>
          </>
        ) : (
          <SignInScreen emailAddress={emailRef.current.value} />
        )}
      </Style.Body>
      {landinginfo.map((info) => {
        return (
          <Style.Item>
            <Style.Info key={info.id} direction={info.direction}>
              <Style.Pane>
                <Style.Title>{info.title}</Style.Title>
                <Style.SubTitle>{info.subTitle}</Style.SubTitle>
              </Style.Pane>
              <Style.Image src={info.image} alt={info.alt} />
            </Style.Info>
          </Style.Item>
        );
      })}
      <Footer />
    </Style.Container>
  );
}

export default LandingPage;
