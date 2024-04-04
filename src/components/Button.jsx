import { useTheme } from "../themes/ThemeContext";

const Button = () => {
    const { changeTheme } = useTheme();

    return (
        <button onClick={changeTheme}>Change Theme</button>
    );
};

export default Button;