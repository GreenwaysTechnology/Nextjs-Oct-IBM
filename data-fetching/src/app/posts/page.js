// import FetchPost from "@/app/posts/components/FetchPosts";

import FetchPostsUsingSWR from "@/app/posts/components/PostsClientUsingSWR";


export default function PostPage(){
    return <div>
         {/* <FetchPost/> */}
         <FetchPostsUsingSWR/>
    </div>
}