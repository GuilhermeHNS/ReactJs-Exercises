import React, {Component} from 'react'
import Botao from './Components/index'
import Biscoito from './assets/biscoito.png'
import Teste from './assets/teste.jpg'
import Style from './Styles/style.css'
class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            frasesExibidas: ''
        }
        this.frases = [
            'A vida trará coisas boas se tiveres paciência.',
            'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
            'Não compense na ira o que lhe falta na razão.',
            'Defeitos e virtudes são apenas dois lados da mesma moeda.',
            'A maior de todas as torres começa no solo.',
            'Não há que ser forte. Há que ser flexível.'
        ]

        this.imagem = Biscoito
        this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
        let state = this.state
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        state.frasesExibidas = '"'+this.frases[numeroAleatorio]+'"'
        this.setState(state)

        this.imagem = Teste

    }

    render(){
        return(
            <div className="container">
                <img src={this.imagem} alt="biscoito" className="imagemBiscoito"></img>

                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="fraseExibida">{this.state.frasesExibidas}</h3>
            </div>
        )
    }
} 

export default App