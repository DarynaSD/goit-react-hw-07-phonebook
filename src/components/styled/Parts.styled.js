import { styled } from 'styled-components';

const aditionalColor = '#fcb577 ';
const shadowColor = 'rgba(165, 140, 100, 0.25)';

export const Section = styled('section')({
    width: '100vw',
    height: '100vh',
    padding: 40,
    backgroundImage: `linear-gradient(90deg, #ffffff 0%, ${aditionalColor} 100%)`,
})

export const FormWrapper = styled('div')({
    width: 320,
    margin: '0 auto 40px',
    padding: 20,
    //backgroundImage: `linear-gradient(270deg, #ffffff 0%, ${aditionalColor} 100%)`,
    backgroundColor: "#fff",
    borderRadius: 15,
    boxShadow: `0px 10px 30px 0px rgba(0, 0, 0, 0.08), ${shadowColor}`,
    fontFamily: 'sans-serif',
})

export const ListWrapper = styled('div')({
    width: 320,
    margin: '0 auto',
    padding: 20,
    //backgroundImage: `linear-gradient(270deg, #ffffff 0%, ${aditionalColor} 100%)`,
    backgroundColor: "#fff",
    borderRadius: 15,
    boxShadow: `0px 10px 30px 0px rgba(0, 0, 0, 0.08), ${shadowColor}`,
    fontFamily: 'sans-serif',
})

export const InputLabelWrapper = styled('div')({
    display: 'flex',
    gap: 4,
    flexDirection: 'column',
    marginBottom: 20,
})

export const Input = styled('input')({
    height: 34,
    border: `0.5px solid ${aditionalColor}`,
    borderRadius: 10,
    padding: 8,
    fontSize: 16,
    transition: 'boxShadow, easy, 300ms',

    '&:hover': {
        boxShadow: `0px 10px 30px 0px ${shadowColor}`,
    }
})

export const Button = styled('button')({
    width: '100%',
    height: 44,
    backgroundColor: aditionalColor,
    fontSize: 16,
    fontWeight: 600,
    transition: 'boxShadow, easy, 300ms; backgroundColor, easy, 300ms',
    cursor: 'pointer',
    borderRadius: 10,
    border: aditionalColor,
    marginBottom: 20,

    '&:hover, &:focus': {
        boxShadow: `0px 10px 30px 0px ${shadowColor}`,
        backgroundColor: '#e89e5d',
    },

    '&:active': {
    backgroundColor: '#965821',
    }
})

export const List = styled('ul')({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    textDecoration: 'none',
})

export const ContactName = styled('p')({
    margin: '0 0 4px',
    fontWeight: 600,
})

export const ContactNumber = styled('p')({
    margin: '0 0 4px',
})

export const DeleteBtn = styled('button')({
    width: 90,
    height: 30,
    transition: 'boxShadow, easy, 300ms; backgroundColor, easy, 300ms',
    cursor: 'pointer',
    borderRadius: 10,
    border: `0.5px solid ${aditionalColor}`,
    backgroundColor: aditionalColor,
    padding: '0 15px',

    '&:hover, &:focus': {
        boxShadow: `0px 10px 30px 0px ${shadowColor}`,
        backgroundColor: '#e89e5d',
    },

    '&:active': {
    backgroundColor: '#965821',
    }
})

