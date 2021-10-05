import React from 'react'
import { Container, Header, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles'

export function Dashboard() {
    return (
        
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={require('../../assets/Lily_Collins.jpg')} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Lilly</UserName>
                        </User>
                    </UserInfo>
                </UserWrapper>
            </Header>
        </Container>
        
        )
}
