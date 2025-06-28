import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'content', 'faq.md');
  const content = fs.readFileSync(filePath, 'utf8');
  return { props: { content } };
}

export default function Faq({ content }) {
  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
