import { Menu, MenuProps } from "antd";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: "null",
    label: "Justin Smith",
    style:{ pointerEvents: 'none', cursor: 'default' },
  },
  {
    key: 'home',
    style: {marginLeft: 'auto'},
    label: "Home"
    ,
  },
  {
    key: 'projects',
    label: "Projects",
  },
  {
    key: 'resume',
    label: "Resume and Cover Letter",
  },
  {
    key: 'contact',
    label: "Contact",
  },
];

const Header = () => {

  const handleNav = (key: string) => {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Menu
    mode="horizontal"
    style={{ display: 'flex', width: '100%', borderBottom: 'none', boxShadow: 'none'  }}
    selectedKeys={[""]}
    onClick={({ key }) => {
      handleNav(key)
    }}
    items={items}
    />
  )
};

export default Header;