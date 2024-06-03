import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

    export const Grid = () => {

    return (
        <section id='about'>            
        <BentoGrid>
        {gridItems.map(({className,title,description,imgClassName,titleClassName,img,spareImg,id})=>(
            <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}

            />
        ))}
        </BentoGrid>
        </section>
    )
    }


