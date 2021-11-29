import styles from '../styles/Home/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'

export const getServerSideProps = async () => {
  console.log(process.env.API_KEY);

  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
  const data = await res.json()
  return {
    props: {
      pictures: data
    }
  }
}


export default function Home({ pictures }) {
  return (
    <div>
      {/* { pictures.map(picture => (
        <div key={picture.title}>
          <Image 
            src={picture.url}
            alt='Holis'
            width='400'
            height='400'
          />
        </div>
      )) } */}
      <Image 
          src={pictures.url}
          alt='Holis'
          width='400'
          height='400'
      />
    </div>
  )
}
