import React from "react";
import { COLORS, FONT } from "../../Global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingBottom: 20,
		top: 0,
		height: "100%",
		marginTop: 0,
		padding: 20,
	},
	textContainer: {
		height: 70,
		width: "100%",
		backgroundColor: "#FFFFFF",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 25 },
		shadowOpacity: 0.07,
		shadowRadius: 5,
		elevation: 26,
		borderRadius: 20,
		justifyContent: "center",
		marginBottom: 12,
	},
	inside: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginRight: 20,
		backgroundColor: "#fff",
	},
	iconContainer: {
		flexDirection: "row",
	},
	icon: {
		marginLeft: 15,
	},
	textInside: {
		marginLeft: 15,
		color: COLORS.ELEMENT_COLOR,
		fontFamily: FONT.TEXT_500,
		fontSize: 14,
	},
});
