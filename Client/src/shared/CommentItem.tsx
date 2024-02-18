type Props = {
    commenterName: string;
    commenterDate: string;
    commentContent: string;
};

const CommentItem = ({
    commenterName,
    commentContent,
    commenterDate,
}: Props): JSX.Element => {
    return (
        <div className="border border-grey2 p-2 lg:p-4 mb-2 lg:mb-4">
            <div className="flex justify-between">
                <div className="mb-2">{commenterName}</div>
                <div className="text-grey4 text-sm font-bold">
                    {commenterDate}
                </div>
            </div>
            <div>{commentContent}</div>
        </div>
    );
};

export default CommentItem;
