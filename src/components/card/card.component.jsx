import React, { Component } from 'react'
import './card.styles.css'

class Card extends Component {
    state = {
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    }
    render() {
        const { title, message } = this.state
        return (
            <div className='App'>
                <div className='main'>
                    {[...Array(18)].map((element, index) => {
                        return (
                            <div key={index} className='card'>
                                <h4>Some title</h4>
                                {index % 2 === 0 ? title : message}
                            </div>
                        )
                    })}
                </div>
                <div className='aside'>
                    {[...Array(2)].map((element, index) => {
                        return (
                            <div key={index} className='card'>
                                <h4>Some title</h4>
                                {index % 2 === 0 ? title : message}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Card