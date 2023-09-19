import { useState } from 'react';
import './App.css'
import useFetch from './custom-hooks/example.hook';
import { Card } from './components';
import {MainLayout} from './layouts';


function App() {

  const [ count,setCount ] = useState<number>(1);
  // const [ name,setName ] = useState<string>('');
  const { data, error, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`)

  // useEffect(() => {
  //   //! DESARROLLO
    
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
  //   .then(res => res.json())
  //   .then( (data) => {
  //     setName(data.name)
  //   } )

  //   return () => {
  //     //! SE DESTRUYE
  //   }
  // }, [ count ]) //! LOS LISTENERS

  // useEffect(() => {
  //   let interval:number;
  //   if(count>10){
     
  //     interval = setInterval(() => {
  //       console.log('Interval')
  //     },1000)
  //   }
  //   return () => {
  //     clearInterval(interval)
  //     console.log('Clear interval')
  //   }
  // }, [count])


  
  function incrementCount(){
    setCount(count+5);
  }  

  return (
    <>
      <h1 className= {count %2 === 0 ? 'title-normal' : 'title-dark'  }>Hello</h1>
      <button onClick={ ()=> incrementCount() }>Click</button>
      {count}
      {/* <hr />
      <br />
      { count>=30  && <div> Es mayor o igual a 30 </div>}
      { count %2 === 0 ? <p>Es par</p> : <p>Es impar</p> }   */}
      {/* { name && <p>{name}</p> } */}
      <hr /><hr />
      {data?.name ?? 'Nothing'}
      <hr />
      {error}
      <hr />
      {loading}
      <hr /><hr />
      
      <MainLayout>
        <Card age={14} name='Jhon' />
      </MainLayout>



    </>
  )
}

export default App
