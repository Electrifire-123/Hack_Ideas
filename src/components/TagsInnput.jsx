import {useState} from "react";
const TagsInput = props => {
	const [tags, setTags] = useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	return (
        <div className="flex justify-start w-96 flex-wrap min-h-12 py-0 px-2 border-2 rounded-md bg-white">
			<ul className='flex flex-wrap p-0 mt-2'>
				{tags.map((tag, index) => (
					<li key={index} className='w-auto h-8 flex items-center justify-center text-white text-sm list-none rounded-md me-2 mb-2 bg-blue-600 p-1'>
						<span className='mt-1 font-bold'>{tag}</span> 
						<span className='block w-4 h-4 text-center text-sm ms-2 text-blue-600 bg-white cursor-pointer p-0 align-middle leading-3 rounded-full'
							onClick={() => removeTags(index)}
                            >
							x
						</span>
					</li>
				))}
			</ul>
			<input
                className='flex-1 border-none h-11 text-sm pt-1 focus:outline-transparent w-20'
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="PRESS ENTER TO ADD TAGS"
			/>
		</div>
	);
};

export default TagsInput