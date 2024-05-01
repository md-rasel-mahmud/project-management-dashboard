import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/Toast";
import DashboardLayout from "@/components/DashboardLayout";
import { sidebarMenuItems } from "./data/sidebarMenuItems";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Management App",
  description: "A project management app with task management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <DashboardLayout sidebarMenuItems={sidebarMenuItems}>
            <ToastProvider>{children}</ToastProvider>
          </DashboardLayout>
        </main>
      </body>
    </html>
  );
}
