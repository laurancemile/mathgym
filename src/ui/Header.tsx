import { Link } from "react-scroll";
import Logo from "./Logo";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
			<div className="mx-auto flex max-w-300 items-center justify-between px-6 py-4">
				<Logo />
				<nav className="hidden md:flex items-center gap-10">
					<Link
						to="about"
						smooth={true}
						duration={500}
						className="text-sm font-medium hover:text-primary transition-colors"
					>
						About
					</Link>
					<Link
						to="curriculum"
						smooth={true}
						duration={500}
						className="text-sm font-medium hover:text-primary transition-colors"
					>
						Curriculum
					</Link>
					<Link
						to="pricing"
						smooth={true}
						duration={500}
						className="text-sm font-medium hover:text-primary transition-colors"
					>
						Pricing
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
					>
						Get Started
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
