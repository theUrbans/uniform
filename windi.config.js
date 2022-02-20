module.exports = {
    shortcuts: {
        'border-radius': 'rounded-2xl',
        'error': 'bg-white border-red-600 text-red-600 hover:shadow-red-300 hover:border-red-700 transition-all duration-200',
        'error-fill': 'bg-red-600 text-light-200 hover:bg-red-700',
        'success': 'bg-white border-green-500 text-green-500 hover:shadow-green-300 hover:border-green-600 transition-all duration-200',
        'success-fill': 'bg-green-500 text-light-200 hover:bg-green-600',
        'warning': 'bg-white border-yellow-400 text-yellow-600 hover:shadow-yellow-300 hover:border-yellow-500 transition-all duration-200',
        'warning-fill': 'bg-yellow-400 text-dark-200 hover:bg-yellow-500',
        'primary': 'bg-white border-blue-500 text-blue-500 hover:shadow-blue-300 hover:border-blue-600 transition-all duration-200',
        'primary-fill': 'bg-blue-500 text-light-200 hover:bg-blue-600',
        'secondary': 'bg-white border-blue-gray-200 text-blue-gray-500 hover:shadow-blue-gray-200 hover:border-blue-gray-300 transition-all duration-200',
        'secondary-fill': 'bg-blue-gray-200 text-dark-200 hover:bg-blue-gray-300',
    },
    plugins: [
        require('@windicss/plugin-icons'),
    ]
}