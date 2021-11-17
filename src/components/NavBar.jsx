import styled from 'styled-components';


export const ContainerNav = styled.div`
display: flex;
width: 100%;
max-height: 20%;
justify-content: space-between;
align-items: center;
background-color: ${props => props.theme.subBg};
padding: 1.5em;

`
export const Button = styled.button`
margin-left: 1em;

border:none;
background-color: transparent;
border: 1px solid  ${props => props.theme.accent};

color: ${props => props.theme.accent};
border-radius: 0.5em;
font-size:0.8em;
padding: 0.5em;
transition: background-color 0.6s;
transition: color 0.6s;


:hover {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.bodyBg};

}

`
export const NavGroup = styled.div`
display: flex;
`

export const NavLink = styled.p`

text-decoration:none;
margin-left: 1em;


:hover {
    color: ${props => props.theme.accent};
}

`