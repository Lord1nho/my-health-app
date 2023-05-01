import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { StyledText } from '../../../shared/ui/components/StyledText'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { GREEN, CIAN } from '@shared/ui/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CodeQuery4 from './Favoritos'
import { RouteParams } from 'src/routeParams'

const Tab = createBottomTabNavigator()

export function CodeQuery2() {
  const navigation = useNavigation()

  const route = useRoute()
  const consulta = (route.params as RouteParams['Consulta']).consulta

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Consultar códigos"
        component={() => (
          <View style={{ backgroundColor: '#94efe5', flex: 1 }}>
            <StyledText
              style={[
                globalStyles.marginTop2,
                globalStyles.fontSize4,
                {
                  textAlign: 'left',
                  fontFamily: 'Bahnschrift Light',
                  fontSize: 40,
                  padding: 30,
                },
              ]}
            >
              My
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                    fontWeight: 'bold',
                  },
                ]}
              >
                Health
              </Text>
            </StyledText>

            <StyledText
              style={[
                globalStyles.marginBottom1,
                globalStyles.fontSize4,
                {
                  paddingLeft: 20,
                  paddingTop: 4,
                  marginLeft: 16,
                  marginRight: 16,
                  textAlign: 'left',
                  backgroundColor: '#ffffff',
                  height: 50,
                  borderRadius: 25,
                },
              ]}
            >
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                  },
                ]}
              >
                CID-11
              </Text>
            </StyledText>

            <View
              style={[
                {
                  borderRadius: 14,
                  marginLeft: 16,
                  marginRight: 16,
                  backgroundColor: '#ffffff',
                  flex: 1,
                },
              ]}
            >
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                    fontSize: 20,
                    padding: 16,
                  },
                ]}
              >
                {' '}
                <br />
                <Text style={{ fontWeight: 'bold' }}>Código:</Text>{' '}
                {consulta.codigo}
                <br />
                <br />
                <Text style={{ fontWeight: 'bold' }}>Título:</Text>{' '}
                {consulta.titulo}
                <br />
                <br />
                <Text style={{ fontWeight: 'bold' }}>Descrição:</Text>{' '}
                {consulta.descricao}
                <br />
              </Text>
            </View>
            <View style={globalStyles.centerHorizontally}>
              <PrimaryButton
                style={[
                  globalStyles.marginTop4,
                  globalStyles.marginBottom4,
                  {
                    backgroundColor: '#ffffff',
                    width: '60%',
                    height: 60,
                    borderRadius: 30,
                  },
                ]}
                textStyle={{
                  color: '#263541',
                  fontFamily: 'Bahnschrift SemiBold',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}
                onPress={() => navigation.goBack()}
              >
                Voltar
              </PrimaryButton>
              <PrimaryButton
                style={[
                  globalStyles.marginTop4,
                  globalStyles.marginBottom4,
                  {
                    marginLeft: 8,
                    backgroundColor: '#207868',
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  },
                ]}
                textStyle={{
                  color: '#ffffff',
                  fontFamily: 'Bahnschrift SemiBold',
                  fontSize: 36,
                  fontWeight: 'bold',
                }}
              >
                ★
              </PrimaryButton>
            </View>
          </View>
        )}
      ></Tab.Screen>
      <Tab.Screen name="Meus favoritos" component={CodeQuery4}></Tab.Screen>
    </Tab.Navigator>
  )

  return (
    <View style={{ backgroundColor: CIAN, flex: 1 }}>
      <StyledText
        style={[
          globalStyles.marginTop4,
          globalStyles.marginBottom4,
          globalStyles.fontSize4,
          { marginLeft: 8, textAlign: 'left' },
        ]}
      >
        MyHealth
      </StyledText>

      <StyledText
        style={[
          globalStyles.marginBottom1,
          globalStyles.fontSize4,
          {
            marginLeft: 8,
            marginRight: 8,
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 14,
          },
        ]}
      >
        CID-11
      </StyledText>

      <View
        style={[
          {
            borderRadius: 14,
            marginLeft: 8,
            marginRight: 8,
            backgroundColor: '#ffffff',
            flex: 1,
          },
        ]}
      >
        <StyledText>
          <h2>Código:</h2> aqui vai o código q foi pesquisado
        </StyledText>
        <StyledText>
          <h2>Título:</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledText>
        <StyledText>
          <h2>Descrição:</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledText>
      </View>
      <View style={globalStyles.centerHorizontally}>
        <PrimaryButton
          style={[
            globalStyles.marginTop4,
            globalStyles.marginBottom4,
            { backgroundColor: '#ffffff', width: '60%' },
          ]}
          textStyle={{ color: '#000000' }}
          onPress={() => navigation.goBack()}
        >
          Voltar
        </PrimaryButton>
        <PrimaryButton
          style={[
            globalStyles.marginTop4,
            globalStyles.marginBottom4,
            { marginLeft: 8, backgroundColor: '#ffffff' },
          ]}
          textStyle={{ color: '#000000' }}
        >
          A.Fav
        </PrimaryButton>
      </View>
    </View>
  )
}

export default CodeQuery2
