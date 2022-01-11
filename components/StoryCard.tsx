import type {NextPage} from 'next'

const StoryCard:NextPage = () =>{

    const hell : string = "hover:bg-gray-300";
    return (
        <div className='w-32 rounded-2xl relative h-40 bg-gray-200 transform transition duration-500 hover:scale-110 hover:bg-gray-300 '>
            <img src="/images/placeholder-image.png" className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 ' width={200}/>
            {/* <h1>hey</h1> */}
            <div className='w-8 h-8 rounded-full absolute top-0 left-0 m-3 bg-gray-500'></div>
        </div>
    )
}

export default StoryCard
