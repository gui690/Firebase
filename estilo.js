import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    backgroundColor: "#03051bff",
    paddingVertical: 9,
    paddingHorizontal: "15%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0c0b01ff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
    margin:7,
    width: "50%",
  },
  buttonText: {
    color: "#f8fc17ff",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#8299b8ff",
  },
   input: {
    width: "90%",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    marginBottom: 15,
    color: "#333",

    // Sombras no Android e iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
 titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  aviso: {
    fontSize: 18,
    color: "#ffffffff", // vermelho para erros
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",

  },
    key: {
    flex: 1,  // Faz com que a view ocupe toda a altura disponível
    justifyContent: 'center', // Alinha o conteúdo ao centro verticalmente
    width:"100%"
  },
  fundo: {
    flex: 1, // A imagem de fundo ocupará toda a tela
    justifyContent: 'center', // Alinha o conteúdo centralizado
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    width:"100%"
  },

});
