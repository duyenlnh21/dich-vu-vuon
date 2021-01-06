import React from "react";
import { Text } from "native-base";
import Container from "./Container";

export default function Settings({ navigation }) {
  return (
    <Container navigation={navigation}>
      <Text>Nội dung của Settings</Text>
    </Container>
  );
}