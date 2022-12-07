export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gL8emg9E6TrQN2rxrxXV0N8sssKKkP2a&q=${ category }&limit=6`
    const res = await fetch( url )
    const { data } = await res.json()

    const gifs = data.map( img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))

    return gifs

}