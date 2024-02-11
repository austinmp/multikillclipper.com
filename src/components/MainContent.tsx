type MaintContentProps = {
    className?: string;
}

export default function MainContent({ className }: MaintContentProps) {
    return (
        <div className={className}>Main Content</div>
    )
}