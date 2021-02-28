import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'


import './header.styles.scss'
import {HeaderContainer, LogoContainer, LinksContainer, LinkContainer, OptionDiv} from './header.styles'



const Header = () => {
    console.log('me')
    return(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <LinksContainer>
            <LinkContainer to='/shop'>
                SHOP
            </LinkContainer>
            <LinkContainer to='/contact'>
                BLOG
            </LinkContainer>
            <LinkContainer to='/contact'>
                CONTACT
            </LinkContainer>
            <LinkContainer to='/contact'>
                ABOUT
            </LinkContainer>
            {/* {
                currentUser ?
                <OptionDiv onClick={() => signOut()}>SIGN OUT</OptionDiv>
                :
                <LinkContainer to='/sign-in'>SIGN IN</LinkContainer>
            } */}
            {/* <CartIcon/> */}
        </LinksContainer>
        {/* {
            hidden ?
            null :
            <CartDropdown/>
        } */}
        
    </HeaderContainer>
    
    )
}


export default (Header)