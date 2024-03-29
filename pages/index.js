import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from './components/PageTitle'


const fetcher = (...args) => fetch(...args).then(res => res.json())//...args 

const Index = () =>{

const{data, error} = useSWR('/api/get-promo', fetcher)
//return(<pre>{JSON.stringify(data)}</pre>) //Para ver se esta retornando alguma coisa
    return(
        <div>
            <PageTitle title='Seja Bem Vindo'/>
            <h1 className='titulo'>Aurora Boutique</h1>
            <p className='texto'>
            Ficamos felizes que esteja aqui!<br/>
            Conte a nós como foi sua experiência.<br/>
            Adoraríamos ouvir.
            </p>
            <div className='botao'>
                <Link href='/pesquisa'>
                    <a className='botaoDentro'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            { !data && <p>Carregando...</p> /*Se não tiver data ainda, mostre que esta garregando*/}
            { !error && data && data.showCoupon && /*Aqui, se tiver data, mostre a mensagem. É uma maneira de fazer if no react*/ 
                <p className='my-12 text-center'>
                   {data.message}
                </p>
            }
        </div>
    )
}

export default Index;