import { Card, ConfigProvider, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { BACKGROUND, PRIMARY } from '../../../constants';

import antlr from "../../../assets/antlr-logo.png"
import linux from "../../../assets/linux.png"
import djangoreact from "../../../assets/djangoreact.png"

const { Meta } = Card;

const Projects = () => {
    return(<>
    <Flex justify="center">
        <Title id="projects" style={{ marginTop: "5%"}} >Projects</Title>
    </Flex>
    <ConfigProvider
        theme={{
            components: {
                Form: {
                    labelColor: BACKGROUND
                },
              },
          token: {
            colorBgBase: PRIMARY,
            colorText: BACKGROUND,
            colorPrimary: BACKGROUND,
          },
        }}
    >
        <Flex style={{ marginTop: "1%" }} justify="center" align="center" gap={32}>
            <Card
                style={{ width: 240, height: 420 }}
                cover={<img alt="example" src={djangoreact}  style={{ height: "300px", objectFit: "contain" }}/>}
            >
                <Meta title="EasyChef" description="Full-Stack Recipe Sharing Site" />
            </Card>
            <Card
                style={{ width: 240, height: 420 }}
                cover={<img alt="example" src={linux}  style={{ height: "300px", objectFit: "contain" }}/>}
            >
                <Meta title="EXT2 File System" description="Implementation of EXT2" />
            </Card>
            <Card
                style={{ width: 240, height: 420 }}
                cover={<img alt="example" src={antlr}  style={{ height: "300px", objectFit: "contain" }}/>}
            >
                <Meta title="COOL Compiler" description="Compiler for the COOL language" />
            </Card>
        </Flex>
    </ConfigProvider>
    </>);
};
export default Projects;