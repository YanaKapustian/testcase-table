import { Container, DivFlex, H2, Span } from '../styles/TableStyles';
import { NavLink } from "react-router-dom";
import '../styles/Table.css'
import InfiniteListWithVerticalScroll from '../components/InfiniteListWithVerticalScroll';

const Table = () => {
   return ( 
      <div>
         <Container>
         <DivFlex>
            <Span><NavLink to='/form' className='link'>Add the client</NavLink></Span>
         </DivFlex>
         <H2>The table of the clients that are given special offer</H2>
         </Container>
         <InfiniteListWithVerticalScroll></InfiniteListWithVerticalScroll>
      </div>
      
    );
}
 
export default Table;