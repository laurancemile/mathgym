import { MdOutlineScience } from "react-icons/md";

const Logo = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
				<span className="material-symbols-outlined">
					<MdOutlineScience />
				</span>
			</div>
			<h2 className="text-xl font-bold tracking-tight">MathGym</h2>
		</div>
	);
};

export default Logo;
