import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import html from 'highlight.js/lib/languages/xml';
import { createLowlight } from 'lowlight';
import content from '../initial-content.json';
import 'highlight.js/styles/github-dark.min.css';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import { FontBoldIcon, FontItalicIcon } from '@radix-ui/react-icons';

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

	if (!editor) {
		return null;
	}

	return (
		<>
			<EditorContent editor={editor} />
			<BubbleMenu editor={editor}>
				<ToggleGroup
					type="multiple"
					size="sm"
					className="shadow-center bg-white p-1 rounded-xl"
				>
					<ToggleGroupItem
						value="bold"
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={cn('w-8 h-8 p-0', {
							'text-blue-400': editor.isActive('bold'),
						})}
						data-state="off"
					>
						<FontBoldIcon width={16} height={16} />
					</ToggleGroupItem>
					<ToggleGroupItem
						value="italic"
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={cn('w-8 h-8 p-0', {
							'text-blue-400': editor.isActive('italic'),
						})}
						data-state="off"
					>
						<FontItalicIcon />
					</ToggleGroupItem>
				</ToggleGroup>
			</BubbleMenu>
		</>
	);
};
