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
            <ListItem><Appear fid="1">Node.js is a huge language ecosystem to tap into</Appear></ListItem>
            <ListItem><Appear fid="2">PaaS based deployments are low risk and high reward</Appear></ListItem>
            <ListItem><Appear fid="3">Reduce the required complexity, cost, and dependencies vs a traditional web stack</Appear></ListItem>
            <ListItem><Appear fid="4">Scaling to meet your demand is no longer a concern</Appear></ListItem>
            <ListItem><Appear fid="5">This application pattern promotes good programming practices</Appear></ListItem>
            <ListItem><Appear fid="6">And... IT'S AWESOME FUN to code in!</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            I don't believe you, how does it do all those things?
          </Heading>
          <Appear fid="2">
            <Heading size={6} textColor="secondary">
              You use AWS API, a service that you can define a rest API declaritively to generate and connect to code written in...
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={6} textColor="secondary">
              AWS Lambda, a service that you create a single function (JS or Java) that runs in response to an event, be it a rest call or other event source...
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={6} textColor="secondary">
              Storing data for quick retrieval and access in DynamoDB, a NoSql Document DB.
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textFont="tertiary" textColor="primary">
            So you have all of these AWS Managed services that are cheap, incredibly reliable, and unbelievably scalable used in one stack; all using standard node.js
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
            <ListItem><Appear fid={3}>Defines API routes, parameters expected, and resources or models returned to the caller and goes no further</Appear></ListItem>
            <ListItem><Appear fid={4}>End Points can be easily mapped to Lambda functions or to relay to other REST Endpoints</Appear></ListItem>
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
          <List textColor="primary">
            <ListItem><Appear fid={1}>Using Swagger-node to generate the api declaritively in Json/Yaml</Appear></ListItem>
            <ListItem><Appear fid={2}>Standard npm modules are the lambda functions</Appear></ListItem>
            <ListItem><Appear fid={3}>dynamodb-doc npm module to communicate with dynamoDB</Appear></ListItem>
            <ListItem><Appear fid={4}>Open Source and standards based node.js used to build a server-side application with no server to maintain</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={3} textColor="secondary" textFont="primary">
            <Appear fid={1}>
              Great, but using all of these hosted services has to suck for local development, right?
            </Appear>
            <Appear fid={2}>
              No! That's the best part. There is a great local development setup, here's what I suggest...
            </Appear>
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="secondary">
          <List cap fit textFont="primary" textColor="tertiary">
            <ListItem><Appear fid={1}>Use Vagrant to setup a VM</Appear></ListItem>
            <ListItem><Appear fid={2}>Use SaltStack/Puppet/Chef to setup the needed VM services</Appear></ListItem>
            <ListItem><Appear fid={3}>Including DynamoDB Local </Appear></ListItem>
            <ListItem><Appear fid={4}>A swagger-node server to run the AWS API gateway config</Appear></ListItem>
            <ListItem><Appear fid={5}>A collection of npm modules to run the AWS Lambda Code</Appear></ListItem>
            <ListItem><Appear fid={6}>Requires the writing of a ultra light controller method for the lambda functions to be called</Appear></ListItem>
            <ListItem><Appear fid={7}>Setup vm shares to enable local editing for the code</Appear></ListItem>
            <ListItem><Appear fid={8}>Create a docker image to run the node.js front end application</Appear></ListItem>
            <ListItem><Appear fid={8}>Setup vm port forwarding (8000, 3000, 8080, 5858, 5959) for dynamoDB Local, the Swagger-node server, the node.js web appliction, and remote node.js debugging of both apps</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading textColor="secondary" textFont="primary">
            Introducing Horizon, the application pattern designed build AWS Server-less applications
          </Heading>
          <Link href="https://github.com/Horizon-Framework/horizon">
            <Text bold caps textColor="tertiary" textFont="primary">
              Contribute, Follow, and Watch at https://github.com/Horizon-Framework/horizon
            </Text>
          </Link>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="secondary" >
          <List textColor="tertiary" textFont="primary">
            <ListItem>
              <Link href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.html">

                  dynamoDB Tools: http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.html

              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.DynamoDBLocal.Shell.html">

                  dynamoDB JavaScript Shell: http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.DynamoDBLocal.Shell.html

              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://aws.amazon.com/blogs/aws/amazon-dynamodb-libraries-mappers-and-mock-implementations-galore/">

                  dynamoDB Mock/Local implementations: http://aws.amazon.com/blogs/aws/amazon-dynamodb-libraries-mappers-and-mock-implementations-galore/

              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/garnaat/kappa">

                  Kappa, tool to deploy AWS Lambda code: https://github.com/garnaat/kappa

              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://json-schema.org/examples.html">

                  JSON-Schema, structured rest models: http://json-schema.org/examples.html

              </Link>
            </ListItem>

          </List>
        </Slide>
        <Slide bgColor="secondary">
          <List>
          <ListItem>
            <Link href="http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/">

                AWS Sdk for JavaScript: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/

            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/servant-app/JAWS">

                JAWS, another AWS server-less framework: https://github.com/servant-app/JAWS

            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/swagger-api/swagger-node">

                Swagger-Node, how to define your API declaritively: https://github.com/swagger-api/swagger-node

            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/awslabs/aws-apigateway-swagger-importer">

                AWS Api Swagger importer: https://github.com/awslabs/aws-apigateway-swagger-importer

            </Link>
          </ListItem>
        </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary" textFont="primary">
            My name is Shawn Campbell
          </Heading>
          <Link href="mailto:jaegerpicker@gmail.com">
            <Text bold caps textColor="primary">
              Email: Jaegerpicker@gmail.com
            </Text>
          </Link>
          <Link href="https://twitter.com/jaegerpicker">
            <Text bold caps textColor="primary">
              Twitter: @jaegerpicker
            </Text>
          </Link>
          <Link href="https://www.vetsfirstchoice.com">
            <Text bold caps textColor="primary">
              Many thanks to my awesome employer Vet's First Choice! I'm Lead Software
              Engineer there. If you are looking for an amazing place to work, email me
              at scampbell@vetsfirstchoice.com
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
