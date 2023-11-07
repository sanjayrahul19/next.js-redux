import HomePage from './components/HomePage/HomePage';
import styles from './page.module.css'

async function getUsers() {
const response = await fetch("http://localhost:8000/users");
const users = await response.json();
return users;
}


export default async function  Home() {
  const users = await getUsers();
  return (
    <main className={styles.main}>
     <HomePage users={users}/>
    </main>
  )
}
