const baseUrl = 'http://localhost:8090'

export default async function fetcher(url, ...otherParams) {
    if (typeof localStorage !== 'undefined') {
        const token = localStorage.getItem('token')
        const params = (otherParams && otherParams.length>0) ? otherParams[0] : {}

        if (token) {
            otherParams = [{...params, headers: {...params?.headers, Authorization: `Bearer ${token}`}}]
        }
    }

    const res = await fetch(baseUrl + url, ...otherParams);

    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.')
        error.info = await res.json()
        error.status = res.status

        throw error
    }

    return res.json()
}