import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const images = [
  require('./assets/imagen1.jpg'),
  require('./assets/imagen2.jpg'),
  require('./assets/imagen3.jpg'),
  require('./assets/imagen4.jpg'),
  require('./assets/imagen5.jpg')
]

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0); 

  function nextImage(prevIndex) {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Volver al inicio si está en la última imagen
  };

  function previousImage(prevIndex) {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Volver al final si está en la primera imagen
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Album de fotos</Text>
      <View style={styles.photoContainer}>
        <Text style={styles.photoCount}>Foto {currentIndex + 1}/5</Text>
        <Image source={images[currentIndex]} style={styles.image}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={previousImage} style={styles.arrowButton}>
            <Icon name="arrow-left" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextImage} style={styles.arrowButton}>
            <Icon name="arrow-right" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE1DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40, 
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10
  }, 
  photoContainer: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  }, 
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  }, 
  photoCount: {
    fontFamily: "Times New Roman",
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: "#FEC5BB", 
    padding: 10
  }, 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  arrowButton: {
    backgroundColor: "#FEC5BB",
    padding: 20,
    borderRadius: 50
  }
});
