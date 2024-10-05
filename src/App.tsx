import { Editor } from './components/editor';

const App = () => {
	return (
		<div className="min-h-screen text-zinc-900 bg-white grid grid-cols-12">
			<aside className="bg-zinc-50 border-r border-r-zinc-100 p-4 col-span-3" />
			<main className="p-4 col-span-9">
				<div className="pt-16 max-w-[700px] mx-auto">
					<Editor />
				</div>
			</main>
		</div>
	);
};

export default App;
