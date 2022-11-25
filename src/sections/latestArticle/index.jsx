import React from 'react';
import { Card, Title } from "../../components";
import './style.css'
const LatestArticle = ({data}) => {

    

    return ( 
        <section className='containerLast'>
            <>
                <Title text={'Latest Article'}/>
            </>
            <article className='card__section'>
                {data.map(item=>(
                    <Card image={item.imageUrl} author={item.author} text={data.content} title={item.title}/>

                ))}
            </article>
        </section>
     );
}
 
export default LatestArticle;