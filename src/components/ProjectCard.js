import React from 'react'

function ProjectCard(props) {
    return (
        <li className='cards__item'>
            <a className='cards__item__link' href={props.path} target='blank'>
                <figure className='cards__item__img-wrap' data-category={props.label}>
                    <img src={props.src} alt='Project Image' className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                        {props.text}
                    </h5>
                </div>
            </a>
        </li>
    )
}

export default ProjectCard
