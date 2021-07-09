import React from "react";
import { View, FlatList, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { SearchButton } from "../../components/Search";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { ClienteList } from "../../components/ClienteList";
import { ModalView } from "../../components/ModalView";
import { AddButton } from "../../components/Add";

export const Home = () => {
	return (
		<View style={styles.mainContainer}>
			<SearchButton />
			<AddButton />
			<ScrollView showsVerticalScrollIndicator={false}>
				<ClienteList />
			</ScrollView>
			<Footer />
		</View>
	);
};
{
}
