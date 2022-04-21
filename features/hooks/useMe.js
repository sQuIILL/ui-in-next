import fetcher from "../../app/fetcher"
import useSWR from "swr"

export default function useMe () {
    const { data, error } = useSWR('/me/', fetcher)

    return {
      me: data,
      isLoading: !error && !data,
      isError: error
    }
}