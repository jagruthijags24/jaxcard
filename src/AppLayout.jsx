import { Outlet } from "react-router-dom"
import AIChatbot from "./components/AIChatbot"

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <AIChatbot />
    </>
  )
}
