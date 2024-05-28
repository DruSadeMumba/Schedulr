import React, { createContext, useContext, useState } from "react";
import { LogOut, MoreVertical, PanelLeftOpen, PanelRightOpen } from 'lucide-react';
import { css } from "aphrodite";
import logo from '../Assets/logo.png';
import { sidebarStyles } from '../styles/sidebarStyles';

const SidebarContext = createContext(undefined);

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className={css(sidebarStyles.hScreen)}>
      <nav className={css(sidebarStyles.nav)}>
        <div className={css(sidebarStyles.header)}>
          <div className={css(expanded ? sidebarStyles.logoExpanded : sidebarStyles.logoCollapsed)}>
            <img src={logo} alt="" width="100px" />
          </div>
          <button onClick={() => setExpanded((curr) => !curr)} className={css(sidebarStyles.toggleButton)}>
            {expanded ? <PanelRightOpen /> : <PanelLeftOpen />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className={css(sidebarStyles.menu)}>{children}</ul>
        </SidebarContext.Provider>
        <div className={css(sidebarStyles.footer)}>
          <img src="https://ui-avatars.com/api/?background=ffffff&color=986D8E&bold=true" alt=""
               className={css(sidebarStyles.avatar)} width="40px" height="40px" />
          <div
            className={css(expanded ? sidebarStyles.userInfoExpanded : sidebarStyles.userInfoCollapsed)}>
            <div className={css(sidebarStyles.userDetails)}>
              <h4 className={css(sidebarStyles.userName)}>John Doe</h4>
              <span className={css(sidebarStyles.userEmail)}>johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
        <h6 className={css(sidebarStyles.userLogout)}> <LogOut /> LOGOUT</h6>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li className={css(sidebarStyles.menuItem, active ? sidebarStyles.menuItemActive : sidebarStyles.menuItemInactive)}>
      {icon}
      <span className={css(expanded ? sidebarStyles.menuTextExpanded : sidebarStyles.menuTextCollapsed)}>{text}</span>
      {alert && <div className={css(sidebarStyles.alert, expanded ? '' : sidebarStyles.alertCollapsed)} />}
      {!expanded && (
        <div className={css(sidebarStyles.tooltip)}>
          {text}
        </div>
      )}
    </li>
  );
}