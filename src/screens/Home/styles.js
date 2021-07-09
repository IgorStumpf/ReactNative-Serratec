import { StyleSheet } from "react-native";
import { COLORS } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: COLORS.backgroundColor,
		position: "absolute",
		width: "100%",
		height: "100%",
		alignItems: "center",
	},
	listContainer: {
		paddingBottom: 20,
		top: 0,
		height: "100%",
		marginTop: 0,
		padding: 50,
	},
});
