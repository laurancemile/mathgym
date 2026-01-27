import { MdOutlineMail, MdOutlineMyLocation } from "react-icons/md";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type Inputs = {
	name: string;
	email: string;
	grade: string;
	message: string;
};

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				{ ...data },
				{
					publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
				},
			);
			toast.success(`Message Sent`);
		} catch (error) {
			toast.success(`Error: ${error}`);
		}
	};

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
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col gap-5"
						>
							<div className="grid gap-5 sm:grid-cols-2">
								<div className="flex flex-col gap-2">
									<label className="text-sm font-semibold">Name</label>
									<input
										{...register("name", {
											required: "Name is required",
											minLength: {
												value: 3,
												message: "Name should be at least 3 characters",
											},
										})}
										className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
										placeholder="John Doe"
										type="text"
									/>
									{errors.name?.message && (
										<p className="text-red-200 p-2">{errors.name.message}</p>
									)}
								</div>
								<div className="flex flex-col gap-2">
									<label className="text-sm font-semibold">Email</label>
									<input
										{...register("email", {
											required: "Email is required",
											pattern: {
												value:
													/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
												message: "Invalid email format",
											},
										})}
										className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
										placeholder="john@example.com"
										type="email"
									/>
									{errors.email?.message && (
										<p className="text-red-200 p-2">{errors.email.message}</p>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-sm font-semibold">Grade</label>
								<select
									{...register("grade")}
									className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
								>
									<option>Grade 9</option>
									<option>Grade 10</option>
									<option>Grade 11</option>
									<option>Other</option>
								</select>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-sm font-semibold">Message</label>
								<textarea
									{...register("message", {
										required: "Message is required",
										minLength: {
											value: 3,
											message: "Message should be at least 3 characters",
										},
									})}
									className="rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
									placeholder="How can I help you?"
									rows={4}
								></textarea>
								{errors.message?.message && (
									<p className="text-red-200 p-2">{errors.message.message}</p>
								)}
							</div>

							<button
								disabled={isSubmitting}
								className="buttonload mt-2 w-full rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95"
								type="submit"
							>
								{isSubmitting ? (
									<>
										<i className="fa fa-spinner fa-spin"></i>Sending
									</>
								) : (
									"Send Message"
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
