import Link from 'next/link'
import React from 'react'

import { Alkatra } from 'next/font/google'
const alkatra = Alkatra({ weight: '500', subsets: ['latin'] })

export default function PostCard(props) {
    const {post} = props

  return (
    <Link className='unstyled' href={`/recipe/${post.slug}`}>
        <div className='postCard'>
            <h3 className={alkatra.className}>{post.title}</h3>
            <p>{post.bio}</p>
            <div className='statsContainer'>
                <div>
                    <h5>Prep Time</h5>
                    <p>{post.prep_time}</p>
                </div>
                <div>
                    <h5>Cook Time</h5>
                    <p>{post.cook_time}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}
