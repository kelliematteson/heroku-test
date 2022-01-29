import React from 'react';
import useInput from './hooks/useInput';

export default function NameForm(props) {
    const { 
        value: firstName,
        bind: bindFirstName,
        reset: resetFirstName
        } = useInput('');
    const { 
        value: lastName,
        bind: bindLastName, 
        reset: resetLastName
        } = useInput('');

	const handleSubmit = evt => {
		evt.preventDefault();
		alert(`Submitting Name ${firstName}`);
        resetFirstName();
        resetLastName();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" {...bindFirstName} />
				</label>
                <label>
					Last Name:
					<input type="text" {...bindLastName} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<h1>{firstName} {lastName}</h1>
		</>
	);
}