import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  CheckBox,
  ListItem,
  Body
} from "native-base";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text> Button Theme - 7 </Text>
          <Button light>
            <Text> Light </Text>
          </Button>
          <Button primary>
            <Text> Primary </Text>
          </Button>
          <Text> Button Transparent </Text>
          <Button transparent light>
            <Text>Light</Text>
          </Button>
          <Button transparent>
            <Text>Primary</Text>
          </Button>
          <Text> Button Outline </Text>
          <Button bordered light>
            <Text>Light</Text>
          </Button>
          <Button bordered>
            <Text>Primary</Text>
          </Button>
          <Text> Button Rounded </Text>
          <Button rounded light>
            <Text>Light</Text>
          </Button>
          <Button rounded>
            <Text>Primary</Text>
          </Button>
          <Text> Block Button </Text>
          <Button block light width={"75%"}>
            <Text>Light</Text>
          </Button>
          <Button block>
            <Text>Primary</Text>
          </Button>
          <Text> Full Button </Text>
          <Button full light>
            <Text>Light</Text>
          </Button>
          <Button full>
            <Text>Primary</Text>
          </Button>
          <Text> Icon Button </Text>
          <Button iconLeft light>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
          <Button iconRight light>
            <Text>Next</Text>
            <Icon name="arrow-forward" />
          </Button>
          <Button iconLeft>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button iconLeft transparent primary>
            <Icon name="beer" />
            <Text>Pub</Text>
          </Button>
          <Button iconLeft dark>
            <Icon name="cog" />
            <Text>Settings</Text>
          </Button>
          <Text>Button size</Text>
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
          <Button success>
            <Text>Success Default</Text>
          </Button>
          <Button large dark>
            <Text>Dark Large</Text>
          </Button>
          <Text>Button disabled</Text>
          <Button disabled large>
            <Text>Custom</Text>
          </Button>
          <Button disabled iconRight>
            <Text>Icon Button</Text>
            <Icon name="home" />
          </Button>
          <Text>CheckBox</Text>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green" />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
