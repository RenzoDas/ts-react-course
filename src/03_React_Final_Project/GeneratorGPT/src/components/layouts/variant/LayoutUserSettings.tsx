import { Sidebar } from "@components/organisms/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"

export const LayoutUserSettings = () => {
  return (
    <div className="layout-main">
      <div className="sidebar">
        <Sidebar variant="SidebarUserSettings" />
      </div>
      <div className="navbar">
        <>Navbar</>
      </div>
      <div className="outlet p-12 bg-neutral-50">
        <Outlet />
      </div>
    </div>
  )
}
