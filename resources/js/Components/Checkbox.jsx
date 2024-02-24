export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            class={
                "form-check-input" +
                className
            }
        />
    );
}
