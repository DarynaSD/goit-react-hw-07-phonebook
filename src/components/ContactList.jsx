import React, { useEffect } from 'react';

import ContactItem from './ContactItem';
import { List } from './styled/Parts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts, selectorVisible } from 'redux/selectors';
import { fetchContacts } from 'redux/slice';

const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filtered = useSelector(selectorVisible);
  console.log('contacts', contacts);
  console.log('filtered', filtered);

  const dispatch = useDispatch();

  useEffect(() => {
    !filtered && dispatch(fetchContacts());
  }, [dispatch, filtered]);

  return (
    // <div>
    //   <List>
    //     {contacts.map(oneCont => (
    //       <ContactItem item={oneCont} key={oneCont.id} />
    //     ))}
    //   </List>
    // </div>

    <div>
      {filtered &&
        (!filtered.length ? (
          <h1>No data found</h1>
        ) : (
          <List>
            {filtered.map(oneCont => (
              <ContactItem item={oneCont} key={oneCont.id} />
            ))}
          </List>
        ))}
    </div>
  );
};

export default ContactList;

// {
//   filteredProducts &&
//     (!filteredProducts.length ? (
//       <h1>No data found</h1>
//     ) : (
//       filteredProducts.map(product => (
//         <div key={product.id} className="container mt-3">
//           <Product product={product} />
//         </div>
//       ))
//     ));
// }
