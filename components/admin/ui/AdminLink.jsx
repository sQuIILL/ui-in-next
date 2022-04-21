import Link from "next/link";
import PropTypes from 'prop-types'

export default function AdminLink({href, label}) {
    return (
        <Link href={href} passHref>
            <a className='m-2 flex items-center text-sky-50 bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-500 hover:text-white rounded px-6 py-3 text-sm font-medium shadow hover:shadow-lg'>
                {label}
            </a>
        </Link>
    )
}

AdminLink.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string,
}