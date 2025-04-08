import { Image, Row, Col, Typography, Flex } from "antd";
const { Title } = Typography;
import { DiJsBadge } from "@react-icons/all-files/di/DiJsBadge";
import { DiNodejsSmall } from "@react-icons/all-files/di/DiNodejsSmall";
import { DiPython } from "@react-icons/all-files/di/DiPython";
import { DiReact } from "@react-icons/all-files/di/DiReact";
import { DiDjango } from "@react-icons/all-files/di/DiDjango";
import { DiJava } from "@react-icons/all-files/di/DiJava";
import { SiSpring } from "@react-icons/all-files/si/SiSpring"
//import LogoButton from "../../../components/LogoButton"

import pic from "../../../assets/headshot.jpg"

const Intro = () => {
    return(<>

      <Flex justify="center" align="center" gap={32} style={{ marginTop: "5%" }}>
        <Image src={pic} style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: '50% 35%' }} preview={false} height={300} width={300}/>
        <Flex justify="flex-start" vertical={true}>
          <Title style={{ marginTop: 0, marginBottom: 0}} >Justin Smith</Title>
          <Title style={{ marginTop: 0, marginBottom: 0}} level={2}>Software Develepor</Title>
        </Flex>
      </Flex>
      <Row style={{marginTop: "1%"}}>
        <Col span={24}>
          <Flex justify="center">
            <Typography>
              <Title style={{ marginTop: 0, marginBottom: 0}} level={2}>Tech I work with...</Title>
            </Typography>
          </Flex>
        </Col>
        <Col span={24}>
          <Flex justify="center">
            <DiJsBadge size={28} />
            <DiReact size={28} />
            <DiNodejsSmall size={28} />
            <DiPython size={28} />
            <DiDjango size={28} />
            <DiJava size={28} />
            <SiSpring size={28} />
            {/* <LogoButton><DiJsBadge/></LogoButton>
            <LogoButton><DiReact /></LogoButton>
            <LogoButton><DiNodejsSmall /></LogoButton>
            <LogoButton><DiPython /></LogoButton>
            <LogoButton><DiDjango /></LogoButton>
            <LogoButton><DiJava /></LogoButton>
            <LogoButton><SiSpring /></LogoButton> */}
          </Flex>
        </Col>
      </Row>
    </>);
  };
  
  export default Intro;
  