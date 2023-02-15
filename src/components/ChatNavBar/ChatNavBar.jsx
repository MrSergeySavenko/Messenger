import { useState, useEffect, useRef } from 'react';
import { ChatDropdown } from '../ChatDropdown/ChatDropdown';

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='nav'>
            <p className='nav__head'>Чатик</p>
            <div>
                <button
                    className='nav__button'
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(true);
                    }}
                >
                    ВСЕ ЧАТЫ
                </button>
                {open && <ChatDropdown open={open} onClose={onClose} />}
            </div>
        </div>
    );
};
