import { MdEmail, MdOutlineDarkMode } from "react-icons/md";
import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12">
			<div className="mx-auto max-w-300 px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<Logo />
					<p className="text-sm text-slate-500">
						&copy; {new Date().getFullYear()} MathGym. Empowering Grades 9 to
						11.
					</p>
					<div className="flex gap-6">
						<a
							className="text-slate-400 hover:text-primary transition-colors"
							href="#"
						>
							<span className="material-symbols-outlined">
								<MdOutlineDarkMode />
							</span>
						</a>
						<a
							className="text-slate-400 hover:text-primary transition-colors"
							href="#"
						>
							<span className="material-symbols-outlined">
								<MdEmail />
							</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
