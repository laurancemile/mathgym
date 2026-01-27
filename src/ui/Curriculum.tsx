import type { ReactNode } from "react";
import {
	MdOutlineCalculate,
	MdOutlineCheckCircle,
	MdScience,
	MdSuperscript,
} from "react-icons/md";

interface Grade {
	id: number;
	icon: ReactNode;
	title: string;
	overview: string;
	curriculum: string[];
}

const grades: Grade[] = [
	{
		id: 1,
		icon: <MdOutlineCalculate />,
		title: "Grade 9",
		overview:
			"Strengthening foundational knowledge in algebra, geometry, and introductory physics while preparing students for high school academic expectations.",
		curriculum: [
			"Algebra Foundations",
			"Energy and Matter",
			"Geometric Principles",
		],
	},
	{
		id: 2,
		icon: <MdScience />,
		title: "Grade 10",
		overview:
			"Strengthening foundational knowledge in algebra, geometry, and introductory physics while preparing students for high school academic expectations.",
		curriculum: [
			"Trigonometry and Functions",
			"Chemical Bonding",
			"Mechanics and Waves",
		],
	},
	{
		id: 3,
		icon: <MdSuperscript />,
		title: "Grade 11",
		overview:
			"Deepening complexity in Mathematics and Physics to prepare for final year challenges and university entrance.",
		curriculum: [
			"Advanced Calculus and Stats",
			"Newton's Laws and Electromagnetism",
			"Quantitative Chemistry",
		],
	},
];

const Curriculum = () => {
	return (
		<section className="bg-white dark:bg-slate-900/50 py-20" id="curriculum">
			<div className="mx-auto max-w-300 px-6">
				<div className="mb-12 flex flex-col gap-4 text-center items-center">
					<h2 className="text-3xl font-bold md:text-4xl tracking-tight">
						Tailored Curriculum Support
					</h2>
					<p className="text-slate-600 dark:text-slate-400 max-w-2xl">
						We focus on the critical transition years from Grade 9 until Grade
						11, ensuring students master the core principles required for senior
						phase academic excellence.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{grades.map((grade) => {
						return (
							<div
								key={grade.id}
								className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:border-primary/50 transition-all duration-300"
							>
								<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
									<span className="material-symbols-outlined text-3xl">
										{grade.icon}
									</span>
								</div>
								<div className="flex flex-col gap-3">
									<h3 className="text-xl font-bold">{grade.title}</h3>
									<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
										{grade.overview}
									</p>
									<ul className="mt-4 flex flex-col gap-2">
										{grade.curriculum.map((item) => {
											return (
												<li className="flex items-center gap-2 text-sm text-slate-500">
													<span className="material-symbols-outlined text-primary text-lg">
														<MdOutlineCheckCircle />
													</span>{" "}
													{item}
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Curriculum;
