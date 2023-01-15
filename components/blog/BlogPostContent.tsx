import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PostData } from '../../data/models/post-data';
import classes from './BlogPostContent.module.css';
import BlogPostContentHeader from './BlogPostContentHeader';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';

export default function BlogPostContent({ post }: { post: PostData }) {
  SyntaxHighlighter.registerLanguage('js', js);
  SyntaxHighlighter.registerLanguage('ts', ts);
  SyntaxHighlighter.registerLanguage('jsx', jsx);
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

    code(code: any) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },

    a(link: any) {
      const { href, children, title } = link;

      if (title && title === 'pageLink')
        return <Link href={href}>{children}</Link>;

      return (
        <a href={href} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      );
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
