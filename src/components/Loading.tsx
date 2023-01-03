const Loading: React.FC = () => {
    return (
        <div className="mt-6 flex justify-center">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
        </div>
    );
};

export const SmallLoading: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-gray-900"></div>
        </div>
    );
};

export default Loading;
