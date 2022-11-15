import getDragons from './dragonStore';

const getApiDragons = async (dispatch) => {
    const url = 'https://api.spacxdata.com/v3/dragons';
    const data = await fetch(url).then((res) => res.json());
    dispatch(getDragons(data));
}

export default getApiDragons;
