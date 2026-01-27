import { MdOutlineMail, MdOutlineMyLocation } from "react-icons/md";

const Contact = () => {
	return (
		<section className="py-24" id="contact">
			<div className="mx-auto max-w-300 px-6">
				<div className="grid gap-16 lg:grid-cols-2">
					<div className="flex flex-col gap-8">
						<div>
							<h2 className="text-4xl font-bold tracking-tight">
								Get in touch
							</h2>
							<p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
								Have questions about the Grade 9-11 curriculum or scheduling?
								Send me a message and I'll get back to you within 24 hours
							</p>
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
									<span className="material-symbols-outlined">
										<MdOutlineMail />
									</span>
								</div>
								<span className="font-medium">Laurancemile@gmail.com</span>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
									<span className="material-symbols-outlined">
										<MdOutlineMyLocation />
									</span>
								</div>
								<span
									className="font-medium"
									data-location="Cape Town, South Africa"
								>
									263 Kgang Street (Online &amp; In-person)
								</span>
							</div>
						</div>
					</div>
					<div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
						<form className="flex flex-col gap-5">
							<div className="grid gap-5 sm:grid-cols-2">
								<div className="flex flex-col gap-2">
									<label className="text-sm font-semibold">Name</label>
									<input
										className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
										placeholder="John Doe"
										type="text"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label className="text-sm font-semibold">Email</label>
									<input
										className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
										placeholder="john@example.com"
										type="email"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-sm font-semibold">Grade</label>
								<select className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800">
									<option>Grade 9</option>
									<option>Grade 10</option>
									<option>Grade 11</option>
									<option>Other</option>
								</select>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-sm font-semibold">Message</label>
								<textarea
									className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
									placeholder="How can I help you?"
									rows={4}
								></textarea>
							</div>
							<button
								className="mt-2 w-full rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95"
								type="submit"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
