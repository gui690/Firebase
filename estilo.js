import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    backgroundColor: "#1d1183ff",
    paddingVertical: 9,
    paddingHorizontal: "15%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
    margin:7,
    width: "70%",
  },
  buttonText: {
    color: "#fff",
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
    width: "100%",
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
  },d
 
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

});
