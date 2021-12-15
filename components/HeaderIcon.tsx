import type {NextPage} from 'next'

type Props = any

const HeaderIcon:NextPage<Props> = ({Icon, active}) => {

    return (
        <div className={" cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl items-center flex   "}>
            <Icon className={`h-5 group-hover:text-blue-500 text-center mx-auto ${active && "text-blue-500"}`} />
        </div>
    )
}

export default HeaderIcon
