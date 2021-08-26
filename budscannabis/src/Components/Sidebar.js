import React from 'react';


import {

  CDBSidebar,

  CDBSidebarContent,

  CDBSidebarFooter,

  CDBSidebarHeader,

  CDBSidebarMenu,

  CDBSidebarMenuItem,

} from 'cdbreact';

import { NavLink } from 'react-router-dom';

 

const Sidebar = () => {

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                BudsCannabis
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact to="/Home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/Products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/Locations" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Locations</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/About" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">About Us</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/AccountManagement"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Account Management</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper"style={{ padding: '20px 5px',}}>
            Sidebar Footer COPYRIGHT SHIT
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    );
};

 

export default Sidebar;