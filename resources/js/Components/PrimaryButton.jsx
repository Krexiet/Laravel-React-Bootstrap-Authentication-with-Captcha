export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button 
            {...props}
            class={
                'btn btn-primary' 
            }
        >
            {children}
        </button>
    );
}
