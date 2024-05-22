export const dynamicParams = true;
export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

async function getComment(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const post = await res.json();
    return post;
}
export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const comment = await getComment(id);
    return <div>{comment.name}</div>;
}
