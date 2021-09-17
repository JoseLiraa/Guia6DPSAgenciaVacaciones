import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Image, View, Text, ScrollView, Modal, Button, TouchableHighlight } from "react-native";

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  return (
    <>
    <ScrollView>
    <Modal transparent={true} animationType='slide' visible={modalVisiblePlaya} onRequestClose={() =>{
      alert('Modal ha sido cerrado');
    }}>
      <View style={styles.vistaModal}>
        <View style={styles.Modal}>
          <Text style={styles.subtitulo}>Ir a la playa</Text>
          <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
          <Button title="Cerrar" onPress={() => {setModalVisiblePlaya(!modalVisiblePlaya)}}></Button>
        </View>
      </View>
    </Modal>
    <View style={{flexDirection: 'row'}}>
      <Image
          style={styles.banner}
          source={require('./src/img/primera.jpg')}/>
    </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View>
          <TouchableHighlight
          onPress={()=>{setModalVisiblePlaya(!modalVisiblePlaya)}}
          >
            <Image
              style={styles.ciudad}
              source={require('./src/img/segunda.jpg')}
            />
          </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/tercera.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/cuarta.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/quinta.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/sexta.jpg')}
            />
          </View>
        </ScrollView>
      </View>

      <Text style={styles.titulo}>Platillo Salvadoreño</Text>
      <View>
        <View>
          <Image
          style={styles.mejores}
          source={require('./src/img/comida1.jpg')}/>
        </View>
        <View>
          <Image
          style={styles.mejores}
          source={require('./src/img/comida2.jpg')}/>
        </View>
        <View>
          <Image
          style={styles.mejores}
          source={require('./src/img/comida3.jpg')}/>
        </View>
      </View>
      <Text style={styles.titulo}>Rutas Turisticas</Text>
      <View style={styles.listado}>
        <View style={styles.litaItem}>
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta1.png')}/>
        </View>

        <View style={styles.litaItem}>
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta2.jpeg')}/>
        </View>

        <View style={styles.litaItem}>
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta3.jpg')}/>
        </View>

        <View style={styles.litaItem}>
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta4.jpg')}/>
        </View>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginTop:30,
    height:250,
    flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10,
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5,
  },
  litaItem:{
    flexBasis:'49%',
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  vistaModal:{
    backgroundColor:'#000000aa',
    flex:1,
  },
  Modal:{
    backgroundColor: '#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1,
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center',
  },
});

export default App;