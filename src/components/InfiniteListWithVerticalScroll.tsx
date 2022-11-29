import useInfiniteScroll from '../hook';
import { useLoadItems } from '../utils';
import { List, ListItem, Loading, ListContainer, Cell, CellExpanded, ListItemContainer } from './List';

function InfiniteListWithVerticalScroll() {
  const { loading, items, hasNextPage, error, loadMore } = useLoadItems();

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  });

  return (
    <ListContainer ref={rootRef}>
      <ListItemContainer><Cell>Full name</Cell><Cell>Username</Cell><CellExpanded>Email</CellExpanded><Cell>Phone</Cell><Cell>City</Cell></ListItemContainer>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}><Cell>{item.name}</Cell><Cell>{item.username}</Cell><CellExpanded>{item.email}</CellExpanded><Cell>{item.phone}</Cell><Cell>{item.city}</Cell></ListItem>
        ))}
        {hasNextPage && (
          <ListItem ref={infiniteRef}>
            <Loading />
          </ListItem>
        )}
      </List>
    </ListContainer>
  );
}

export default InfiniteListWithVerticalScroll;
