const About = () => {
	return (
		<section className="bg-slate-50 dark:bg-background-dark py-20" id="about">
			<div className="mx-auto max-w-300 px-6">
				<div className="grid gap-12 md:grid-cols-[1fr_2fr] items-center">
					<div
						className="aspect-4/5 w-full rounded-3xl overflow-hidden bg-slate-300"
						data-alt="Close up of a friendly tutor smiling"
						style={{
							backgroundImage:
								"url('/images/cartoon.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div className="flex flex-col gap-6">
						<h2 className="text-3xl font-bold tracking-tight">About Me</h2>
						<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
							With over 5 years of experience specialized in STEM subjects, I've
							helped many students from Grade 9 to Grade 11 overcome their fear
							of numbers and equations. My approach is simple: simplify the
							abstract, build logic from first principles, and practice until it
							becomes second nature.
						</p>
						<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
							I believe every student has a 'Science brain'—they just need the
							right key to unlock it. My sessions are interactive, patient, and
							results-driven for all high school phases.
						</p>
						<div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-3">
							<div className="flex flex-col gap-1">
								<span className="text-2xl font-bold text-primary">5+</span>
								<span className="text-xs font-medium uppercase tracking-wider text-slate-500">
									Years Exp
								</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-2xl font-bold text-primary">40+</span>
								<span className="text-xs font-medium uppercase tracking-wider text-slate-500">
									Students
								</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-2xl font-bold text-primary">MBChB</span>
								<span className="text-xs font-medium uppercase tracking-wider text-slate-500">
									Qualified
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
