import React, { useState } from 'react';
import { TextInput, View, Button, Alert, Text, FlatList } from 'react-native';
import { getAlianca, getCabo } from '../../../services/cities';
import { getRecife } from '../../../services/cities';
import Loader from '../../Loader/loader';

// import { Container } from './styles';
import styles from './styles';

function Cabo (){
    const [text, onChangeText] = React.useState("");
    const [recife, setRecife] = useState([]);
    const [load, setLoad] = useState(false)

    const placeholder = {
        label: text,
        value: null,
        color: '#9EA0A4',
      };


      function call(value: any){
        const resp = getCabo(value);
        setLoad(true)
        resp.then(function(response){
            console.log('-----------------------')
            // console.log(recife)
            setRecife(response.data[0])
            setLoad(false)
        })
        // console.log(resp)
      }

      const renderItem = ({item}:{item:any}) => (
          <View>
              <Text>Municipio: {item.MUNICIPIO}</Text>
              <Text>Região: {item.REGIAO}</Text>
              <Text>Natureza: {item.NATUREZA}</Text>
              <Text>Data do Fato: {item.DATA_DO_FATO}</Text>
              <Text>Ano: {item.ANO}</Text>
              <Text>Sexo: {item.SEXO}</Text>
              <Text>Idade SENASP: {item.IDADE_SENASP}</Text>
              <Text>Envolvidos: {item.TOTAL_DE_ENVOLVIDOS}</Text>

              <View style={styles.line}/>
          </View>
      );

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={"Digite quantos itens você quer exibir"}
            value={text}
            />
            <Button
                onPress={() => call(text)}
                title='Buscar'
              />

            {load == true ?
                <Loader />
            : 
                <FlatList 
                    data={recife}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            }
        </View>
    )
}

export default Cabo;