import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  server: require("./server.jpeg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

preloader([images.server]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Servers?
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            We don't need no stinking servers!
          </Heading>
          <Heading size={2} fit caps textColor="black">
            Using node.js to build a new kind of web stack
          </Heading>
          <Link href="https://github.com/jaegerpicker/servers_we_dont_need_any_servers/">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="">
          <Image src={images.server.replace('/','')} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary">
            Javascript! JAVASCRIPT!!! EVERYWHERE!
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading>
            Ok, But Why?
          </Heading>
          <List>
            <ListItem><Appear fid="1">Node.js is a huge language ecosystem to tap into.</Appear></ListItem>
            <ListItem><Appear fid="2">PaaS based deployments are low risk and high reward.</Appear></ListItem>
            <ListItem><Appear fid="3">Reduce the required complexity, cost, and dependencies vs a tranditional web stack.</Appear></ListItem>
            <ListItem><Appear fid="4">Scaling to meet your demand is no longer a concern</Appear></ListItem>
            <ListItem><Appear fid="5">this application pattern promotes good programming practices</Appear></ListItem>
            <ListItem><Appear fid="6">And... IT'S AWESOME FUN to code for!</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={2} textColor="tertiary">
            I don't believe you, How does it do all those things?
          </Heading>
          <Appear fid="2">
            <Heading size={4} cap fit textColor="secondary">
              You use AWS API, a service that you can define a rest API declaritively to generate and connect to code written in...
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={4} cap fit textColor="secondary">
              AWS Lambda, a service that you create a single function (JS or Java) that runs in response to an event be it a rest call or other event source
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={4} cap fit textColor="secondary">
              Storing data for quick retrieval and access in DynamoDB, a NoSql Document DB
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textFont="tertiary" textColor="primary">
            So you have all of these AWS Managed services, that are cheap, incrediblly relieable, and unbelievablly scalable used in one stack. All using standard node.js
            to power it.
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Let's dig into the techincal details a little more on each of those four core pieces.
          </Heading>
        </Slide>
        <Slide transition={['fade', 'slide']} bgColor="secondary">
          <BlockQuote size={3}>
            <Quote>
              Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
            </Quote>
            <Cite>
              https://aws.amazon.com/api-gateway/
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade', 'slide']} bgColor="primary">
          <List>
            <ListItem><Appear fid={1}>Integrates with AWS iam and Cognito for security and identity services</Appear></ListItem>
            <ListItem><Appear fid={2}>Uses REST API best practices as defined by the popular open source libraries in the swagger project</Appear></ListItem>
            <ListItem><Appear fid={3}>Defines API routes, parameters expected, and resources or models returned to the caller but that is it</Appear></ListItem>
            <ListItem><Appear fid={4}>End Points can be easily mapped to Lambda functions or to rely to other REST Endpoints</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade', 'slide']} bgColor="secondary">
          <CodePane
            lang="javascript"
            source={require("raw!./swagger.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['fade', 'slide']} bgColor="primary">
          <BlockQuote>
            <Quote textColor="secondary">
              AWS Lambda is a compute service that runs your code in response to events and automatically manages the compute resources for you
            </Quote>
            <Cite>
              https://aws.amazon.com/lambda/
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="secondary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Quote textColor="secondary">
            Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale.
          </Quote>
          <Cite>
            https://aws.amazon.com/dynamodb/
          </Cite>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="secondary">
          <Heading size={3} textColor="primary" textFont="primary">
            Using node.js to tie is all together.
          </Heading>
          <List>
            <ListItem><Appear fid={1}>Swagger-node to generate the api defined in Json/Yaml</Appear></ListItem>
            <ListItem><Appear fid={2}>Standard npm modules as the lambda functions</Appear></ListItem>
            <ListItem><Appear fid={3}>dynamodb-doc npm module to communicate with dynamoDB</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
