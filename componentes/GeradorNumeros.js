import React, { Component, Fragment } from "react"
import { StyleSheet, View,Text, TextInput, Button } from "react-native"
import NumeroGerado from "./NumeroGerado"



export default class Gerador extends Component {
    state = {
        qtdeNumeros : this.props.qtdeNumeros,
        numerosGerados: []
    }

    alteraQtdeNumeros = qtdeNumeros => {
        this.setState({qtdeNumeros})   
    }

    gerarNumNaoRepetido = numeros => {
        const novoNum = parseInt(Math.random() * 60) + 1
        return numeros.includes(novoNum) ? this.gerarNumNaoRepetido(numeros) : novoNum
    }

    gerarNumerosAleatorios = () => {
        const {qtdeNumeros} = this.state;
        const numerosGerados = [];
        
        for (let i = 0; i < qtdeNumeros; i++) {
            numerosGerados.push(this.gerarNumNaoRepetido(numerosGerados))
        }

        this.setState({numerosGerados});
        // console.warn(numerosGerados
        //                 .sort((a,b) => a-b)
        //                 .join(','));
    }

    exibirTela() {
        const numeros = this.state.numerosGerados
        return numeros.map(n=> 
            {
                return <NumeroGerado key={n} num={n}/>
            }
        )
    }

    render() {
        return (
            <View style={style.Frag}>
                <Text style={style.Titulo}>Gerador de Numeros</Text>                
                <TextInput
                    style={style.Input}
                    placeholder="insira a quantia de numeros a serem gerados..."
                    placeholderTextColor={'white'}
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alteraQtdeNumeros}/>
                <Button
                    title="Gerar"
                    onPress={this.gerarNumerosAleatorios}/>
                <View style={style.Numeros}>
                    {this.exibirTela()}
                </View>
            </View>                
        )
    }
} 

const style = StyleSheet.create({
    Frag: {
        flexGrow: 1, 
        alignContent:'center',
        justifyContent:'center',
        padding: 30
    },
    Titulo: {
        fontSize: 32,
        textAlign:'center'
    },
    Input: {
        backgroundColor: 'gray',
        borderColor: 'black',
        borderBottomWidth: 1,
        color:'white',
    },
    Numeros: {
        flexDirection:'row',
        flexWrap:'wrap'
    }
})