import type {NextPage} from 'next'
import InputBox from './InputBox';
import Stories from './Stories';

const Sidebar: NextPage = () => {
    return(
        <>
            <div>
                <Stories/>
                <InputBox/>
            </div>
        </>
    )
}
export default Sidebar;