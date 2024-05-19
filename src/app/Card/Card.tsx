'use client';
import React, { useState } from 'react';
import './card.css';
import card from './card.module.css';
import cardscss from './card.module.scss';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
const Card = () => {
    const [expanding, setExpanding] = useState(false);
    return (
        <div className={`card ${card.card} ${cardscss.card}`}>
            Card
            <div
                className={clsx('card', {
                    [cardscss.card]: expanding,
                })}
            >
                Card children
            </div>
            <Button variant="outline" onClick={() => setExpanding((prev) => !prev)}>
                Toggle Expanding
            </Button>
        </div>
    );
};

export default Card;
