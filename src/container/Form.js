import React, { Component } from 'react'
import Card from '../components/Card'

export default class Form extends Component {
    state = {
        showCardForm: false,
        cardTitle: '',
        cardBody: '',
        cardList: []
    }
    showCardForm = () => {
        this.setState({showCardForm: true})
    }
    cardTitle = (e) => {
        const title = e.target.value
        this.setState({cardTitle: title})
    }
    cardBody = (e) => {
        const body = e.target.value
        this.setState({cardBody: body})
    }
    cancelAddCard = () => {
        this.clearCard()
        this.setState({showCardForm: false})
    }
    addCard = () => {
        if(this.state.cardBody==='') return alert('세부사항을 입력해주세요')
        const id = this.state.cardList.length
        const newCard = {id, title: this.state.cardTitle, body: this.state.cardBody}
        const currentList = this.state.cardList
        this.setState({cardList: [newCard,...currentList]})
        this.clearCard()
    }
    clearCard = () => {
        this.setState({
            cardTitle: '',
            cardBody: ''
        })
    }
    deleteCard = (id) => {
        console.log('delete func!')
        console.log('target idx',id)
        // get card index param 
        // setSate for delete card
        const newList = this.state.cardList.splice(id,1)
        console.log('state changed?', this.state.cardList)
        console.log('newList', newList )
        this.setState({cardList: newList})
    }
    render() {
        const showCardForm = <input type='button' className='showCardForm' value='카드추가' onClick={this.showCardForm}/>
        const cardForm = 
        <div className='AddCard'>
            <div style={{display: this.state.showCardForm?'':'none'}}>
                <input type='input' className='title' onChange={this.cardTitle} value={this.state.cardTitle}></input>
                <input type='input' className='body' onChange={this.cardBody} value={this.state.cardBody}></input>
                <input type='button' className='addButton' value='추가' onClick={this.addCard}/>
                <input type='button' className='cancelButton' value='X' onClick={this.cancelAddCard}/>
            </div>
        </div>
        const cardList = 
        <div className='cardList'>
            {this.state.cardList.map((card,idx)=>{
                return <Card id={idx} key={idx} title={card.title} body={card.body} deleteCard={this.deleteCard}/>
            })}
        </div>
        
        return (
            <div>
                {showCardForm}
                {cardForm}
                {this.state.cardList? cardList:<div/>}
            </div>
        )
    }
}
