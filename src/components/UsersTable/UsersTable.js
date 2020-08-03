import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsersTable.module.css';

const UsersTable = ({ usersList, month }) => (
  <table className={styles.UsersTableWrapper}>
    {usersList.length > 0 ? (
      <caption className={styles.caption}>
        {usersList.length} users was born in {month}
      </caption>
    ) : (
      <caption className={styles.caption}>Put mouse cursor over month</caption>
    )}

    {usersList.length > 0 &&
      usersList.map(user => (
        <tr key={user.id}>
          <td>
            {user.firstName} {user.lastName}
          </td>
          <td>{user.dob}</td>
        </tr>
      ))}
  </table>
);

UsersTable.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  month: PropTypes.string.isRequired,
};

export default UsersTable;
