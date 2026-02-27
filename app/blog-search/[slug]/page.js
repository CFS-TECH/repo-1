import BlogSearchPage from '@/page/SearchResult/BlogSearch/BlogSearchPage'
import React from 'react'

const page = async ({params}) => {
    const {slug} = await params;

  return (
    <div>
        <BlogSearchPage slug={slug}/>
    </div>
  )
}

export default page