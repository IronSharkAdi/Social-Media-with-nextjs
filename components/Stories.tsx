import { NextPage } from 'next'
import StoryCard from './StoryCard'


const Stories:NextPage = () =>{



    return (
        <div className='flex mt-5 p-2 justify-center space-x-5 mx-auto'>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
        </div>
    )
}

export default Stories