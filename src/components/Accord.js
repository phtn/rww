import React, { Component } from 'react'
//import Collapsible from 'react-collapsible'
import { Accordion, Icon } from 'semantic-ui-react'

const styles = {
    container: {
        margin: 20,
        marginTop: 130,
        backgroundColor: 'transparent',
        borderRadius: 5,
        //minWidth: window.innerWidth,
    },
    accord: {
        minWidth: window.innerWidth - window.innerWidth *.34,
    }
}
class Accord extends Component {
    render(){
        return(
            <div style={styles.container}>  
            <Accordion styled style={styles.accord}>
                <Accordion.Title>
                <Icon name='dropdown' />
                Vitality
                </Accordion.Title>
                <Accordion.Content>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                </Accordion.Content>
                <Accordion.Title>
                <Icon name='dropdown' />
                Renters
                </Accordion.Title>
                <Accordion.Content>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
                </Accordion.Content>
                <Accordion.Title>
                <Icon name='dropdown' />
                Home Owners
                </Accordion.Title>
                <Accordion.Content>
                <p>
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </p>
                <p> A pet shop may be the most convenient way to buy a dog.
                    {' '}Buying a dog from a private owner allows you to assess the pedigree and
                    {' '}upbringing of your dog before choosing to take it home. Lastly, finding your dog
                    {' '}from a shelter, helps give a good home to a dog who may not find one so readily.
                </p>
                </Accordion.Content>
                <Accordion.Title>
                <Icon name='dropdown' />
                Business Owners
                </Accordion.Title>
                <Accordion.Content>
                <p>
                    Three common ways for a prospective owner to acquire a dog is from pet shops,
                    {' '}private owners, or shelters.
                </p>
                <p> A pet shop may be the most convenient way to buy a dog.
                    {' '}Buying a dog from a private owner allows you to assess the pedigree and
                    {' '}upbringing of your dog before choosing to take it home. Lastly, finding your dog
                    {' '}from a shelter, helps give a good home to a dog who may not find one so readily.
                </p>
                </Accordion.Content>
                <Accordion.Title>
                <Icon name='dropdown' />
                Local Government
                </Accordion.Title>
                <Accordion.Content>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                </Accordion.Content>
            </Accordion>
            </div>
        )
    }
}
export default Accord
