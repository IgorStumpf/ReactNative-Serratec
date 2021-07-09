import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../Global/styles/theme";
import { BaseButton } from "react-native-gesture-handler";

export const AddButton = () => {
	return (
		<BaseButton style={styles.add}>
			<Entypo name="plus" size={27} color={COLORS.ELEMENT_COLOR} />
		</BaseButton>
	);
};
