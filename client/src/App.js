import React from 'react';
import './App.css';
import './index.css';
import SocialFollow from "./SocialFollow";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            colorsPrimary: ['#9A0794', '#FBA90A', '#66b032', '#E4F132', '#091034', '#340d09', '#82B74B', '#DAC292', '#ECA1A6' ],
            currentColorIndex: 0,
            quotes: [
                '"Walk away from anything or anyone who takes away from your joy. Life is too short to put up with fools" - Unknown',
                '"Life is short, live it. Love is rare, grab it. Anger is bad, dump it. Fear is awful, face it. Memories are sweet, cherish them" - Unknown',
                '"If you cannot do great things, do small things in a great way." - Napolean Hill',
                '"What lies behind us and what lies before us are tiny matters compared to what lies within us." - Henry Stanley Haskins',
                '"It is never too late to be what you might have been." - George Eliot',
                '"Never let your memories be greater than your dreams." - Doug Ivester',
                '"It\'s not whether you get knocked down, it\'s whether you get up." - Vince Lombardi',
                '"The creation of a thousand forests is in one acorn." - Ralph Waldo Emerson',
                '"Just keep going. Everybody gets better if they keep at it." - Ted Williams',
                '"The best way to predict the future is to invent it." - Alan Kay',
                '"Very often a change of self is needed more than a change of scene." - Arthur Christopher Benson',
                '"Good things come to those who wait... greater things come to those who get off their ass and do anything to make it happen." - Unknown',
                '"Obsessed is just a word the lazy use to describe the dedicated." - Russell Warren',
                '"Even if you fall on your face, you\'re still moving forward." - Victor Kiam',
                '"I cannot give you the formula for success, but I can give you the formula for failure--which is: Try to please everybody." - Herbert Swope',
                '"To avoid criticism, do nothing, say nothing, be nothing." - Elbert Hubbard',
                '"What we fear doing most is usually what we most need to do." - Tim Ferriss'
            ],
            currentQuoteIndex: 0,
        }     
    }

    updateScreen = () => {
        this.setState(state => ({
            currentColorIndex: Math.random()*this.state.colorsPrimary.length|0,
            currentQuoteIndex: Math.random()*this.state.quotes.length|0
        }))
    }

    render(){
        return(
        <main style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.colorsPrimary[this.state.currentColorIndex]
            }}>
            {/*Primary box center of the screen containing Quote and Button*/}
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col-8'>
                        <div className='card'>
                            <p id='quote-text' style={{
                              fontFamily: 'Impact',
                              fontSize: '3vh',
                              textAlign: 'center',
                              margin: '50px',
                              color: this.state.colorsPrimary[this.state.currentColorIndex]
                            }}>
                            {this.state.quotes[this.state.currentQuoteIndex]}</p>
                            <Button onClick={this.updateScreen}/>
                            <SocialFollow/>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
            </div>
            </main>
            )
        }  
    
}

const Button = ({ onClick }) => (
    <button id='button' onClick={onClick} type='button' className='btn btn-primary' style={{
        position: 'absolute',
        bottom: '6px',
        right: '10px',}}>
        Next Quote
    </button>
)


export default App;