export const Button = ({ children, onClick, disabled }) => {
    return (
        <>
            <button className={disabled ? 'button__disabled' : 'button'} onClick={onClick}>
                {children}
            </button>
        </>
    );
};
