import React, { Component } from 'react';
import usersAPI from '../../utils/usersAPI';
import getMonthFromISODate from '../../utils/getMonthFromISODate';
import styles from './App.module.css';
import UsersTable from '../UsersTable/UsersTable';
import Legend from '../Legend/Legend';

const MonthButtonStyles = {
  margin: 2,
  padding: 3,
  border: 0,
  borderRadius: 2,
  fontSize: 16,
  fontFamily: 'inherit',
  width: 100,
};

const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getMonthColors = usersPerMonth => {
  let color = '';
  if (usersPerMonth >= 0 && usersPerMonth <= 2) {
    color = '#B2BABB'; // grey
  } else if (usersPerMonth >= 3 && usersPerMonth <= 6) {
    color = '#7FB3D5'; // blue
  } else if (usersPerMonth >= 7 && usersPerMonth <= 10) {
    color = '#7DCEA0'; // green
  } else if (usersPerMonth >= 11) {
    color = '#F1948A'; // red
  } else {
    console.log('Invalid value of usersPerMonth');
  }
  return color;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      desiredMonth: '',
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    usersAPI
      .fetchUsers()
      .then(users => this.setState({ users }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setMonth = evt => {
    this.setState({
      desiredMonth: +evt.target.name,
    });
  };

  getMonthlyUserList(month) {
    // Calculate list of users per month
    const { users } = this.state;
    const usersList = users.filter(
      user => getMonthFromISODate(user.dob) === month,
    );
    return usersList;
  }

  resetMonth = () => {
    this.setState({
      desiredMonth: '',
    });
  };

  render() {
    const { users, desiredMonth, isLoading, error } = this.state;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {users.length > 0 && (
          <div className={styles.App}>
            <Legend />
            <ul className={styles.MonthList}>
              {monthList.map((month, index) => (
                <li key={month}>
                  <button
                    type="button"
                    name={index}
                    onMouseOver={this.setMonth}
                    onFocus={this.setMonth}
                    onMouseOut={this.resetMonth}
                    onBlur={this.resetMonth}
                    style={{
                      ...MonthButtonStyles,
                      backgroundColor: getMonthColors(
                        this.getMonthlyUserList(index).length,
                      ),
                    }}
                  >
                    {month}
                  </button>
                </li>
              ))}
            </ul>

            <UsersTable
              usersList={this.getMonthlyUserList(desiredMonth)}
              month={monthList[desiredMonth]}
            />
          </div>
        )}
      </>
    );
  }
}

export default App;
