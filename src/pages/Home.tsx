import About from "../ui/About";
import Contact from "../ui/Contact";
import Curriculum from "../ui/Curriculum";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import Pricing from "../ui/Pricing";

const Home = () => {
	return (
		<div className="relative flex min-h-screen flex-col overflow-x-hidden">
			<Header />
			<main className="flex-1">
				<Hero />
				<Curriculum />
				<Pricing />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
