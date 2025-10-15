"use client";

import {
	IconBell,
	IconDots,
	IconGlobe,
	IconMenu,
	IconSearch,
	IconStar,
	IconSun,
} from "@/app/components/icons";
import { useSidebarStore } from "@/store/sidebarStore";

type NavbarProps = {
	sectionLabel: string;
	pageLabel: string;
};

const Avatar = () => (
	<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C1F2E] text-sm font-semibold text-white">
		BW
	</div>
);

const Navbar = ({ sectionLabel, pageLabel }: NavbarProps) => {
	const toggleSidebar = useSidebarStore((state) => state.toggle);

	return (
		<header className="flex h-20 items-center justify-between border-b border-[#E5EAF3] bg-white px-8">
			<div className="flex items-center gap-4">
				<button
					type="button"
					onClick={toggleSidebar}
					className="grid h-11 w-11 place-items-center rounded-xl border border-[#E5EAF3] text-[#1C1F2E] transition hover:bg-[#F2F5FB]"
				>
					<span className="sr-only">Toggle sidebar</span>
					<IconMenu />
				</button>
				<div className="flex items-center gap-3 text-sm text-slate-500">
					<IconStar />
					<span className="font-medium text-[#1C1F2E]">{sectionLabel}</span>
					<span className="text-[#C7CEDB]">/</span>
					<span className="text-[#1C1F2E]">{pageLabel}</span>
				</div>
			</div>

			<div className="flex items-center gap-5">
				<div className="relative">
					<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
						<IconSearch />
					</span>
					<input
						type="search"
						placeholder="Search"
						className="h-11 w-64 rounded-xl border border-[#E5EAF3] bg-[#F8FAFF] pl-10 pr-4 text-sm text-[#1C1F2E] outline-none transition focus:border-[#1C1F2E]"
					/>
				</div>
				<button className="grid h-11 w-11 place-items-center rounded-xl border border-[#E5EAF3] bg-white text-[#1C1F2E] hover:bg-[#F2F5FB]">
					<IconGlobe />
				</button>
				<button className="grid h-11 w-11 place-items-center rounded-xl border border-[#E5EAF3] bg-white text-[#1C1F2E] hover:bg-[#F2F5FB]">
					<IconSun />
				</button>
				<button className="grid h-11 w-11 place-items-center rounded-xl border border-[#E5EAF3] bg-white text-[#1C1F2E] hover:bg-[#F2F5FB]">
					<IconBell />
				</button>
				<button className="grid h-11 w-11 place-items-center rounded-xl border border-[#E5EAF3] bg-white text-[#1C1F2E] hover:bg-[#F2F5FB]">
					<IconDots />
				</button>
				<Avatar />
			</div>
		</header>
	);
};

export default Navbar;
