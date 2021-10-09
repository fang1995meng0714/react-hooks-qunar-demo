import { useCallback } from 'react';
import { h0 } from '../common/fp';

export default function(departDate, dispatch, nextData, prevDate) {
    const isPrevDisabled = h0(departDate) <= h0();
    const isNextDisabled = h0(departDate) - h0() > 20 * 86400 * 1000;

    const prev = useCallback(() => {
        if(isPrevDisabled) {
            return;
        }

        dispatch(prevDate());
    }, [isPrevDisabled]);

    const next = useCallback(() => {
        if(isNextDisabled) {
            return;
        }

        dispatch(nextData());
    }, [isNextDisabled])

    return {
        isPrevDisabled,
        isNextDisabled,
        prev,
        next
    }
}