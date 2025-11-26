import { ImageBackground, Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react"

import styles from "../styles";
import RequestCard from "./requestCard";
import { updateDonation } from "../src/data/updateDonation";
import { getUserById } from "../src/data/getUser";


export default function RequestList({dataCard}){
const [cards, setCards] = useState([{
    id: 1,
    name: "Cesta básica",
    request_user_name: "Maria Silva",
    location: "São Paulo - SP",
    image: "https://picsum.photos/200?1"
  },
  {
    id: 2,
    name: "Roupas de inverno",
    request_user_name: "João Pereira",
    location: "Rio de Janeiro - RJ",
    image: "https://picsum.photos/200?2"
  },
  {
    id: 3,
    name: "Brinquedos usados",
    request_user_name: "Ana Costa",
    location: "Belo Horizonte - MG",
    image: "https://picsum.photos/200?3"
  },
  {
    id: 4,
    name: "Livros escolares",
    request_user_name: "Carlos Mendes",
    location: "Curitiba - PR",
    image: "https://picsum.photos/200?4"
  },
  {
    id: 5,
    name: "Móveis pequenos",
    request_user_name: "Fernanda Rocha",
    location: "Salvador - BA",
    image: "https://picsum.photos/200?5"
  },
  {
    id: 6,
    name: "Pacote de fraldas",
    request_user_name: "Luciana Gomes",
    location: "Brasília - DF",
    image: "httpsum.photos/200?6"
  },
  {
    id: 7,
    name: "Ração para cães",
    request_user_name: "Bruno Lima",
    location: "Fortaleza - CE",
    image: "https://picsum.photos/200?7"
  },
  {
    id: 8,
    name: "Kit de higiene",
    request_user_name: "Marcos Antônio",
    location: "Manaus - AM",
    image: "https://picsum.photos/200?8"
  },
  {
    id: 9,
    name: "Materiais escolares",
    request_user_name: "Juliana Duarte",
    location: "Recife - PE",
    image: "https://picsum.photos/200?9"
  },
  {
    id: 10,
    name: "Sacos de arroz",
    request_user_name: "Rafael Souza",
    location: "Goiânia - GO",
    image: "https://picsum.photos/200?10"
  },
  {
    id: 11,
    name: "Sapatos usados",
    request_user_name: "Patrícia Melo",
    location: "Porto Alegre - RS",
    image: "https://picsum.photos/200?11"
  },
  {
    id: 12,
    name: "Cobertores",
    request_user_name: "Eduardo Freitas",
    location: "Belém - PA",
    image: "https://picsum.photos/200?12"
  },
  {
    id: 13,
    name: "Óleo de cozinha",
    request_user_name: "Letícia Ribeiro",
    location: "Natal - RN",
    image: "https://picsum.photos/200?13"
  },
  {
    id: 14,
    name: "Itens para bebê",
    request_user_name: "Fábio Santana",
    location: "João Pessoa - PB",
    image: "https://picsum.photos/200?14"
  },
  {
    id: 15,
    name: "Kits de limpeza",
    request_user_name: "Renata Afonso",
    location: "Florianópolis - SC",
    image: "https://picsum.photos/200?15"
  },
  {
    id: 16,
    name: "Leite em pó",
    request_user_name: "Gabriel Nunes",
    location: "Campo Grande - MS",
    image: "https://picsum.photos/200?16"
  },
  {
    id: 17,
    name: "Cadeira de rodas",
    request_user_name: "Sueli Castro",
    location: "Teresina - PI",
    image: "https://picsum.photos/200?17"
  },
  {
    id: 18,
    name: "Material de construção",
    request_user_name: "Vinícius Borges",
    location: "Aracaju - SE",
    image: "https://picsum.photos/200?18"
  },
  {
    id: 19,
    name: "Cestas verdes",
    request_user_name: "Camila Prado",
    location: "Maceió - AL",
    image: "https://picsum.photos/200?19"
  },
  {
    id: 20,
    name: "Toalhas",
    request_user_name: "Thiago Camargo",
    location: "Vitória - ES",
    image: "https://picsum.photos/200?20"
  }]);

// useEffect(() => {
//   async function loadUser(){
//     const listWithNames = [];

//     for (const item of dataCard){
      
//       const user = await getUserById(item.user_id);
      
//       listWithNames.push({
//         ...item, 
//         request_user_name: user.name
//       });
//     }
//     setCards(listWithNames);
//   }
//   loadUser();
// }, [dataCard]);

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

