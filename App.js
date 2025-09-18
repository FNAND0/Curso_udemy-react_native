import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
//nando e foda

import {Picker} from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas:[
        {key: 1,nome: 'Queijo',valor:35.90},
        {key: 2,nome: 'Calabrese',valor:35.90},
        {key: 3,nome: 'Quatro queijos',valor:45.90},
        {key: 4,nome: 'Strogonof',valor:50.90},
        {key: 3,nome: 'Italiana',valor:45.90},
      ]
    };
  };

  render(){

    let pizzasItem = this.state.pizzas.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return(
      <View style={styles.container} >
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
        selectedValue={this.state.pizza}
        onValueChange={(ItemValue, itemIndex)=> this.setState({pizza: ItemValue})}
        >
          {pizzasItem}

        </Picker>

        <Text style={styles.pizzas} >Voçê escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas} >R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)} </Text>
        <Text style={{fontSize:30}} >{this.state.pizza}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    //negrito
    fontWeight: 'bold'
  },
  pizzas:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }

});
