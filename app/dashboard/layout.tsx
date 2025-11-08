import { ReactNode } from "react";
import DashboardTopNav from "./_components/navbar";
import DashboardSideBar from "./_components/sidebar";
// import Chatbot from "./_components/chatbot";
import "./dashboard.scss";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="dashboard-layout-wrapper">
      <DashboardSideBar />
      <DashboardTopNav>{children}</DashboardTopNav>
      {/* <Chatbot /> */}
    </div>
  );
}
