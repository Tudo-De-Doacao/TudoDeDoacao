import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/index';
import typog from '../../styles/type';
import colors from '../../styles/color';

import FloatingInput from '../../components/FloatingInput';
import PhoneInput from '../../components/PhoneInput';
import SecurityInput from '../../components/SecurityInput';
import RegisterButton from '../../components/RegisterButton';

import { getUserById, getUserId, logout } from '../data/getUser';
import { updateUser, updatePassword, deleteAccount } from '../data/updateUser';

function SettingsScreen() {
  const navigation = useNavigation();

  // Dados do perfil
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  // Dados da senha
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estados
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false);

  // Carrega dados do usuário
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    setLoading(true);
    try {
      const userId = await getUserId();
      if (userId) {
        const userData = await getUserById(userId);
        if (userData) {
          setName(userData.name || '');
          setLocation(userData.location || '');
          setPhone(userData.phone || userData.code || '');
        }
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      Alert.alert('Erro', 'Não foi possível carregar seus dados');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!name.trim()) {
      Alert.alert('Erro', 'Nome e email são obrigatórios');
      return;
    }

    setSaving(true);
    try {
      const success = await updateUser({
        name: name.trim(),
        location: location.trim(),
        phone: phone.trim()
      });

      if (success) {
        setEditMode(false);
      }
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos de senha');
      return;
    }

    setSaving(true);
    try {
      const success = await updatePassword({
        currentPassword,
        newPassword,
        confirmPassword
      });

      if (success) {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setShowPasswordSection(false);
      }
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair da sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            const success = await logout();
            if (success) {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }
          }
        }
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Deletar Conta',
      'Tem certeza que deseja deletar sua conta? Esta ação é irreversível e todos os seus dados serão perdidos.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: async () => {
            const success = await deleteAccount();
            if (success) {
              await logout();
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color="#D93036" />
        <Text style={{ marginTop: 16, color: colors.marker }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...styles.scroll,
          backgroundColor: colors.background,
          paddingBottom: 40
        }}
      >
        <View style={{ ...styles.bodyPrin, marginTop: 60, paddingTop: 14 }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={28} color={colors.marker} />
            </Pressable>
            <Text style={{ ...typog.titleLogin, flex: 1, textAlign: 'center', marginRight: 28 }}>
              Configurações
            </Text>
          </View>

          {/* Avatar */}
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: '#FFB8B8',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="user" size={50} color="#D93036" />
            </View>
            <Text style={{ ...typog.txtDrw, marginTop: 12 }}>{name || 'Usuário'}</Text>
          </View>

          {/* Seção de Perfil */}
          <View style={{ marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ ...typog.txtDrw, fontSize: 18 }}>Informações do Perfil</Text>
              <Pressable onPress={() => setEditMode(!editMode)}>
                <Icon name={editMode ? "x" : "edit-2"} size={20} color="#D93036" />
              </Pressable>
            </View>

            <FloatingInput
              label="Nome"
              placeholder="Seu nome"
              value={name}
              onChangeText={setName}
              editable={editMode}
            />

            <FloatingInput
              label="Localização"
              placeholder="Seu bairro"
              value={location}
              onChangeText={setLocation}
              editable={editMode}
            />

            <PhoneInput
              value={phone}
              onChangeText={setPhone}
              editable={editMode}
            />

            {editMode && (
              <View style={{ marginTop: 16 }}>
                <RegisterButton
                  text={saving ? "Salvando..." : "Salvar Alterações"}
                  onPress={handleSaveProfile}
                  disabled={saving}
                />
              </View>
            )}
          </View>

          {/* Seção de Senha */}
          <View style={{ marginBottom: 24 }}>
            <Pressable
              onPress={() => setShowPasswordSection(!showPasswordSection)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: '#FFB8B8',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="lock" size={20} color="#D93036" style={{ marginRight: 12 }} />
                <Text style={{ ...typog.txtDrw, fontSize: 16 }}>Alterar Senha</Text>
              </View>
              <Icon
                name={showPasswordSection ? "chevron-up" : "chevron-down"}
                size={20}
                color={colors.marker}
              />
            </Pressable>

            {showPasswordSection && (
              <View style={{ marginTop: 16 }}>
                <SecurityInput
                  placeholder="Senha atual"
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                  secure={true}
                />

                <SecurityInput
                  placeholder="Nova senha"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secure={true}
                />

                <SecurityInput
                  placeholder="Confirme a nova senha"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secure={true}
                />

                <RegisterButton
                  text={saving ? "Alterando..." : "Alterar Senha"}
                  onPress={handleChangePassword}
                  disabled={saving}
                />
              </View>
            )}
          </View>

          {/* Botão de Logout */}
          <Pressable
            onPress={handleLogout}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D93036',
              padding: 16,
              borderRadius: 25,
              marginBottom: 16,
            }}
          >
            <Icon name="log-out" size={20} color="#FFF" style={{ marginRight: 8 }} />
            <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>
              Sair da Conta
            </Text>
          </Pressable>

          {/* Botão de Deletar Conta */}
          <Pressable
            onPress={handleDeleteAccount}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              padding: 16,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: '#F44336',
            }}
          >
            <Icon name="trash-2" size={20} color="#F44336" style={{ marginRight: 8 }} />
            <Text style={{ color: '#F44336', fontSize: 16, fontWeight: 'bold' }}>
              Deletar Conta
            </Text>
          </Pressable>

          {/* Versão do App */}
          <Text style={{ textAlign: 'center', color: '#999', marginTop: 24, fontSize: 12 }}>
            Versão 1.0.0
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SettingsScreen;