import { call, put } from 'redux-saga/effects';
import { services } from '../services';
import { Creators as ListActions } from '../actions/list';

const genericImg = 'https://th.bing.com/th/id/OIP.9LJ21ir5ZJszev4pYXxxfAHaHa?w=169&h=180&c=7&o=5&pid=1.7';

export function* getImageRequest(action) {
    try {
        const img = yield call(services.getImages, action.product.product);
        yield put(ListActions.getImageSuccess(action.product, img));
    } catch (err) {
        console.log(err);
        yield put(ListActions.getImageFailure(action.product, genericImg));
    }
}