import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<MaintenanceBanner.tsx />
			<Home />
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerStyle={{
					fontFamily: "sans-serif",
					fontSize: "16px",
				}}
				toasterId="default"
				toastOptions={{
					success: { duration: 5000 },
					error: { duration: 5000 },
				}}
			/>
		</>
	);
};

export default App;
