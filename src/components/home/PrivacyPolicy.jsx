import React from "react";
import CardList from "../shared/CardList";
import { Row, Col } from "react-grid-system";

const PrivacyPolicy = () => {
  return (
    <Row justify="center">
      <Col md={7}>
        <CardList header={true} padding={20}>
          <span className="card-title card-title-center">Privacy Policy</span>
          <span>
            This website uses Google Analytics, a web analytics service provided by Google, Inc. (“Google”). 
            Google Analytics uses “cookies”, which are text files placed on your computer, to help the 
            website analyze how users use the site. The information generated by the cookie about your 
            use of the website (including your IP address) will be transmitted to and stored by Google 
            on servers in the United States. In case of activation of the IP anonymization, Google 
            will truncate/anonymize the last octet of the IP address for Member States of the European 
            Union as well as for other parties to the Agreement on the European Economic Area. 
            Only in exceptional cases, the full IP address is sent to and shortened by Google 
            servers in the USA. On behalf of the website provider Google will use this information
            for the purpose of evaluating your use of the website, compiling reports on website 
            activity for website operators and providing other services relating to website activity 
            and internet usage to the website provider. Google will not associate your IP address 
            with any other data held by Google. You may refuse the use of cookies by selecting the 
            appropriate settings on your browser. However, please note that if you do this, you may
            not be able to use the full functionality of this website. Furthermore you can prevent 
            Google’s collection and use of data (cookies and IP address) by downloading and installing
            the browser plug-in available under https://tools.google.com/dlpage/gaoptout?hl=en-GB.
          </span>
        </CardList>
      </Col>
    </Row>
  )
}

export default PrivacyPolicy;