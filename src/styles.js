
import styled from 'styled-components';

export const Button= styled.button`
background-color:${props => (props.primary ? '#4CAF50' : 'lightblue')};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
`

export const Input = styled.input`
border: 1px solid #ccc;
background-color: #fff;
color: black;
border-radius: 3px;
display: block;
width: 100%;
 padding: 0.5em;
 margin: 0.5em;
 border: 0.5px solid black;
`

export const Select= styled.select`
border: 1px solid #ccc;
background-color: #fff;
color: black;
border-radius: 3px;
display: block;
 padding: 0.5em;
 margin: 0.5em;
 width: 100%;
 border: 0.5px solid black;
`

export const Label = styled.label`
  display: block;
    font-size: 20px;
  width: 100%;
  max-width: 100%;
`

export const Error = styled.div`
    font-weight: bold;
    font-size: 12px;
    color: #D8000C;
    background-color: #FFD2D2;
`

export const Form = styled.form`
background-color:white;
border: 1px solid black;
width: 40%;
padding: 15px;
`

export const FormBody = styled.div`
display: flex;
  justify-content: center;
  `
export const FormGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  `

export const H1 = styled.h1`
  color:#3E3E3E;
  font:33.996px "Exo 2",sans-serif;
  padding: 24px 36px;
  background: #E4E4E4;
`
