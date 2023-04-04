export const status = (theme, ownerState) => {
    const { color = 'primary' } = ownerState;
    return {
        backgroundColor: theme.palette[color].main,
        color: theme.palette[color].contrastText,
        fontSize: '14px',
        padding: '2px 12px',
        borderRadius: '16px',
        minWidth: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}