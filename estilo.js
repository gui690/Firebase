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
    marginBottom: 20,
    width: "80%",
    paddingLeft:8,
    backgroundColor:"white",
    borderRadius:10
  },
  inputPicker: {
    marginBottom: 20,
    width: "80%",
    paddingLeft:8,
    backgroundColor:"white",
    borderRadius:10,
    
    
  },
  textpicker:{
    fontSize:12,
    color:"blue",
  },
 titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffffff",
    marginBottom: 15,
    textAlign: "center",
  },
  aviso: {
    fontSize: 18,
    color: "#ffff", // vermelho para erros
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
   logo:{  
  height: '15%',       // Use aspas para valores percentuais
    width: '30%',
  resizeMode: 'contain',     

  },
  viewinput:{
 width: "100%",
 justifyContent:"center",
 alignItems:"center"
  
  }

});
