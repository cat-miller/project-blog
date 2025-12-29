'use client'
import styles from './StarsBackground.module.css';
import { Star02 } from "@/components/Stars/Star02";
import { Star03 } from "@/components/Stars/Star03";
import {useEffect, useState} from "react";

export default function StarsBackground()  {
    const [maxSize, setMaxSize] = useState({ height: window?.innerHeight ?? 0, width: window?.innerWidth ?? 0 });
    const topLeftItems = [Star02, Star03, Star02, Star03, Star03, Star03];
    const topRightItems = [Star02, Star03, Star03, Star02];
    const bottomLeftItems = [Star03, Star02, Star03, Star02, Star03];
    const bottomRightItems = [Star02, Star02, Star03, Star03, Star02];

    useEffect(()=>{
        if (!window) return;
        const handleResize = () => {
            setMaxSize({ height: window.innerHeight, width: window.innerWidth });
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])

    const renderStars = (items, positionClass, color = 'var(--color-decorative-600)') =>
        items.map((ItemComponent, index) => {
            const offsetTopBottomValue = Math.floor(Math.random() * 1024);
            const offsetLeftRightValue = Math.floor(Math.random() * 512);
            const itemDistance = 112;
            const size = Math.floor(Math.random() * 64) + 16;
            const strokeWidth = Math.random() * 40 / 10 + 1;
            const opacity = 1;
            const rotation = Math.random() * 360
            const fill = Math.round(Math.random())

            const maxWidth = maxSize.width - size;
            const maxHeight = maxSize.height - size;

            if (offsetLeftRightValue > maxWidth || offsetTopBottomValue > maxHeight) return null;

            return (
                <ItemComponent
                    key={index}
                    className={`${styles.position} ${positionClass}`}
                    style={{
                        ['--offset']: `${Math.floor(Math.random() * offsetTopBottomValue) + itemDistance * index}px`,
                        ['--offset2']: `${Math.floor(Math.random() * offsetLeftRightValue) + itemDistance * index}px`,
                        width: size, height: size, strokeWidth, color, opacity, transform: `rotate(${rotation}deg)`, fill: fill ? 'currentColor' : 'none'
                    }}
                />
            )
        });

    return (
        <>
            <div>{renderStars(topLeftItems, `${styles.top} ${styles.left}`)}
                {renderStars(topLeftItems, `${styles.top} ${styles.left}`)}</div>
            <div>{renderStars(topRightItems, `${styles.top} ${styles.right}`)}
                {renderStars(topRightItems, `${styles.top} ${styles.right}`)}</div>
            <div>{renderStars(bottomLeftItems, `${styles.bottom} ${styles.left}`)}
                {renderStars(bottomLeftItems, `${styles.bottom} ${styles.left}`)}</div>
            <div>{renderStars(bottomRightItems, `${styles.bottom} ${styles.right}`)}
                {renderStars(bottomRightItems, `${styles.bottom} ${styles.right}`)}</div>
        </>
    );
};
