import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");

  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const formatCEP = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);
  };

  const handleCepChange = (value) => {
    setCep(formatCEP(value));
  };

  const consultarCEP = async () => {
    setLoading(true);
    setErro("");
    setEndereco(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: "GET",
      });
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado.");
      } else {
        setEndereco(data);
        setLogradouro(data.logradouro || "");
        setBairro(data.bairro || "");
        setCidade(data.localidade || "");
        setEstado(data.uf || "");
      }
    } catch (error) {
      setErro("Erro ao consultar o CEP.");
    } finally {
      setLoading(false);
    }
  };

  const handleCepSubmit = () => {
    if (cep.length === 9) {
      consultarCEP();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#256" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.heading}>Consulta de Endereço</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>CEP:</Text>
              <TextInput
                keyboardType="numeric"
                placeholder="XXXXX-XXX"
                style={styles.inputStyle}
                maxLength={9}
                value={cep}
                onChangeText={handleCepChange}
                onSubmitEditing={handleCepSubmit}
                returnKeyType="done"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Logradouro:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  { backgroundColor: endereco ? "#AFDDC2" : "#555" },
                ]}
                value={logradouro}
                onChangeText={setLogradouro}
                editable={!!endereco}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Bairro:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  { backgroundColor: endereco ? "#AFDDC2" : "#555" },
                ]}
                value={bairro}
                onChangeText={setBairro}
                editable={!!endereco}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Cidade:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  { backgroundColor: endereco ? "#AFDDC2" : "#555" },
                ]}
                value={cidade}
                onChangeText={setCidade}
                editable={!!endereco}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Estado:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  { backgroundColor: endereco ? "#AFDDC2" : "#555" },
                ]}
                value={estado}
                onChangeText={setEstado}
                editable={!!endereco}
              />
            </View>

            <TouchableOpacity onPress={consultarCEP} style={styles.button}>
              <Text style={styles.buttonText}>Consultar</Text>
            </TouchableOpacity>

            {loading && <ActivityIndicator size="large" color="#AFDDC2" />}

            {erro ? <Text style={styles.errorMsg}>{erro}</Text> : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 25,
    color: "#AFDDC2",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  label: {
    color: "#AFDDC2",
    fontSize: 18,
  },
  inputContainer: {
    width: "90%",
    fontSize: 15,
  },
  inputStyle: {
    width: "100%",
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#AFDDC2",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#AFDDC2",
    width: "70%",
    height: 45,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#2D5B4F",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorMsg: {
    fontWeight: "bold",
    color: "#F74722",
    marginTop: 15,
  },
});
