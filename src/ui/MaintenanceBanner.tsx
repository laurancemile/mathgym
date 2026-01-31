const MaintenanceBanner = () => {
	return (
		<div
			role="status"
			aria-live="polite"
			style={{
				width: "100%",
				backgroundColor: "#FFF4E5",
				color: "#663C00",
				padding: "8px 16px",
				fontSize: "14px",
				textAlign: "center",
				borderBottom: "1px solid #FFD8A8",
				position: "sticky",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 9999,
			}}
		>
			🔧 <strong>Maintenance in Progress</strong> — Updates are currently being
			applied.
		</div>
	);
};

export default MaintenanceBanner;
