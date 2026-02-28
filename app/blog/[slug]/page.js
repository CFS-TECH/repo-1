import BlogDetails from '@/page/Blogs/BlogDetails/BlogDetails'
import React from 'react'

const page = async({params}) => {
    const {slug} = await params
    
  return (
    <div>
        <BlogDetails slug={slug}/>
    </div>
  )
}

export default page