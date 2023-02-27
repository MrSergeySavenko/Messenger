export const Button = ({ children, onClick, disabled, longButton }) => {
    const renderClassName = () => {
        if (longButton) {
            return 'button__long';
        }
        return disabled ? 'button__disabled' : 'button';
    };

    return (
        <>
            <button className={renderClassName()} onClick={onClick}>
                {children}
            </button>
        </>
    );
};
