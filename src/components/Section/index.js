import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONT } from "../../Global/styles/theme";
import { Feather } from "@expo/vector-icons";

export const Section = ({ nome, id }) => {
	function handleAddClient() {}

	function handleDeleteClient() {}

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<View style={styles.inside}>
					<Text style={styles.textInside}>
						{nome}
						{id}
					</Text>

					<View style={styles.iconContainer}>
						<TouchableOpacity onPress={handleAddClient}>
							<Feather
								style={styles.icon}
								name="edit"
								size={22}
								color={COLORS.ELEMENT_COLOR}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleDeleteClient}>
							<MaterialIcons
								style={styles.icon}
								name="delete-outline"
								size={24}
								color={COLORS.ELEMENT_COLOR}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};
