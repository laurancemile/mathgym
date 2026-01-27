import { MdOutlineVerified } from "react-icons/md";
import { Element, Link } from "react-scroll";

const Hero = () => {
	return (
		<Element name="hero">
			<section className="mx-auto max-w-300 px-6 py-16 md:py-24">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-4">
							<span className="w-fit rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
								Expert Tutoring for Grades 9 - 11
							</span>
							<h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
								Master Mathematics &amp; Physical Science
							</h1>
							<p className="text-lg text-slate-600 dark:text-slate-400 max-w-125">
								Personalized private tutoring sessions designed to build a solid
								foundation and boost confidence from Grade 9 through Grade 11.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								to="contact"
								smooth={true}
								duration={500}
								className="flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95"
							>
								Book a Free Intro
							</Link>
							<Link
								to="pricing"
								smooth={true}
								duration={500}
								className="flex h-14 items-center justify-center rounded-xl border-2 border-primary/20 bg-transparent px-8 text-base font-bold text-primary hover:bg-primary/5 transition-colors"
							>
								View Pricing
							</Link>
						</div>
					</div>
					<div className="relative">
						<div
							className="aspect-square w-full overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800"
							data-alt="Professional tutor working with a student in a bright office"
							style={{
								backgroundImage:
									"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYfad-tO5OjPhoqWB0JGn9naK9hKFJm71Jtnl5NL8OLicGUh9pPGvKPHfFkNmFimuZNQMoKn4diIp0MaKTdBnmRuSH06OGrtTyKVGcGvP7bqfupWwDFTIZvUyhwQ3ZcI6lBN8mEPK5Ajm7TEflOiAo4p-SiYE1ulpmdik_T1FjdedAalUC9umcYXN9FfOFJyf5zgLQxMJIIVmhnxV2R61etu2Z-OWw3bZnab_FJKiGUYR9FuTw6GY9FOS1Dvg_FWc0xtGW6ps8DC8')",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						></div>
						<div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl border border-slate-100 dark:border-slate-800">
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
									<span className="material-symbols-outlined">
										<MdOutlineVerified />
									</span>
								</div>
								<div>
									<p className="text-sm font-bold">100% Success Rate</p>
									<p className="text-xs text-slate-500">Grade 9-11 focus</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
};

export default Hero;
