import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { ChangeEvent, FormEvent, useState, InvalidEvent } from 'react';

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link',
    content: string,
}

export interface PostType {
    id: number,
    author: Author,
    publishedAt: Date,
    content: Content[]
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Post bacana hein'
    ])

    const [newCommentText, setNewCommentText] = useState('')  

    const publishedDateFormatted = format(post.publishedAt, "d 'de' MMM 'de' yy 'às' HH:mm'h'", { 
        locale: ptBR 
    })

    const publishedRelativeDate = formatDistanceToNow(post.publishedAt, { 
        locale: ptBR, 
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        
        setComments(state => [...state, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleCreateNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />post.

                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedRelativeDate}</time>
            </header>

            <div className={styles.content}> 
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    }

                    else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um Comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleCreateNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />;
                })}
            </div>
        </article>
    )
}