export default function BlogBody({body}: {body: string}) {
    return (
        <div className="blog-body">
            <p>{body}</p>
        </div>
    );

}