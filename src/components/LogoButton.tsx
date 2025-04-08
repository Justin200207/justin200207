import { Button, ConfigProvider } from 'antd';
import {TRANSPARENT, SECONDARY} from "../constants";

const LogoButton = (props: any) => (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: TRANSPARENT,
            defaultHoverBg: TRANSPARENT,
            defaultBorderColor: TRANSPARENT,
            defaultHoverBorderColor: TRANSPARENT,
            textHoverBg: TRANSPARENT,
            defaultHoverColor: SECONDARY,
            defaultActiveColor: SECONDARY,
            defaultActiveBorderColor: TRANSPARENT,
            defaultActiveBg: TRANSPARENT,
            contentFontSize: 28,
          },
        },
      }}
    >
      <Button
        style={{
        paddingInline: '0',  // Remove horizontal padding
        paddingBlock: '0',   // Remove vertical padding
        height: 'auto',      // Allow height to auto-adjust
        lineHeight: 'normal', // Adjust line height to prevent extra space
      }}{...props} />
    </ConfigProvider>
  );

export default LogoButton