import { call, put, takeEvery, select } from 'redux-saga/effects';
import { fetchProducts } from '../api/products';
import { getProductsSuccess, getProductsFailure } from '../reduxToolkit/productState';

function* workGetProductsFetch(){
    const products = yield select(state => state.data.products );
    if(!products[0]) {
        const newProducts = yield call(() => fetchProducts());
        yield put(getProductsSuccess(newProducts));
    }else {
        yield put(getProductsFailure());
    }
}

function* productSaga() {
    yield takeEvery('products/getProductsFetch', workGetProductsFetch);
}

export default productSaga;