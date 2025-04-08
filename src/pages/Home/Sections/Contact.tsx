import { Button, Card, ConfigProvider, Flex, Form, Input } from 'antd';
import { BACKGROUND, PRIMARY } from '../../../constants';
import Title from 'antd/es/typography/Title';

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

const Contact = () => {
    return (<>
        <Flex justify="center">
            <Title id="resume" style={{ marginTop: "5%", }} >Contact Me</Title>
        </Flex>
        <ConfigProvider
            theme={{
                components: {
                    Form: {
                        labelColor: BACKGROUND
                    },
                },
            token: {
                colorText: BACKGROUND,
                colorBgBase: PRIMARY,
                colorPrimary: BACKGROUND,
            },
            }}
        > 
            <Flex id="contact" style={{ marginBottom: "5%" }} justify="center" align="center">
                <Card>
                    <Form
                        name="nest-messages"
                        layout="vertical"
                        onFinish={onFinish}
                        style={{ minWidth: 600 }}
                        validateMessages={validateMessages}
                    >   
                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]} required={false}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]} required={false}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'message']} rules={[{ required: true }]} label="Message" required={false}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item label={null}>
                            <Button type="primary" disabled htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Flex>
        </ConfigProvider>
    </>);
};
export default Contact;