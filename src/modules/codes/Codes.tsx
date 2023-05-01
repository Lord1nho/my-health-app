import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, Button } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { TextBox } from '../../shared/ui/components/TextBox'
import { globalStyles } from '../../shared/ui/globalStyles'
import { StyledText } from '../../shared/ui/components/StyledText'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CodeQuery from './pages/Consulta'
import CodeQuery2 from './pages/ConsultaCid11'
import { CIAN, GREEN, LIGHT_BLACK, LIGHT_GREY } from '@shared/ui/colors'
import CodeQuery3 from './pages/ConsultaCif'
import { Picker } from '@react-native-picker/picker'
import CodeQuery4 from './pages/Favoritos'
import { useState, useEffect } from 'react'
//import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>

const Tab = createBottomTabNavigator()

export interface Code {
  codigo: string
  titulo: string
  title: string
  descricao: string
  description: string
  sigtap: string
}

export default function Codes(props: CodesProps) {
  const { navigation } = props
  const [selectedOption, setSelectedOption] = useState('')
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [response, setResponse] = useState<Code>({
    codigo: '',
    titulo: '',
    title: '',
    descricao: '',
    description: '',
    sigtap: '',
  })
  const [btn, setBtn] = useState(0)

  function returnTableType(num: number) {
    let str
    switch (num) {
      case 1:
        str = 'cid10'
        break
      case 2:
        str = 'cid11'
        break
      case 3:
        str = 'cif'
        break
      case 4:
        str = 'sigtap'
        break
      default:
        str = ''
    }

    return str
  }

  useEffect(() => {
    if (btn) {
      console.log(response)

      switch (btn) {
        case 1:
          navigation.navigate('Consulta', {
            cid10: 'Consulta',
            consulta: response,
          })
          break
        case 2:
          navigation.navigate('ConsultaCid11', {
            cid11: 'Consulta',
            consulta: response,
          })
          break
        case 3:
          navigation.navigate('ConsultaCif', {
            cif: 'Consulta',
            consulta: response,
          })
          break
        case 4:
          navigation.navigate('ConsultaSigtap', {
            sigtap: 'Consulta',
            consulta: response,
          })
          break
        default:
      }
    }
  }, [response])

  const handlePress = (num: number) => {
    const tipo = returnTableType(num)

    fetch(`http://192.168.0.106:8080/${tipo}/${inputValue.toLowerCase()}`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        const consulta = data[0]
        const responseObj: Code = {
          codigo: consulta.codigo,
          titulo: consulta.titulo,
          title: '',
          descricao: '',
          description: '',
          sigtap: '',
        }

        if ('title' in consulta) responseObj.title = consulta.title

        if ('descricao' in consulta) responseObj.descricao = consulta.descricao

        if ('description' in consulta)
          responseObj.description = consulta.description

        setResponse(responseObj)
        setBtn(num)
      })
      .catch((error) => {
        console.log('Código não encontrado')
        console.error(error)
      })
  }

  return (
    <View style={{ backgroundColor: '#94efe5', flex: 1 }}>
      <StyledText
        style={[
          globalStyles.marginBottom1,
          globalStyles.marginTop8,
          globalStyles.fontSize4,
          {
            textAlign: 'center',
            fontFamily: 'Bahnschrift Light',
          },
        ]}
      >
        My
        <Text
          style={[
            {
              textAlign: 'center',
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
          globalStyles.fontSize2,
          {
            textAlign: 'center',
            fontFamily: 'Bahnschrift',
            fontSize: 32,
          },
        ]}
      >
        Módulo Consulta
      </StyledText>
      <StyledText
        style={[
          globalStyles.marginBottom1,
          globalStyles.fontSize2,
          {
            textAlign: 'center',
            fontFamily: 'Bahnschrift',
            fontSize: 32,
          },
        ]}
      >
        {' '}
        de Códigos
      </StyledText>

      <View style={[globalStyles.centerHorizontally]}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(value) => setSelectedOption(value)}
          style={[
            globalStyles.marginTop5,
            {
              fontSize: 20,
              fontFamily: 'Bahnschrift SemiBold',
              color: '#263541',
              borderColor: CIAN,
              backgroundColor: '#ffffff',
              paddingLeft: 20,
              width: '30%',
              height: 80,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
            },
          ]}
        >
          <Picker.Item label="-" value="value0" />
          <Picker.Item label="CID-10" value="CID-10" />
          <Picker.Item label="CID-11" value="CID-11" />
          <Picker.Item label="CIF" value="CIF" />
          <Picker.Item label="SIGTAP" value="SIGTAP" />
        </Picker>

        <TextBox
          style={[
            globalStyles.marginTop5,
            {
              fontSize: 28,
              fontFamily: 'Bahnschrift SemiBold',
              color: '#263541',
              backgroundColor: '#f2f5f7',
              padding: 16,
              width: '60%',
              height: 80,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
              borderWidth: 0,
            },
          ]}
          placeholder="Digite o código"
          value={inputValue}
          onChangeText={setInputValue}
        ></TextBox>
      </View>
      <View style={globalStyles.centerHorizontally}>
        <PrimaryButton
          style={[
            globalStyles.marginTop5,
            {
              backgroundColor: '#ffffff',
              height: 60,
              width: '40%',
              borderRadius: 30,
            },
          ]}
          textStyle={{
            color: '#263541',
            fontFamily: 'Bahnschrift SemiBold',
            fontSize: 24,
            fontWeight: 'bold',
          }}
          onPress={
            () => {
              if (selectedOption === 'CID-10') {
                handlePress(1)
              } else if (selectedOption === 'CID-11') {
                handlePress(2)
              } else if (selectedOption === 'CIF') {
                handlePress(3)
              }
            }
            // else if (selectedOption === 'SIGTAP') {
            //   handlePress(4)
            //   navigation.navigate('ConsultaSIGTAP', { sigtap: 'Consulta' })
            // }
          }
        >
          Buscar
        </PrimaryButton>
      </View>
    </View>
  )
}
