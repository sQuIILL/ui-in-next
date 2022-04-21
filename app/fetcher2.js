// const fetcher = (...args) => fetch(...args).then(res => res.json())
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

const baseUrl = 'http://localhost:8090'

export default function fetcher2(url, ...otherParams) {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))

    return url.startsWith('/')
        ? fetch(baseUrl + url, ...otherParams).then(res => res.json())
        : fetch(url, ...otherParams).then(res => res.json())
}