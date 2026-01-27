import { MdOutlineTaskAlt } from "react-icons/md";
import { Link } from "react-scroll";

interface Feature {
	id: number;
	label: string;
}

const features: Feature[] = [
	{
		id: 1,
		label: "Weekly 60-minute sessions",
	},
	{
		id: 2,
		label: "Personalized progress reports",
	},
	{
		id: 3,
		label: "Past exam paper practice",
	},
	{
		id: 4,
		label: "Small group or one-on-one focus",
	},
];

const Pricing = () => {
	return (
		<section className="py-20" id="pricing">
			<div className="mx-auto max-w-300 px-6">
				<div className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-white dark:bg-slate-900 p-8 md:p-12 shadow-2xl shadow-primary/5">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Monthly Tuition</h2>
							<p className="text-slate-500">
								Expert guidance for Grades 9, 10, and 11.
							</p>
							<div className="flex items-baseline gap-2">
								<span className="text-5xl font-black text-primary">R250</span>
								<span className="text-lg font-medium text-slate-500">
									/ per subject / month
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4 min-w-70">
							{features.map((feature) => {
								return (
									<div
										key={feature.id}
										className="flex items-center gap-3 text-sm font-medium"
									>
										<span className="material-symbols-outlined text-primary">
											<MdOutlineTaskAlt />
										</span>
										{feature.label}
									</div>
								);
							})}
							<Link
								to="contact"
								smooth={true}
								duration={500}
								className="mt-4 w-full text-center rounded-xl bg-primary py-4 font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
							>
								Enroll Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
