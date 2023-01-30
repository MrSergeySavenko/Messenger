import { useState, useEffect, useRef } from 'react';
import { ChatDropdawn } from '../ChatDropdawn/ChatDropdawn';

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
        // console.log(open);
    };

    return (
        <div className='nav'>
            <p className='nav__head'>Чатик</p>
            <div>
                <button
                    className='nav__button'
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log(open);
                        setOpen(true);
                    }}
                >
                    ВСЕ ЧАТЫ
                </button>
                {open && <ChatDropdawn open={open} setOpen={setOpen} onClose={onClose} />}
            </div>
        </div>
    );
};
