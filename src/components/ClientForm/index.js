import React, { useState, useContext } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { styles } from "./styles";
import { ClientContext } from "../../Contexts/ClientContext";

import { ActionButton } from "../ActionButton";
import { InputClient } from "../InputClient";

export const ClientForm = ({ handleRequest }) => {
	const client = useContext(ClientContext);

	const { cliente, setCliente } = client;

	const {
		id,
		nome,
		usuario,
		cpf,
		email,
		dataNascimento,
		endereco: { rua, numero, complemento, bairro, cidade, estado, cep },
	} = cliente;

	const [nomeInput, setNome] = useState(nome ? nome : " ");
	const [usuarioInput, setUsuario] = useState(usuario ? usuario : " ");
	const [cpfInput, setCpf] = useState(cpf ? cpf : " ");
	const [emailInput, setEmail] = useState(email ? email : " ");

	const [ruaInput, setRua] = useState(rua ? rua : " ");
	const [numeroInput, setNumero] = useState(numero ? numero : " ");
	const [complementoInput, setComplemento] = useState(
		complemento ? complemento : " "
	);
	const [bairroInput, setBairro] = useState(bairro ? bairro : " ");
	const [cidadeInput, setCidade] = useState(cidade ? cidade : " ");
	const [estadoInput, setEstado] = useState(estado ? estado : " ");
	const [cepInput, setCep] = useState(cep ? cep : " ");

	const [show, setShow] = useState(false);

	const handleUpdate = () => {};
	const handleDateChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setDataNascimento(currentDate);
		setShow(false);
	};

	const showDatePicker = () => {
		setShow(true);
	};

	function dataFormatada(dataNascimento) {
		const dataF = new Date(dataNascimento);
		const data = dataF;
		const dia = data.getDate().toString();
		const diaF = dia.length == 1 ? "0" + dia : dia;
		const mes = (data.getMonth() + 1).toString();
		const mesF = mes.length == 1 ? "0" + mes : mes;
		const anoF = data.getFullYear();
		return diaF + "/" + mesF + "/" + anoF;
	}
	const [dataNascimentoInput, setDataNascimento] = useState(
		dataNascimento ? dataFormatada(dataNascimento) : new Date()
	);
	function dataFormatadaBD() {
		const data = new Date(dataNascimentoInput);
		const dia = data.getDate().toString();
		const diaF = dia.length == 1 ? "0" + dia : dia;
		const mes = (data.getMonth() + 1).toString();
		const mesF = mes.length == 1 ? "0" + mes : mes;
		const anoF = data.getFullYear();
		return anoF + "-" + mesF + "-" + diaF + "T00:00:00Z";
	}

	const dataBd = dataFormatadaBD();

	const handleClient = () => {
		const data = {
			id: id,
			nome: nomeInput,
			usuario: usuarioInput,
			cpf: cpfInput,
			email: emailInput,
			dataNascimento: dataBd,
			endereco: {
				rua: ruaInput,
				numero: numeroInput,
				complemento: complementoInput,
				bairro: bairroInput,
				cidade: cidadeInput,
				estado: estadoInput,
				cep: cepInput,
			},
		};
		const cleanContext = {
			id: null,
			nome: null,
			usuario: null,
			cpf: null,
			email: null,
			dataNascimento: null,
			endereco: {
				rua: null,
				numero: null,
				complemento: null,
				bairro: null,
				cidade: null,
				estado: null,
				cep: null,
			},
		};
		console.log(data);
		setCliente(cleanContext);
		handleRequest(data);
	};

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollView}
				>
					<InputClient
						value={nomeInput}
						label="Nome"
						placeHold="Digite seu nome"
						handleChange={setNome}
					/>
					<InputClient
						value={usuarioInput}
						label="Nome de Usuário"
						placeHold={"Digite seu nome de usuário"}
						handleChange={setUsuario}
					/>
					<InputClient
						value={cpfInput}
						label="CPF"
						placeHold={"Digite seu CPF"}
						handleChange={setCpf}
					/>
					<InputClient
						value={emailInput}
						label="E-mail"
						placeHold={"Digite seu e-mail"}
						handleChange={setEmail}
					/>
					<View style={styles.dateContainer}>
						<View>
							<TouchableOpacity onPress={showDatePicker}>
								<InputClient
									label="Data de Nascimento"
									placeHold="Digite sua data de nascimento"
									value={dataFormatada(dataNascimentoInput)}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<Text style={styles.address}>Endereço</Text>
					<InputClient
						value={ruaInput}
						label="Logradouro"
						placeHold={"Digite o nome do Logradouro"}
						handleChange={setRua}
					/>
					<InputClient
						value={numeroInput}
						label="Número"
						placeHold={"Digite o numero no logradouro"}
						type="numeric"
						handleChange={setNumero}
					/>
					<InputClient
						value={complementoInput}
						label="Complemento"
						placeHold={"Digite o complemento"}
						handleChange={setComplemento}
					/>
					<InputClient
						value={bairroInput}
						label="Bairro"
						placeHold={"Digite seu bairro"}
						handleChange={setBairro}
					/>
					<InputClient
						value={cidadeInput}
						label="Cidade"
						placeHold={"Digite sua cidade"}
						handleChange={setCidade}
					/>
					<InputClient
						value={estadoInput}
						label="Estado"
						placeHold={"Digite seu Estado"}
						handleChange={setEstado}
					/>
					<InputClient
						value={cepInput}
						label="CEP"
						placeHold={"Digite seu CEP"}
						type="numeric"
						handleChange={setCep}
					/>

					{show && (
						<DateTimePicker
							value={dataNascimentoInput}
							mode="date"
							display="default"
							onChange={handleDateChange}
						/>
					)}
					<View style={{ marginTop: 50 }}>
						<ActionButton
							color="#333333"
							title="Salvar"
							textColor="#FFFFFF"
							bWidth={1}
							bColor="#333333"
							handleAction={handleClient}
						/>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
};
