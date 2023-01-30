import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchName } from '../../asynAction/fetchName';

export const chatList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchName());
    });

    return <div></div>;
};
