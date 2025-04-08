import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from './Header';
import { PRIMARY, SECONDARY, BACKGROUND } from "../constants";

const themeOverrides = {
    token: {
        colorText: PRIMARY,
    },
    components: {
        Layout: {
            headerBg: BACKGROUND,
            bodyBg: BACKGROUND,
            footerBg: BACKGROUND
        },
        Menu: {
            itemBg: BACKGROUND,
            horizontalItemSelectedColor: SECONDARY,
            itemHoverColor: SECONDARY,
        },
    },
};

const MainLayout = () => (
    <>
    <style>
      </style>
    <ConfigProvider theme={themeOverrides}>
        <Layout style={{ minHeight: '100vh' }}>
            <Layout.Header >
                <Header />
            </Layout.Header>
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    </ConfigProvider>
    </>
)

export default MainLayout