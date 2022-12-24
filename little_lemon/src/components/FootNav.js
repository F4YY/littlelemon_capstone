// import React from "react";
// import {Box, Flex} from "@chakra-ui/react";

// const FootNav = () => {
//   return (
//     <Box backgroundColor="#18181b">
//       <FootNav>
//         <Flex
//           margin="0 auto"
//           px={12}
//           color="black"
//           justifyContent="center"
//           alignItems="center"
//           maxWidth="1024px"
//           height={16}
//         >
//           <p>Riki • © 2022</p>
//         </Flex>
//       </FootNav>
//     </Box>
//   );
// };
// export default FootNav;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// function OffsettingExample() {
//   return (
//     <Container>
//       <Row>
//         <Col md={4}>md=4</Col>
//         <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
//       </Row>
//       <Row>
//         <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
//         <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
//       </Row>
//       <Row>
//         <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
//       </Row>
//     </Container>
//   );
// }

// export default OffsettingExample;

// function AutoLayoutExample() {
//   return (
//     <Container backgroung-color='yellow' color='red'>
//       <Row>
//         <Col>1 of 2</Col>
//         <Col>2 of 2</Col>
//       </Row>
//       <Row>
//         <Col>1 of 3</Col>
//         <Col>2 of 3</Col>
//         <Col>3 of 3</Col>
//       </Row>
//     </Container>
//   );
// }

// export default AutoLayoutExample;

// function ResponsiveAutoExample() {
//   return (
//     <Container background-color='red'>
//       <Row>
//         <Col sm={4} color='red'>i am software engineer</Col>
//         <Col sm={4}>sm=4</Col>
//       </Row>
//       <Row>
//         <Col sm>sm=true</Col>
//         <Col sm>sm=true</Col>
//         <Col sm>sm=true</Col>
//       </Row>
//     </Container>
//   );
// }

// export default ResponsiveAutoExample;

import Stack from 'react-bootstrap/Stack';

function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
  );
}

export default HorizontalExample;

// import Button from 'react-bootstrap/Button';

// function ButtonsExample() {
//   return (
//     <Stack gap={2} className="col-md-4 mx-auto">
//       <Button variant="secondary">Save changes</Button>
//       <Button variant="outline-secondary">Cancel</Button>
//     </Stack>
//   );
// }

// export default ButtonsExample;