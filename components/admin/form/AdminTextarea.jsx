import PropTypes from 'prop-types'

export default function AdminTextarea({ label, name, errorMsq, isRequired, register}) {
    return (
        <div className="md:flex md:items-center mb-3">
            <div className="md:w-1/4">
                <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor={name}>
                    {label}
                    {isRequired && (
                        <sup className='text-red-500'>*</sup>
                    )}
                </label>
            </div>
            <div className="md:w-3/4">
                <textarea
                    className="appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-64"
                    id={name}
                    type="text"
                    {...register(name, { required: isRequired })}
                    />
                <p>{errorMsq}</p>
            </div>
        </div>
    )
}

AdminTextarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    errorMsq: PropTypes.string,
    isRequired: PropTypes.bool,
    register: PropTypes.func,
}