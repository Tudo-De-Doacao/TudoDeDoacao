import React from 'react';
import { ScrollView, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import H1 from '../../components/H1';
import styles, { isWeb } from '../../styles/index';

const mockFavorites = [
  {
    id: '1',
    title: 'Geladeira Usada',
    description: 'Boa para uso diário',
    location: 'São Paulo - SP',
    date: '05/06',
   // image: require('../../assets/fridge.jpg'),
  },
  {
    id: '2',
    title: 'Sofá Retrátil',
    description: '3 lugares, bom estado',
    location: 'Santo André - SP',
    date: '04/06',
    //image: require('../../assets/sofa.jpg'),
  },
];

function FavoriteScreen() {
  return (
    <>
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.bodyPrin}>
          <H1>Meus Favoritos</H1>

          {mockFavorites.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.cardBase,
                isWeb ? styles.cardFav : styles.cardFavMobile,
              ]}
            >
              <Image source={item.image} style={styles.cardImageFav} />
              <View style={styles.cardContentFav}>
                <Text style={styles.cardTitleFav}>{item.title}</Text>
                <Text style={styles.cardDescFav}>{item.description}</Text>
                <Text style={styles.cardLocationFav}>📍 {item.location}</Text>
                <Text style={styles.cardDateFav}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default FavoriteScreen;
