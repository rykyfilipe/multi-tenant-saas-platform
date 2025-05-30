import React from "react";
import Navbar from "@/app/(home)/navbar";

interface Props {
	children: React.ReactNode;
}

function Layout({children}: Props) {
	return (
		<div className="flex flex-col min-h-screen ">
			<Navbar/>
			{children}
		</div>
	)
}

export default Layout
