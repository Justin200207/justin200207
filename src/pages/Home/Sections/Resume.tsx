import { Button, ConfigProvider, Flex } from "antd"
import { BACKGROUND, PRIMARY, SECONDARY } from "../../../constants"
import Title from "antd/es/typography/Title";

const Resume = () => {

    return(<>
    <Flex justify="center">
        <Title id="resume" style={{ marginTop: "5%"}} >Resume and Cover Letter</Title>
    </Flex>
    <ConfigProvider
        theme={{
            components: {
                Form: {
                    labelColor: BACKGROUND
                },
                Button: {
                    defaultActiveColor: SECONDARY,
                    defaultHoverColor: SECONDARY,
                }
              },
          token: {
            colorBgBase: PRIMARY,
            colorText: BACKGROUND,
            colorPrimary: BACKGROUND,
          },
        }}
    >
        <Flex style={{ marginTop: "1%" }} justify="center" align="center" gap={32}>
            <Button><a href="/assets/Justin_Smith_Resume.pdf" target="_blank"><h1>View Resume</h1></a></Button>
            <Button><a href="/assets/COVER_LETTER.pdf" target="_blank"><h1>View Cover Letter</h1></a></Button>
        </Flex>
    </ConfigProvider>
    </>);
};
export default Resume;