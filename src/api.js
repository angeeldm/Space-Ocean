const API = () => {
    try{
        const APIdata = async () => {
            const url = 'https://api.nasa.gov/planetary/apod?api_key=3I6Mg1Nsvh1yM9VOEOXqd8QCoH9T7wxZlcwg9FcU';
            const response = await fetch(url);
            const result = await response.json();

            // console.log(result);
            return result;
        }
        return APIdata();
    } catch (error){
        console.log(error);
    }
}

const RandomPics = () => {
    try{
        const APIPics = async () => {
            const url = 'https://api.nasa.gov/planetary/apod?api_key=3I6Mg1Nsvh1yM9VOEOXqd8QCoH9T7wxZlcwg9FcU&count=12';
            const response = await fetch(url);
            const result = await response.json();

            // console.log(result);
            return result;
        }
        return APIPics();
    } catch (error){
        console.log(error);
    }
}

export {API, RandomPics};