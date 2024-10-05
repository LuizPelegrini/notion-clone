import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import html from 'highlight.js/lib/languages/xml';
import { createLowlight } from 'lowlight';
import content from '../initial-content.json';
import 'highlight.js/styles/github-dark.min.css';

const lowlight = createLowlight();
lowlight.register('html', html);

export const Editor = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			CodeBlockLowlight.configure({
				lowlight,
			}),
		],
		content,
		editorProps: {
			attributes: {
				class: 'prose outline-none',
			},
		},
	});

	return <EditorContent editor={editor} />;
};
