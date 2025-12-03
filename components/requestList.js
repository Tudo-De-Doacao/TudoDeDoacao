import { ImageBackground, Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react"

import styles from "../styles";
import RequestCard from "./requestCard";
import { updateDonation } from "../src/data/updateDonation";
import { getUserById } from "../src/data/getUser";


export default function RequestList({dataCard}){
const [cards, setCards] = useState([]);

useEffect(() => {
  async function loadUser(){
    const listWithNames = [];

    for (const item of dataCard){
      
      const user = await getUserById(item.user_id);
      
      listWithNames.push({
        ...item, 
        request_user_name: user.name
      });
    }
    setCards(listWithNames);
  }
  loadUser();
}, [dataCard]);

const donationRecused = async (id) => {
    setCards(((prev) => prev.filter((obj) => obj.id !== id)));
    const declined = await updateDonation(id, {
      status: "active",
    }
  )};

const donationAccepted = async (id) => {
    setCards(((prev) => prev.filter((obj) => obj.id !== id)));
    const accepted = await updateDonation(id, {
    status: "disable"
    })
}

  return(
    <View style={styles.requestListContainer}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <RequestCard
            donateName={item.name}
            userName ={item.request_user_name}
            userLocal={item.location}
            requestImage={item.image}
            onRecuse={() => donationRecused(item.id)}
            onAccept={() => donationAccepted(item.id)}
          />
        )}
        contentContainerStyle={{ alignItems: "center", gap: 8, marginTop: 10}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
};
