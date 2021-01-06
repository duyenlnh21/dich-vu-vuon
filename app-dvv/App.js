import React from "react";
import { Text } from "native-base";
import Container from "./Container";

export default function App({ navigation }) {
  return (
    <Container title="Tiêu đề trang">
      <Text>Nội dung trang </Text>
    </Container>
  );
}