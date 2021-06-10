import { h0 } from '../common/fp';

export default function(date) {
    const isPrevDisabled = h0(date) >= h0();
    const isNextDisabled = h0(date) - h0() >= 20 * 86400 * 1000;

    return {
        isPrevDisabled,
        isNextDisabled
    }
}