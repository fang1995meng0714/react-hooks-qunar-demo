import { h0 } from '../common/fp';

export default function(departDate) {
    const isPrevDisabled = h0(departDate) <= h0();
    const isNextDisabled = h0(departDate) - h0() >= 20 * 86400 * 1000;

    return {
        isPrevDisabled,
        isNextDisabled
    }
}