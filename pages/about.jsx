import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function getStaticProps() {
  const content = fs.readFileSync(path.join(process.cwd(), 'public/content/about.md'), 'utf8');
  return { props: { content } };
}

export default function AboutPage({ content }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
}
