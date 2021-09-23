
const usePost = async(url: string, data: any): Promise<void> => {
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return res.json()
}

export default usePost;