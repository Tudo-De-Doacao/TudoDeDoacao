import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

import styles from '../../styles/index';
import HeaderDonation from '../../components/HeaderDonation';
import H1 from '../../components/H1';
import CollapsibleView from '../../components/CollapsibleView'; // 👈 ADICIONADO

function DonationScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <HeaderDonation />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <ImageBackground
          source={require('../../assets/BGHome.png')}
          style={styles.bgimagem}
          resizeMode="cover"
        />
        <View style={styles.bodyPrin}>
          <Image
            style={styles.imageDonation}
            source={{ uri: 'https://via.placeholder.com/300x200.png' }}
          />
          <H1 style={styles.h1}>*Info Product*</H1>
          <Text style={styles.info}>Product Name</Text>
        </View>
      </ScrollView>

      {/* Botão flutuante */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>❓</Text>
      </TouchableOpacity>

      {/* Modal de dúvidas com accordions */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Dúvidas Frequentes</Text>

            <CollapsibleView title="❓ Quem é o doador?">
              <Text style={localStyles.answer}>
                O doador é uma pessoa anônima que compartilhou este item.
              </Text>
            </CollapsibleView>

            <CollapsibleView title="📞 Como faço contato?">
              <Text style={localStyles.answer}>
                O contato é feito apenas após a solicitação ser aprovada.
              </Text>
            </CollapsibleView>

            <CollapsibleView title="📍 O doador saberá minha localização?">
              <Text style={localStyles.answer}>
                Não. A sua localização só é compartilhada com seu consentimento.
              </Text>
            </CollapsibleView>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const localStyles = StyleSheet.create({
  answer: {
    fontSize: 14,
    padding: 8,
    lineHeight: 20,
    backgroundColor: '#FDEEDA'
  },
});

export default DonationScreen;
