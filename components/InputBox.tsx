import type {NextPage} from 'next'

const InputBox: NextPage = () => {

    const handleSubmit = (e) =>{
         e.preventDefault();

    }

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>

        <div className='flex space-x-4 p-4 items-center'>
            <img src="https://i.pinimg.com/564x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" alt="" className=' rounded-full' width={40} height={40} />
            <form className=' flex flex-1' onSubmit={() => handleSubmit(e)}>
                <input type="text" placeholder='Whats on your mind' className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' />
                <button type='submit' className='' hidden  >Submit</button>
            </form>
        </div>
        </div>

    )
}

export default InputBox
