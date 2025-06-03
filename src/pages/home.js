import { ScrollView, View, FlatList, ImageBackground } from 'react-native';

import FilterBtn from '../../components/FilterBtn';
import Header from '../../components/Header';
import Card from '../../components/CardDon';

import { donationCards } from '../data/cardData' ;

import styles from '../../styles/index';

function HomeScreen() {
  return (
    <>
    <Header/>
      <ImageBackground
        source={require('../../assets/BGHome.png')}
        style={styles.bgimagem}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.bodyPrin}>
          <View style={homeButton}>  
            <FilterBtn /> 
            <FilterBtn />
          </View> 
         <FlatList
          horizontal
          data={donationCards}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.bodyCard} 
          renderItem={({ item }) => (
          <Card 
          title={item.title}
          location={item.location}
          description={item.description}
          image={item.image}
        />
          )}
          showsHorizontalScrollIndicator={false}
          />

        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
