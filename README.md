# React: Notes

## Environment 

- React Version: 16.13.1
- Node Version: 12(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/uND1hBSNcYaVJ9l9JeV23w/notes.gif)

## Functionality Requirements

- There is an input box for 'Note Title' in which the user can type the title of the note.
- There is an input box for 'Note Status' in which the user can type the status. For example, 'active', 'complete', 'in progress', 'pending', or anything the user wants. (Status is case insensitive)
- Clicking on the button 'Add Note' will add the note to the component. After adding, the values in the input boxes are reset.
- Each node should be added inside the table `<tbody data-testid="noteList">` as an individual row. Note name and status should be added using `<tr><td>{name}</td><td>{status}</td></tr>`.
- The app has 3 buttons that, when clicked, filter the notes from the list below:
  - 'All' - This is the default selected button, and it displays all the notes added by the user ('Active', 'Completed', and any other status as added by the user.)
  - 'Active' - Clicking on this displays only the notes having the status 'active'. (in the order added by the user)
  - 'Completed' - Clicking on this displays only the notes having the status 'completed'. (in the order added by the user)
- When 'All' button is clicked, the notes displayed should be in the following order:
  - All notes that have the status ‘active’ (in the order added by the user)
  - All notes that have the status ‘completed’ (in the order added by the user)
  - All other notes in the order added by the user.
 
## Testing Requirements

The following data-testid attributes are required in the component for the tests to pass:

- Name input should have data-testid attribute 'input-note-name'.
- Status input should have data-testid attribute 'input-note-status'.
- Add Note button should have data-testid attribute 'submit-button'.
- All button should have data-testid attribute 'allButton'.
- Active button should have data-testid attribute 'activeButton'. 
- Completed button should have data-testid attribute 'completedButton'.
- The table body <tbody> should have data-testid attribute 'noteList'.

Please note that component has above data-testids for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
