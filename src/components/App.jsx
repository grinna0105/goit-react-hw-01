import Profile from './Profile/Profile';
import userData from '../userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';


export default function App() {
  return (
    <>
      <Profile
        name={userData.name}
        image={userData.image}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </>
  );
}

