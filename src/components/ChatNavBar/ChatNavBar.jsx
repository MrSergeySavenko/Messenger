import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../ChatButton/ChatButton';
import { ChatDropdown } from '../ChatDropdown/ChatDropdown';

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    // const [disabled, setDisabled] = useState(false);

    const { isLoading } = useSelector((state) => state.messageReducer);

    const onClose = () => {
        setOpen(false);
    };

    const handleNavClick = (e) => {
        e.stopPropagation();
        setOpen(true);
    };

    return (
        <div className='nav'>
            <p className='nav__head'>Чатик</p>
            <div>
                <div className='nav__button'>
                    <Button onClick={handleNavClick} disabled={isLoading}>
                        ВСЕ ЧАТЫ
                    </Button>
                </div>

                {open && <ChatDropdown open={open} onClose={onClose} />}
            </div>
        </div>
    );
};
