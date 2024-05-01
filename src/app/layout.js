import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/app/providers/Toast";
import DashboardLayout from "@/components/DashboardLayout";
import { sidebarMenuItems } from "./data/sidebarMenuItems";
import ReactQueryProvider from "./providers/ReactQueryProvider";

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
            <ToastProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </ToastProvider>
          </DashboardLayout>
        </main>
      </body>
    </html>
  );
}
