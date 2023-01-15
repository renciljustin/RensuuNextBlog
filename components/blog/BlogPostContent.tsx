import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PostData } from '../../data/models/post-data';
import classes from './BlogPostContent.module.css';
import BlogPostContentHeader from './BlogPostContentHeader';

export default function BlogPostContent({ post }: { post: PostData }) {
  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <Image
            src={`/images/posts/${post.slug}/${image.properties.src}`}
            alt={image.properties.alt}
            width={1024}
            height={576}
            className={classes.image}
          />
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };
  return (
    <article>
      <BlogPostContentHeader
        title={post.title}
        description={post.excerpt}
        image={`${post.slug}/${post.image}`}
      />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
