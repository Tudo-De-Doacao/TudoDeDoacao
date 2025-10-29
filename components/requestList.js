import { ImageBackground, Text, View, FlatList} from "react-native";
import {useState} from "react"

import styles from "../styles";
import RequestCard from "./requestCard";


export default function RequestList(){
// const [cards, setCards] = useState();

const card = [
   { id: 1, donate_name: "Cesta Básica", request_user_name: "Maria Silva", request_user_local: "São Paulo - SP", request_data: "2025-10-27", request_image: "https://picsum.photos/200/200" },
  { id: 2, donate_name: "Roupas de Inverno", request_user_name: "Carlos Souza", request_user_local: "Curitiba - PR", request_data: "2025-10-25", request_image: "https://picsum.photos/201/200" },
  { id: 3, donate_name: "Brinquedos Infantis", request_user_name: "Ana Paula", request_user_local: "Recife - PE", request_data: "2025-10-20", request_image: "https://picsum.photos/202/200" },
  { id: 4, donate_name: "Alimentos Não Perecíveis ", request_user_name: "Lucas Pereira", request_user_local: "Belo Horizonte - MG", request_data: "2025-10-18", request_image: "https://picsum.photos/203/200" },
  { id: 5, donate_name: "Material Escolar", request_user_name: "Fernanda Costa", request_user_local: "Fortaleza - CE", request_data: "2025-10-15", request_image: "https://picsum.photos/204/200" },
  { id: 6, donate_name: "Fraldas", request_user_name: "Ricardo Almeida", request_user_local: "Salvador - BA", request_data: "2025-10-12", request_image: "https://picsum.photos/205/200" },
  { id: 7, donate_name: "Produtos de Higiene", request_user_name: "Patrícia Mendes", request_user_local: "Natal - RN", request_data: "2025-10-11", request_image: "https://picsum.photos/206/200" },
  { id: 8, donate_name: "Cobertores", request_user_name: "João Vitor", request_user_local: "Porto Alegre - RS", request_data: "2025-10-09", request_image: "https://picsum.photos/207/200" },
  { id: 9, donate_name: "Livros Usados", request_user_name: "Laura Fernandes", request_user_local: "Campinas - SP", request_data: "2025-10-08", request_image: "https://picsum.photos/208/200" },
  { id: 10, donate_name: "Cadeiras de Rodas", request_user_name: "Marcelo Tavares", request_user_local: "Florianópolis - SC", request_data: "2025-10-07", request_image: "https://picsum.photos/209/200" },
  { id: 11, donate_name: "Brinquedos Educativos", request_user_name: "Beatriz Ramos", request_user_local: "Manaus - AM", request_data: "2025-10-06", request_image: "https://picsum.photos/210/200" },
  { id: 12, donate_name: "Leite em Pó", request_user_name: "Gabriel Santos", request_user_local: "Belém - PA", request_data: "2025-10-05", request_image: "https://picsum.photos/211/200" },
  { id: 13, donate_name: "Ração Animal", request_user_name: "Carolina Nunes", request_user_local: "Goiânia - GO", request_data: "2025-10-04", request_image: "https://picsum.photos/212/200" },
  { id: 14, donate_name: "Computadores Usados", request_user_name: "Pedro Henrique", request_user_local: "Vitória - ES", request_data: "2025-10-03", request_image: "https://picsum.photos/213/200" },
  { id: 15, donate_name: "Móveis Domésticos", request_user_name: "Juliana Rocha", request_user_local: "Ribeirão Preto - SP", request_data: "2025-10-02", request_image: "https://picsum.photos/214/200" },
  { id: 16, donate_name: "Medicamentos", request_user_name: "Thiago Moreira", request_user_local: "João Pessoa - PB", request_data: "2025-10-01", request_image: "https://picsum.photos/215/200" },
  { id: 17, donate_name: "Ferramentas", request_user_name: "Camila Oliveira", request_user_local: "Teresina - PI", request_data: "2025-09-30", request_image: "https://picsum.photos/216/200" },
  { id: 18, donate_name: "Utensílios de Cozinha", request_user_name: "Rafael Lima", request_user_local: "Aracaju - SE", request_data: "2025-09-29", request_image: "https://picsum.photos/217/200" },
  { id: 19, donate_name: "Instrumentos Musicais", request_user_name: "Isabela Martins", request_user_local: "Maceió - AL", request_data: "2025-09-28", request_image: "https://picsum.photos/218/200" },
  { id: 20, donate_name: "Materiais de Construção", request_user_name: "Diego Ferreira", request_user_local: "Londrina - PR", request_data: "2025-09-27", request_image: "https://picsum.photos/219/200" }
]

const removeCard = (id) => {
  return(
    card.filter((card) => card.id !== id)
  )
}

  return(
    <View style={styles.requestListContainer}>
      <FlatList
        data={card}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <RequestCard
            donateName={item.donate_name}
            userName ={item.request_user_name}
            userLocal={item.request_user_local}
            requestDate={item.request_data}
            onRemove={() => removeCard(item.id)}
          />
        )}
        contentContainerStyle={{ alignItems: "center", gap: 8, marginTop: 10}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
};

