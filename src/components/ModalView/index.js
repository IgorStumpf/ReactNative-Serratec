import React, { ReactNode } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { View, Modal, ModalProps } from "react-native";

import { styles } from "./styles";

export function ModalView({ Children }) {
	return (
		<Modal animationType="slide">
			<View style={styles.overlay}>
				<View style={styles.container}>
					<View style={styles.bar} />
					{Children}
				</View>
			</View>
		</Modal>
	);
}
