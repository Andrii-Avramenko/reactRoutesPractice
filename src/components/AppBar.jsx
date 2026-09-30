import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Box } from "./Box";

import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import { TbReportMoney } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlinePeopleAlt } from "react-icons/md";

const navItems = [
  { href: "dashboard", text: "Dashboard", icon: TbLayoutDashboardFilled },
  { href: "sales", text: "Sales", icon: FcSalesPerformance },
  { href: "reports", text: "Reports", icon: TbReportMoney },
  { href: "feedback", text: "Feedback", icon: VscFeedback },
  { href: "customers", text: "Customers", icon: MdOutlinePeopleAlt },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
  padding: ${(p) => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.text};

  &.active {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const AppBar = () => {
  return (
    <Box as="header" p={4} height="100vh" borderRight="1px solid black">
      <Box as="nav" display="flex" flexDirection="column">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="16" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

export default AppBar