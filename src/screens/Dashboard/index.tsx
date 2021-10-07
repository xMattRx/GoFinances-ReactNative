
import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { Container, Header, HighlightCards, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles';

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

                    <Icon name="power"/>

                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard/>
                <HighlightCard/>
                <HighlightCard/>
            </HighlightCards>            
        </Container>
        
        )
}
