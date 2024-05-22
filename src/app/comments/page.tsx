import Link from 'next/link';

export default async function Page() {
    const dynamicData = await (
        await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10', {
            next: { revalidate: 60 },
        })
    ).json();

    return (
        <div>
            {dynamicData.map((comment: any) => (
                <div key={comment.id} className="my-3 shadow">
                    <div>
                        <h4>
                            {comment.id} - {comment.title}
                        </h4>
                        <p>{comment.body}</p>
                        <Link href={`comments/${comment.id}`}>
                            <>See more</>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
