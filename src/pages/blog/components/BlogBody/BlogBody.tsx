import styles from './BlogBody.module.css';

function paragraphize(text: string): string {
    // This function can be expanded to include more complex parsing logic if needed
    return text.replace(/\n/g, '<br />');
}

export default function BlogBody({body}: {body: string}) {
    return (
        <div className={styles.blogBody}>
            {paragraphize(body).split('<br />').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    );
}
