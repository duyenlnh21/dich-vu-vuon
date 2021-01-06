import React from "react";
import { Card, CardItem, Body, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from "./Container";

export default function App() {
  return (
    <Container title="Trồng lạc vụ 1 năm 2021">
      <Grid>
        <Row>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Ủ hạt</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Gieo hạt</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Trồng cây</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Cắt tỉa </Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Thu hoạch</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Chế biến</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}