import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { Item } from '../utils';
import '../styles/Table.css'
import {  ContainerSmall, DivFlex, Span } from "../styles/TableStyles";
import axios from "axios";

const Form = () => {
   const emailregex = /^(\D{3})+([.-]?\w+)*@(\D{2})+([.-]?\w+)*(\.\D{2,3})+$/;
   const nameregex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
   const cityregex = /[a-zA-Z]{2}/;

   let [fullName, setFullName] = useState<string>('')
   let [city, setCity] = useState<string>('')
   let [email, setEmail] = useState<string>('')
   let [username, setUsername] = useState<string>('')
   let [phone, setPhone] = useState<string>('')

   function handleName(e: React.SyntheticEvent): void {
      let target = e.target as HTMLInputElement;
      let message = document.querySelector<HTMLElement>('.message-name')
      let name = getFormattedName(target.value)
      setFullName(fullName = '')
      if (name) {
         target.value = name;
         setFullName(fullName = target.value)
         if (message !== null) message.innerText = '' 
      } else {
         if (message !== null) message.innerText = 'Full name should consist of two words at least two letters each' 
      }
   }

   function getFormattedName( input: string ) {
      let output = "";
      input.replace(nameregex, function(match)
          {
            let [first, second] = match.split(' ')
            output = first.substring(0, 1).toUpperCase() + first.substring(1).toLowerCase() + ' ' + second.substring(0, 1).toUpperCase() + second.substring(1).toLowerCase()
            return output;
          }       
        );        
      return output;
   }

   function handleCity(e: React.SyntheticEvent): void {
      let target = e.target as HTMLInputElement;
      let message = document.querySelector<HTMLElement>('.message-submit')
      setCity(city = '')
      if (target.value.match(cityregex)) {
         setCity(city = target.value)
         if (message !== null) message.innerText = '' 
      } else {
         if (message !== null) message.innerText = 'Please enter city name' 
      }
   }

   function handleEmail(e: React.SyntheticEvent): void {
      let target = e.target as HTMLInputElement;
      let message = document.querySelector<HTMLElement>('.message-email')
      setEmail(email = '')
      if (target.value.match(emailregex)) {
         setEmail(email = target.value)
         if (message !== null) message.innerText = '' 
      } else {
         if (message !== null) message.innerText = 'Please enter valid email' 
      }
   }

   function handleUsername(e: React.SyntheticEvent): void {
      let target = e.target as HTMLInputElement;
      if (target.value === '@') return;
      setUsername(username = '')
      let message = document.querySelector<HTMLElement>('.message-username')
      if (target.value.substring(0, 1) === '@' && target.value.length >= 4) {
         setUsername(username = target.value)
         if (message !== null) message.innerText = '' 
     } else {
         if (message !== null) message.innerText = 'Username should start with @ and have at least 3 characters' 
     }
   }

   function AddAt(e: React.SyntheticEvent): void {
      let target = e.target as HTMLInputElement;
      if (target.value === '') target.value = '@';
   }

   function handlePhone(e: React.SyntheticEvent): void {
      let target = e.target as HTMLInputElement;
      let message = document.querySelector<HTMLElement>('.message-phone')
      setPhone(phone = '')
      let number = getFormattedPhoneNum(target.value.substring(3))
      target.value = number;
      if (target.value.length === 18) {
         setPhone(phone = target.value)
         if (message !== null) message.innerText = '' 
      } else {
         if (message !== null) message.innerText = 'Phone number should have 10 digits' 
      }
   }

   function AddPhoneCode(e: React.SyntheticEvent): void {
      let target = e.target as HTMLInputElement;
      if (target.value === '') target.value = getFormattedPhoneNum('');
   }

   function getFormattedPhoneNum( input: string ) {
      let output = "+38 (";
      input.replace( /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/, function(match, g1, g2, g3)
          {
            if ( g1.length ) {
              output += g1;
              if ( g1.length === 3 ) {
                  output += ")";
                  if ( g2.length ) {
                      output += " " + g2; 
                      if ( g2.length === 3 ) {
                          output += " ";
                          if ( g3.length ) {
                              output += g3;
                          }
                      }
                  }
               }
            }
            return output;
          }       
        );        
      return output;
     }

   function handleSubmit(e: React.SyntheticEvent): void {
      e.preventDefault()
      const message = document.querySelector<HTMLElement>('.message-submit')
      if (message !== null) message.innerText = ''
      if (fullName && phone && email && city && username) {
        let item: Item = {
         name: fullName,
         username,
         email,
         phone,
         city
        }
        axios.post('http://localhost:3000/table', item).then(() => {
         clearInputs()
         showAlertSuccess()
        }).catch(err => showAlertError())
        
      } else {
         if (message !== null) message.innerText = 'Please fill in all the inputs'
      }
   }

   function clearInputs(): void {
      const inputs = document.querySelectorAll<HTMLInputElement>('.input')
      for (let i = 0; i < inputs.length; i++) {
         inputs[i].value = ''
      }
   }

   function showAlertSuccess() {
      let alert = document.querySelector<HTMLElement>('.alert-success')
      alert?.animate([
         {top: '-160px'},
         {top: '-75px'}
      ], {
         duration: 800,
         direction: 'normal',
         fill: 'forwards',
         easing: 'ease',
      })
      alert?.animate([
         {top: '-75px'},
         {top: '-160px'}
      ], {
         duration: 800,
         fill: 'forwards',
         easing: 'ease',
         delay: 5000,
      }) 
   }

   function showAlertError() {
      let alert = document.querySelector<HTMLElement>('.alert-error')
      alert?.animate([
         {top: '-160px'},
         {top: '-75px'}
      ], {
         duration: 800,
         direction: 'normal',
         fill: 'forwards',
         easing: 'ease',
      })
      alert?.animate([
         {top: '-75px'},
         {top: '-160px'}
      ], {
         duration: 800,
         fill: 'forwards',
         easing: 'ease',
         delay: 5000,
      }) 
   }

   function removeMessage(): void {
      const message = document.querySelector<HTMLElement>('.message-submit')
      const inputs = document.querySelectorAll<HTMLInputElement>('.input')
      for (let i = 0; i < inputs.length; i++) {
         inputs[i].addEventListener('focus', function() {
            if (message !== null) message.innerText = ''
         })
      }
   }
   removeMessage()

   return (
      <ContainerSmall>
         <div className="alert alert-success">Success! The information has been added to the table</div>
         <div className="alert alert-error">Oops! Something went wrong. Please try again</div>
         <form>
         <p className="no-margin"><input onChange={handleName} name="fullName" placeholder="Full name" className="input"></input></p>
         <p className="message message-name"></p>
         <p className="no-margin"><input onFocus={AddAt} onChange={handleUsername} name="username" placeholder="Username" className="input no-margin"></input></p>
         <p className="message message-username"></p>
         <p className="no-margin"><input onChange={handleEmail} name="email" placeholder="Email" className="input no-margin"></input></p>
         <p className="message message-email"></p>
         <p className="no-margin"><input onFocus={AddPhoneCode} onChange={handlePhone} name="phone" placeholder="Phone" className="input no-margin"></input></p>
         <p className="message message-phone"></p>
         <p className="no-margin"><input onChange={handleCity} name="city" placeholder="City" className="input"></input></p>
         <p className="message message-submit"></p>
         <DivFlex>
            <Span><NavLink to='/' className='link'>Back</NavLink></Span>
            <button type="submit" className="btn__add-client" onClick={handleSubmit}><Span>Add a client</Span></button>
         </DivFlex>
         </form>
      </ContainerSmall>
   )
}

export default Form