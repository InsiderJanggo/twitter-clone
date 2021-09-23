
const useFetch = async(url: string, data: any): Promise<void> => {
    const res = await fetch(url)

    return res.json()
}

export default useFetch