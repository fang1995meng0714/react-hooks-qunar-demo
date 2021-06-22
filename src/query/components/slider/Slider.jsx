import React, {memo, useRef, useEffect, useState, useMemo} from 'react';
import './Slider.css';
import PropTypes from 'prop-types';
import useWinSize from '../../../costom-hooks/useWinSize';

const Slider = memo(function Slider(props) {
    const {
        title,
        currentStartHours,
    } = props;
    
    const winSize = useWinSize();

    const startHandle = useRef();
    const endHandle = useRef();

    const lastStartX = useRef();
    const lastEndX = useRef();

    const range = useRef();
    const rangeWidth = useRef();

    const [start, setStart] = useState(() => (currentStartHours / 24) * 100);

    const startPercent = useMemo(() => {
        if(start > 100) {
            return 100;
        }

        if(start < 0) {
            return 0;
        }

        return start;
    }, [start])

    function onStartTouchBegin(e) {
        const touch = e.targetTouches[0];
        lastStartX.current = touch.pageX;
    }

    function onEndTouchBegin(e) {
        const touch = e.targetTouches[0];
        lastEndX.current = touch.pageX;
    }

    function onStartMove(e) {
        const touch = e.targetTouches[0];
        const distance = touch.pageX - lastStartX.current;
        lastStartX.current = touch.pageX;

        setStart(() => start + (distance / rangeWidth.current) * 100);
    }

    function onEndTouchMove(e) {
        const touch = e.targetTouches[0];
        lastEndX.current = touch.pageX;
    }

    useEffect(() => {
        rangeWidth.current = parseFloat(
            window.getComputedStyle(range.current).width
        )
    }, [winSize.width])

    useEffect(() => {
        startHandle.current.addEventListener('touchstart', onStartTouchBegin,false);
        startHandle.current.addEventListener( "touchmove", onStartMove, false);
        endHandle.current.addEventListener("touchstart", onEndTouchBegin, false);
        endHandle.current.addEventListener("touchmove", onEndTouchMove, false);

        return () => {
            startHandle.current.removeEventListener('touchstart', onStartTouchBegin,false);
            startHandle.current.removeEventListener( "touchmove", onStartMove, false);
            endHandle.current.removeEventListener("touchstart", onEndTouchBegin, false);
            endHandle.current.removeEventListener("touchmove", onEndTouchMove, false);
        }
    })

    return (
        <div className="option">
            <h3>{title}</h3>
            <div className="range-slider">
                <div className="slider" ref={range}>
                    <div className="slider-range">
                    </div>
                    <i 
                        className="slider-handle"
                        ref={startHandle}
                        style={{left: startPercent + "%"}}
                    >
                        <span>3点</span>
                    </i>
                    <i 
                        className="slider-handle"
                        ref={endHandle}
                        style={{left: "100%"}}
                    >
                        <span>3点</span>
                    </i>
                </div>
            </div>
        </div>
    )
}) 

Slider.propTypes = {
    title: PropTypes.string.isRequired,
    currentStartHours: PropTypes.number.isRequired,
    onStartChanged: PropTypes.func.isRequired,
}

export default Slider;