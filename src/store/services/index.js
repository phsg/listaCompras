import axios from 'axios';

export const services = {
    getImages: (product) => {
        const params = {
            key: 'AIzaSyCLFxHeEM5RtroEl95cMojK-aQafVCWZaw',
            cx: '93746720ae2fe509c',
            searchType: 'image',
            lr: 'lang_pt',
            num: 1,
            q: product,
        }

        return axios.get('https://www.googleapis.com/customsearch/v1', { params })
            .then(resp => resp.data.items[0].link)
            .catch(err => err);
    }
}