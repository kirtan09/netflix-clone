import React from "react";
import * as Style from "./FooterStyle";

function Footer() {
  return (
    <Style.Container>
      <Style.Title>Questions? Contact us.</Style.Title>
      <Style.Break />
      <Style.Row>
        <Style.Column>
          <Style.Link href="#">FAQ</Style.Link>
          <Style.Link href="#">Investor Relations</Style.Link>
          <Style.Link href="#">Ways to watch</Style.Link>
          <Style.Link href="#">Corporate Information</Style.Link>
          <Style.Link href="#">Netflix Originals</Style.Link>
        </Style.Column>
        <Style.Column>
          <Style.Link href="#">Help Center</Style.Link>
          <Style.Link href="#">Jobs</Style.Link>
          <Style.Link href="#">Terms of Use</Style.Link>
          <Style.Link href="#">Contact Us</Style.Link>
        </Style.Column>
        <Style.Column>
          <Style.Link href="#">Account</Style.Link>
          <Style.Link href="#">Redeem Gift Cards</Style.Link>
          <Style.Link href="#">Privacy</Style.Link>
          <Style.Link href="#">Speed Test</Style.Link>
        </Style.Column>
        <Style.Column>
          <Style.Link href="#">Media Center</Style.Link>
          <Style.Link href="#">Buy Gift Cards</Style.Link>
          <Style.Link href="#">Cookie Preferences</Style.Link>
          <Style.Link href="#">Legal Notices</Style.Link>
        </Style.Column>
      </Style.Row>
      <Style.Break />
      <Style.Text>Netflix United Kingdom</Style.Text>
    </Style.Container>
  );
}

export default Footer;
