import PropTypes from 'prop-types'

export default function AdminButton({type, label}) {
    return (
        <button
            className="m-2 flex items-center text-sky-50 bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-500 hover:text-white rounded px-6 py-3 text-sm font-medium shadow hover:shadow-lg"
            type={type}
        >
            {label}
        </button>
    )
}

AdminButton.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
}