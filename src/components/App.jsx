// import React from 'react';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import css from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div className={css.main}>
      <h1>React homework-1 template</h1>
      <div className={css.taskContainer}>
       
       
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        {/* Відображення статистики завантажень з data.json */}
        <Statistics title="Upload stats" stats={data} />

        {/* Відображення списку друзів з friends.json  передаємо пропси в змінну friends */}
        <FriendList friends={friends} />
        {/* передаємо значення масиву даних  в пропс */}
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
