import type { Metadata } from "next";
import { Sidebar } from "../components/sidebar";
import "./globals.css";
import "../components/left-sidebar.css";


export const metadata: Metadata = {
	title: "HSMS",
	description: "Hospital management system shell",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="app-shell">
					<Sidebar />
					<div className="app-content">{children}</div>
				</div>
			</body>
		</html>
	);
}
