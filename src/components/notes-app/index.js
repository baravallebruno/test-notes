import React, { useState, useEffect } from 'react';
import './index.css';

function NotesApp() {
	const [note, setNote] = useState({
		title: '',
		status: '',
		id: 0
	});
	const [activeNotes, setActiveNotes] = useState([]);
	const [completedNotes, setCompletedNotes] = useState([]);
	const [otherNotes, setOtherNotes] = useState([]);
	const [showNotes, setShowNotes] = useState([]);
	const [isActive, setIsActive] = useState({
		active: false,
		completed: false,
		all: true
	});

	//destructuring notes
	const { title, status } = note;

	useEffect(() => {
		if (isActive.active) {
			setShowNotes([...activeNotes]);
		} else if (isActive.completed) {
			setShowNotes([...completedNotes]);
		} else {
			setShowNotes([...activeNotes, ...completedNotes, ...otherNotes]);
		}
	}, [
		activeNotes,
		completedNotes,
		otherNotes,
		isActive.active,
		isActive.completed
	]);

	const handleChange = e => {
		setNote({
			...note,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		note.id = note.id + 1;

		//create notes array
		if (note.status.toLowerCase() === 'active') {
			setActiveNotes([...activeNotes, note]);
		} else if (note.status.toLowerCase() === 'completed') {
			setCompletedNotes([...completedNotes, note]);
		} else {
			setOtherNotes([...otherNotes, note]);
		}

		//clean form
		setNote({
			title: '',
			status: '',
			id: note.id
		});
	};

	const selectActiveNotes = () => {
		setShowNotes(activeNotes);
		setIsActive({
			active: true,
			completed: false,
			all: false
		});
	};

	const selectCompletedNotes = () => {
		setShowNotes(completedNotes);
		setIsActive({
			active: false,
			completed: true,
			all: false
		});
	};

	const selectAllNotes = () => {
		setShowNotes([...activeNotes, ...completedNotes, ...otherNotes]);
		setIsActive({
			active: false,
			completed: false,
			all: true
		});
	};

	return (
		<div className='layout-column align-items-center justify-content-start'>
			<section className='layout-row align-items-center justify-content-center mt-30'>
				<input
					data-testid='input-note-name'
					type='text'
					className='large mx-8'
					placeholder='Note Title'
					name='title'
					value={title}
					onChange={handleChange}
				/>
				<input
					data-testid='input-note-status'
					type='text'
					className='large mx-8'
					placeholder='Note Status'
					name='status'
					value={status}
					onChange={handleChange}
				/>
				<button className='' data-testid='submit-button' onClick={handleSubmit}>
					Add Note
				</button>
			</section>

			<div className='mt-50'>
				<ul className='tabs'>
					<li
						className={
							isActive.all
								? 'tab-item active slide-up-fade-in'
								: 'tab-item slide-up-fade-in'
						}
						data-testid='allButton'
						onClick={() => selectAllNotes()}
					>
						All
					</li>
					<li
						className={
							isActive.active
								? 'tab-item active slide-up-fade-in'
								: 'tab-item slide-up-fade-in'
						}
						data-testid='activeButton'
						onClick={() => selectActiveNotes()}
					>
						Active
					</li>
					<li
						className={
							isActive.completed
								? 'tab-item active slide-up-fade-in'
								: 'tab-item slide-up-fade-in'
						}
						data-testid='completedButton'
						onClick={() => selectCompletedNotes()}
					>
						Completed
					</li>
				</ul>
			</div>
			<div className='card w-40 pt-30 pb-8'>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody data-testid='noteList'>
						{showNotes.map(noteItem => (
							<tr key={noteItem.id}>
								<td>{noteItem.title}</td>
								<td>{noteItem.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default NotesApp;
