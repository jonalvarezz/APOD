import styles from '../styles/Home/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'

export const getServerSideProps = async () => {

  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json()
  return {
    props: {
      pictures: data,
      statusCode
    }
  }
}


export default function Home({ pictures }) {
  return (
    <div>
      <a href={`date?${pictures.date}`}>
        <Image 
            src={pictures.url}
            alt='Holis'
            width='400'
            height='400'
        />
      </a> 
    </div>
  )
}
