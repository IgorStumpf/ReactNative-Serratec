import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export const SearchButton = () => {
	const [text, onChangeText] = useState(null);

	return (
		<View style={styles.container}>
			<FontAwesome
				name="search"
				size={18}
				color="#D1D1D1"
				style={styles.svg}
			/>
			<TextInput
				style={styles.searchButton}
				onChangeText={onChangeText}
				value={text}
				placeholder="Pesquisar clientes"
			></TextInput>
		</View>
	);
};
