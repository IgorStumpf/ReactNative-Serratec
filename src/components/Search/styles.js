import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingTop: "15%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "20%",
		elevation: 30,
	},
	searchButton: {
		width: "88%",
		height: 70,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 25 },
		shadowOpacity: 0.07,
		shadowRadius: 10,
		borderRadius: 20,
		elevation: 26,
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 45,
		color: "#D1D1D1",
		fontSize: 17,
	},
	svg: {
		left: 35,
		elevation: 30,
	},
});
